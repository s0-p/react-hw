import './App.css';
import Card from './components/Card.jsx';

function App() {
  const products = [
    { id: 1, name: '무선 키보드', price: 39000, brand: 'EZTECH' },
    { id: 2, name: '무선 마우스', price: 29000, brand: 'EZTECH' },
    { id: 3, name: '모니터', price: 199000, brand: 'EZTECH' },
  ];
  const productCards = products.map((p) => <Card key={p.id} name={p.name} price={p.price} brand={p.brand} />);
  return <>{productCards}</>;
}

export default App;
