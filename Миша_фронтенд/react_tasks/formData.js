// Написать неконтролируемую форму. Валидировать ее ответом из request.
//Написать форму добавления, удаления пользователей. Данные формы отправляются на сервер при нажатии на кнопку "Сохранить" (массив пользователей), добавлять пользователя через кнопку +, удалить через крестик (массив пользователей)

import React, {useState} from 'react';

const Component = () => {
  const [users, setUsers] = useState([{id: 1, name: 'Катя'}]);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formattedData = Object.fromEntries(formData.entries());

    console.log('Отправка данных:', formattedData);

    // Здесь можно отправить данные на сервер
    // fetch('/api/submit', { method: 'POST', body: JSON.stringify(formattedData) })
  };

  const addNewUser = () => {
    const newUser = {id: Date.now(), name: 'Alex'};
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const updateUserName = (name, id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        id === user.id ? {...user, name} : user
      )
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <ul>
        {users.length
          ? users.map((user) => (
            <li key={user.id}>
              <input
                value={user.name}
                onChange={(e) =>
                  updateUserName(e.target.value, user.id)
                }
                name={`users[${user.id}][name]`} // Уникальный name для каждого пользователя
              />
              <button type="button" onClick={addNewUser}>
                +
              </button>
              <button
                type="button"
                onClick={() => deleteUser(user.id)}
              >
                х
              </button>
            </li>
          ))
          : null}
      </ul>
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default Component;


