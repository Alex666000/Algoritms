// Когда изменится счетчик что перерендерится и почему? И как убрать лишние рендеры?
const List = () => {
  return (
    <ul>
      {list.map((item => (
        <li key={item}>{item}</li>
      ))}
      {list2.map((item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    // Пустой эффект
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <List />
    </>
  );
}

export default App;
// Ответ: обернуть реакт-мемо List или кнопку с состоянием счетчика вынести в отдельную компоненту Button чтобы там стеит менялся
