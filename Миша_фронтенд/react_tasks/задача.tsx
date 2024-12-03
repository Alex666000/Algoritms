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
  roomId: IRoom["id"];
  id: number;
  user: string;
  ts: Date;
}

// Запросить GET '/rooms' возвращает IRoom[]
// Запросить GET '/messages' возвращает IMessage[]

// Необходимо запросить сообщения и комнаты и сгруппировать сообщения по дням

type ProcessedMessage = Omit<IMessage, "roomId"> & {
  roomName: IRoom["name"];
};

type ProcessedData = Record<string, ProcessedMessage[]>;

// при этом строковый ключ - ISO представление даты начала дня ('2022-06-21T00:00:00')

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
// РЕШЕНИЕ:

