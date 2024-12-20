//Написать функцию request для любых fetch запросов на сервер.
// Написать неконтролируемую форму. Валидировать ее ответом из request.
//Написать форму добавления, удаления пользователей.
// Данные формы отправляются на сервер при нажатии на кнопку "Сохранить" (массив пользователей), добавлять пользователя через кнопку/ удалить через крестик (массив пользователей)
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// options = {}: это как переменные поэтому через "=", а в коде мы используем в теле функции, поэтому ":"
const request = async (url, options = {}) => {
  // это как переменные поэтому через "=", а в коде мы используем в теле функции, поэтому ":"
  const {method = 'GET', headers = {}, body} = options;

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json', // Заголовок по умолчанию
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    // Проверка успешности ответа
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Возвращаем JSON-ответ
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при запросе:', error);
    throw error; // Пробрасываем ошибку дальше, если нужно
  }
};

// Как использовать функцию request?
// 1 GET-запрос:
const fetchData = async () => {
  try {
    const data = await request('https://jsonplaceholder.typicode.com/posts');
    console.log('Полученные данные:', data);
  } catch (error) {
    console.error('Ошибка GET-запроса:', error);
  }
};

fetchData();

// 2 POST-запрос:
const sendData = async () => {
  try {
    const payload = {title: 'foo', body: 'bar', userId: 1};

    const data = await request('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: payload,
    });
    console.log('Ответ сервера:', data);
  } catch (error) {
    console.error('Ошибка POST-запроса:', error);
  }
};

sendData();

// 3 PUT-запрос
const updateDataWithPUT = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1'; // URL ресурса

  const updatedData = {
    id: 1, // id ресурса обязателен для PUT
    title: 'Updated Title',
    body: 'Updated body',
    userId: 1,
  };

  try {
    const response = await request(url, {
      method: 'PUT',
      body: updatedData,
    });
    console.log('Ответ от PUT-запроса:', response);
  } catch (error) {
    console.error('Ошибка PUT-запроса:', error);
  }
};

updateDataWithPUT();

// 4 PATCH-запрос
const updateDataWithPATCH = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1'; // URL ресурса

  const partialData = {
    title: 'Partially Updated Title',
  };

  try {
    const response = await request(url, {
      method: 'PATCH',
      body: partialData,
    });
    console.log('Ответ от PATCH-запроса:', response);
  } catch (error) {
    console.error('Ошибка PATCH-запроса:', error);
  }
};

updateDataWithPATCH();

// Решение с рефом - неуправляемый инпут
const handleSubmit = async (e) => {
  e.preventDefault(); // Чтобы страница не перезагружалась

  const value = inputRef.current.value.trim(); // Получаем значение из рефа и обрезаем пробелы

  if (!value) {
    setErrorMessage('Поле не может быть пустым!');
    return;
  }

  setErrorMessage('');
  setMessage('');

  try {
    setIsLoading(true); // Включаем индикатор загрузки

    const response = await request('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: {inputValue: value},
    });

    if (response.id) {
      setMessage('Данные успешно отправлены!');
      inputRef.current.value = ''; // Очищаем поле ввода
    } else {
      setErrorMessage('Не удалось отправить данные.');
    }
  } catch (error) {
    setErrorMessage(`Ошибка: ${error.message}`);
  } finally {
    setIsLoading(false); // Отключаем индикатор загрузки
  }
};

// Решение без рефа - неуправляемый инпут
import {useState} from 'react';
import {createRoot} from 'react-dom/client';

const request = async (url, options = {}) => {
  const {method = 'GET', headers = {}, body} = options;

  try {
    const res = await fetch(url, {
      method,
      headers: {'Content-Type': 'application/json', ...headers},
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const App = () => {
  const [users, setUsers] = useState([{id: Date.now(), name: ''}]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const addUser = () => {
    setUsers([...users, {id: Date.now(), name: ''}]);
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, name) => {
    setUsers(users.map((user) => (user.id === id ? {...user, name} : user)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formattedData = Object.fromEntries(formData.entries());

    console.log('Отправка данных:', formattedData);

    try {
      setIsLoading(true);
      setErrorMessage('');
      setMessage('');

      const response = await request('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: {users: validUsers},
      });

      if (response.id) {
        setMessage('Пользователи успешно отправлены на сервер!');
        setUsers([{id: Date.now(), name: ''}]);
      } else {
        setErrorMessage('Не удалось отправить данные.');
      }
    } catch (error) {
      setErrorMessage(`Ошибка: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{padding: '20px'}}>
      <h1>Управление пользователями</h1>
      <form onSubmit={handleSubmit}>
        <ul style={{listStyle: 'none', padding: 0}}>
          {users.map((user, index) => (
            <li key={user.id} style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
              <input
                type="text"
                value={user.name}
                name={`users[${user.id}][name]`} // Уникальный name для каждого пользователя
                onChange={(e) => updateUser(user.id, e.target.value)}
                placeholder={`Имя пользователя ${index + 1}`}
                style={{marginRight: '10px', flex: '1'}}
              />
              <button
                type="button"
                onClick={() => removeUser(user.id)}
                style={{color: 'red', background: 'none', border: 'none', cursor: 'pointer'}}
                aria-label={`Удалить пользователя ${index + 1}`}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
        <div style={{marginTop: '20px'}}>
          <button type="button" onClick={addUser} style={{marginRight: '10px'}}>
            Добавить пользователя
          </button>
          <button type="submit">{isLoading ? 'Сохранение...' : 'Сохранить'}</button>
        </div>
      </form>
      {message && <p style={{color: 'green', marginTop: '10px'}}>{message}</p>}
      {errorMessage && <p style={{color: 'red', marginTop: '10px'}}>{errorMessage}</p>}
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App/>);






