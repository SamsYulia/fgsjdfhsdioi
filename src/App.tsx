import './App.css'
import MyButton from './MyButton'
import MyButtonClick from './MyButtonClick'

function App() {
  const handleClick = () => {
    alert('Кнопка нажата!');
  };
  return (
    <div className="App">
      <h1>Моё первое приложение на Vite!</h1>
      <MyButton></MyButton>
      <MyButtonClick onClick={handleClick}>Нажми меня!</MyButtonClick>
    </div>
  )
}
export default App