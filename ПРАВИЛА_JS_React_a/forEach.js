// просто позволяет проитерироваться по массиву ничего не возвращает из него используют для перебора элементов, удобнее чем обычный цикл for.
// Перебираем массив return делать нельзя, можно присваивать внутри переменную например const date = message.ts.Date(),
// проверять условия if и пушить в результирующии массив созданный вне «форича» - см.строку 15
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
