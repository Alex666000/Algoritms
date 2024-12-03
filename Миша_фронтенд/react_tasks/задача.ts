// 46 мин https://www.youtube.com/watch?v=xANmKpokdVU&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=10
// "ИСХОДНЫЕ ДАННЫЕ":
// Два эндпоинта: список коммнат и список сообщении - данные (массивы) пришедшие из 2-х эндпоинтов собрать в один объет,
// где ключ это день а значение: массив сообщений пришедших за этот день):
// // Пример результата:
// {
//   '2023-03-23T00:00:00': // ISO представление даты начала дня
//   [
//     {
//       "roomName": "Room name", // название комнаты из rooms
//       "id": 1,
//       "user": "user1",
//       "text": "assum aut facere repellat provident occaecati excepturi optio reprehenderit",
//       "ts": Thu Mar 23 2023 12:15:15 GMT+0200 (Восточная Европа, стандартное время)
//     },
//     ...
//   ],
//   ...
// }
// и отсортировать их по дням - нам нужно то есть взять день и отсортировать все сообщения которые пришли в этот день в отдельныи массив
// День привести к ISO формату
interface IRoom {
  id: number;
  name: string;
  type: string;
}

interface IMessage {
  roomId: IRoom["id"]; // roomId сообщения === id комнаты (вот связь ProcessedMessage с IRoom - сообщения с комнатой)
  id: number;
  user: string;
  ts: Date;
}

// Запросить GET '/rooms' возвращает IRoom[]
// Запросить GET '/messages' возвращает IMessage[]

// Необходимо запросить сообщения и комнаты и сгруппировать сообщения по дням

type ProcessedMessage = Omit<IMessage, "roomId"> & {
  roomName: IRoom["name"]; // ссылается на id комнаты
};

type ProcessedData = Record<string, ProcessedMessage[]>;

// при этом строковый ключ - ISO представление даты начала дня, Привести строку надо к такому виду: ('2022-06-21T00:00:00')

// Пример результата:
// {
//   '2023-03-23T00:00:00': // ISO представление даты начала дня
//   [
//     {
//       "roomName": "Room name", // название комнаты из rooms
//       "id": 1,
//       "user": "user1",
//       "text": "assum aut facere repellat provident occaecati excepturi optio reprehenderit",
//       "ts": Thu Mar 23 2023 12:15:15 GMT+0200 (Восточная Европа, стандартное время)
//     },
//     ...
//   ],
//   ...
// }

// -------------------------------------------------------------------------------------------------------
// РЕШЕНИЕ - АЛГОРИТМ: сначала набрасываем "скелет..", потом сформируем ProcessedMessage, это вот эта штука:
/*
    {
      "roomName": "Room name", // название комнаты из rooms
      "id": 1,
      "user": "user1",
      "text": "assum aut facere repellat provident occaecati excepturi optio reprehenderit",
      "ts": Thu Mar 23 2023 12:15:15 GMT+0200 (Восточная Европа, стандартное время)
    }, она связана с комнатами (см типизацию) те: roomId сообщения === id комнаты (вот связь ProcessedMessage с IRoom - сообщения с комнатой) и с этим
    уже можно что-то делать.

 */
const fetchRooms = async () => {
  const roomsData = await fetch("/rooms"); // []
  const messagesData = await fetch("/messages"); // []

  const result = {};

  // ProcessedMessage - собрали массив сообщений по новому виду
  const processedMessage = messagesData.map((id, text, ts, roomId) => {
    return {id, text, ts, roomName: roomsData.find(room => room.id === roomId)};
  });

  processedMessage.forEach((message) => {
    const date = message.ts.setHours(0, 0, 0, 0).toISOString();
    // date - должна быть ключем

    result[date] = [message];
    // result[date] = [message] === {
    //   '2023-03-23T00:00:00': // ISO представление даты начала дня
    //   [
    //     {
    //       "roomName": "Room name", // название комнаты из rooms
    //       "id": 1,
    //       "user": "user1",
    //       "text": "assum aut facere repellat provident occaecati excepturi optio reprehenderit",
    //       "ts": Thu Mar 23 2023 12:15:15 GMT+0200 (Восточная Европа, стандартное время)
    //     },
    //     ...
    //   ],
    //   ...
    // }

    // если в дне больше 1 сообщение то в такои записи: result[date] = [message] будет перезаписываться
    // пишем так:
    if (result[date]) { // если date есть пушим сообщение туда если нет то создаем массив с этим сообщением
      result[date].push(message);
    } else {
      result[date] = [message];
    }
  });

  return result;
};
/*
- эту запись   const processedMessage = messagesData.map((id, text, ts, roomId) => {
    return {id, text, ts, roomName: roomsData.find(room => room.id === roomId)};
  });
  оптимизируем - тк сложность большая (O от n в квадрате "квадратичная сложность") - мы на каждом сообщении идём за комнатами в массив лишнии проход:
  const roomsMap = { };

rooms.forEach(r => {
    roomsMap[room.id] = room.name;
});

const processedMessages = messages.map(({ id, ts, text, roomId }) => {
    return { id, text, ts, roomName: roomsMap[roomId] };
});
теперь сложность стала "O от n"
 */
// --------------------------------------------------------------------------------------------------------------------------------------
/*
" ВТОРОЙ вариант решения: const fetchRooms = async (): Promise<ProcessedData> => {
  const roomsResponse = await fetch("/rooms");
  const messagesResponse = await fetch("/messages");

  // Получаем массивы данных
  const roomsData: IRoom[] = await roomsResponse.json();
  const messagesData: IMessage[] = await messagesResponse.json();

  // Оптимизация: создаем Map для быстрого доступа к roomName по roomId
  const roomsMap: Record<number, string> = {};
  roomsData.forEach((room) => {
    roomsMap[room.id] = room.name;
  });

  // Преобразуем сообщения в ProcessedMessage
  const processedMessages = messagesData.map(({ id, text, ts, user, roomId }) => ({
    id,
    text,
    ts: new Date(ts), // Преобразование строки в объект Date
    user,
    roomName: roomsMap[roomId], // Быстрый доступ к названию комнаты
  }));

  // Группировка по дням
  const result: ProcessedData = {};

  processedMessages.forEach((message) => {
    const dayStart = new Date(message.ts);
    dayStart.setHours(0, 0, 0, 0); // Устанавливаем время начала дня
    const dayISO = dayStart.toISOString();

    if (!result[dayISO]) {
      result[dayISO] = [];
    }

    result[dayISO].push(message);
  });

  return result;
};

// Вызов функции и вывод результата
fetchRooms()
  .then((result) => console.log("Результат группировки сообщений:", result))
  .catch((error) => console.error("Ошибка:", error));
 */

