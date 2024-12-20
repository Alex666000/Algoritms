/*
-что_отправляем_в_запросе_на_сервер? При отправке данных в тело (body) POST-запроса, чаще всего используются следующие типы данных:
 */

// Как выбрать?
// JSON — для большинства современных API.
// application/x-www-form-urlencoded — для взаимодействия с сервером через формы.
// multipart/form-data — для загрузки файлов.
// text/plain — для отправки простого текста.

// 1. JSON (application/json) - Наиболее распространенный формат для обмена данными между клиентом и сервером.
// Данные отправляются в виде строки JSON.
const data = {
  name: 'Alex',
  age: 37
}

const request = async () => {
  try {
    const res = await fetch('/products', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    if(res.ok) {
      const data = await res.json()
      return data
    }
  } catch (err) {
    console.log(err)
  }
}
// 2. Формат формы (application/x-www-form-urlencoded)
// Используется для отправки данных, как если бы они были отправлены из HTML-формы.
// Данные кодируются в формате key=value&key2=value2.
const formData = new URLSearchParams();
formData.append('username', 'oldi');
formData.append('password', '12345');

fetch('https://example.com/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: formData.toString()
});

// 3. Мультиформатные данные (multipart/form-data)
// Используется для отправки файлов, изображений или больших данных.
// Данные отправляются в виде частей (part), каждая из которых содержит отдельное поле.
// Заголовок:
// Заголовок Content-Type не устанавливается вручную, так как FormData автоматически добавляет его с необходимыми параметрами.
const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('description', 'Загрузить файл');

fetch('https://example.com/upload', {
  method: 'POST',
  body: formData
});

// 4. Текст (text/plain)
fetch('https://example.com/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain'
  },
  body: 'Просто текстовый запрос'
});

// 5. XML (application/xml)
const xmlData = `
<user>
  <name>Александр</name>
  <age>30</age>
</user>`;

fetch('https://example.com/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/xml'
  },
  body: xmlData
});


