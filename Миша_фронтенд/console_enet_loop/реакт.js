export default function App() {
  return (
    <Parent />
  );
}

function Parent({ children }) {
  console.log(1);

  useEffect(() => {
    console.log(2);
  }, []);

  return <div>{children}</div>;
}

function Child() {
  console.log(3);

  useEffect(() => {
    console.log(4);
  }, []);

  return <h1>Hi</h1>;
}

// 1 3 4 2 - сначала синхронный код у себя потом дети и рендер себя - родитель завершит свои рендер после полного рендера всех своих дочереи
