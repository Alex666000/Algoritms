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

// Алгоритм мышления::
// Понять цель задачи:
// Необходимо объединить данные двух эндпоинтов (rooms и messages) в структуру, где ключ — дата, а значение — массив сообщений за этот день.
// Поле roomId из сообщений связывается с id комнаты.
// Продумать структуру данных:
// Для улучшения производительности лучше сразу создать карту (объект) для хранения id комнаты и её названия. Это избавит нас от необходимости использовать find в цикле.
// Подготовить шаги:
//
// Получить данные с двух эндпоинтов.
// Преобразовать комнаты в объект (roomsMap) для быстрого поиска.
// Преобразовать сообщения в массив с нужной структурой (ProcessedMessage).
// Группировать сообщения по дням, используя toISOString для получения даты в ISO-формате.
// Обеспечить читаемость:
//
// Разбить решение на логические части: подготовка данных, преобразование, группировка.
// Обработать случаи, когда данных не хватает (например, комната не найдена).

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
" ВТОРОЙ вариант решения:
// const fetchRoomsAndMessages = async () => {
//   // Шаг 1: Получаем данные параллельно
//   const [rooms, messages]: [IRoom[], IMessage[]] = await Promise.all([
//     fetch("/rooms").then((res) => res.json()),
//     fetch("/messages").then((res) => res.json()),
//   ]);
//
//   // Шаг 2: Преобразуем сообщения
//   const processedMessages: ProcessedMessage[] = messages.map(({ id, text, ts, user, roomId }) => {
//     // Ищем комнату с помощью find
//     const room = rooms.find((room) => room.id === roomId);
//     return {
//       id,
//       text,
//       ts: new Date(ts), // Преобразуем в объект Date
//       user,
//       roomName: room ? room.name : "Unknown", // На случай, если комната не найдена
//     };
//   });
//
//   // Шаг 3: Группируем сообщения по дням
//   const groupedMessages: ProcessedData = {};
//
//   processedMessages.forEach((message) => {
//     // Получаем ISO-строку начала дня
//     const dayStart = new Date(message.ts);
//     dayStart.setHours(0, 0, 0, 0);
//     const dayISO = dayStart.toISOString();
//
//     // Добавляем сообщение в соответствующий день
//     if (!groupedMessages[dayISO]) {
//       groupedMessages[dayISO] = [];
//     }
//     groupedMessages[dayISO].push(message);
//   });
//
//   // Шаг 4: Возвращаем результат
//   return groupedMessages;
// };
//
// // Вызов функции
// fetchRoomsAndMessages()
//   .then((result) => console.log("Результат группировки сообщений:", result))
//   .catch((error) => console.error("Ошибка:", error));

// ТРЕТИЙ:
// const fetchRoomsAndMessages = async () => {
//   try {
//     // Шаг 1: Получаем данные параллельно
//     const [roomsResponse, messagesResponse] = await Promise.all([
//       fetch("/rooms"),
//       fetch("/messages"),
//     ]);
//
//     // Шаг 2: Преобразуем ответы в JSON
//     const rooms: IRoom[] = await roomsResponse.json();
//     const messages: IMessage[] = await messagesResponse.json();
//
//     // Шаг 3: Преобразуем сообщения
//     const processedMessages: ProcessedMessage[] = messages.map(({ id, text, ts, user, roomId }) => {
//       // Ищем комнату с помощью find
//       const room = rooms.find((room) => room.id === roomId);
//       return {
//         id,
//         text,
//         ts: new Date(ts), // Преобразуем в объект Date
//         user,
//         roomName: room ? room.name : "Unknown", // На случай, если комната не найдена
//       };
//     });
//
//     // Шаг 4: Группируем сообщения по дням
//     const groupedMessages: ProcessedData = {};
//
//     processedMessages.forEach((message) => {
//       // Получаем ISO-строку начала дня
//       const dayStart = new Date(message.ts);
//       dayStart.setHours(0, 0, 0, 0);
//       const dayISO = dayStart.toISOString();
//
//       // Добавляем сообщение в соответствующий день
//       if (!groupedMessages[dayISO]) {
//         groupedMessages[dayISO] = [];
//       }
//       groupedMessages[dayISO].push(message);
//     });
//
//     // Шаг 5: Возвращаем результат
//     return groupedMessages;
//   } catch (error) {
//     console.error("Ошибка при обработке данных:", error);
//     throw error; // Пробрасываем ошибку для возможной обработки выше
//   }
// };
//
// // Вызов функции
// (async () => {
//   try {
//     const result = await fetchRoomsAndMessages();
//     console.log("Результат группировки сообщений:", result);
//   } catch (error) {
//     console.error("Ошибка при вызове функции:", error);
//   }
// })();
 */

