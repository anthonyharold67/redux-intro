import './App.css';
import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';
// import { createStore } from 'redux';//bunun olmasının sebebi toolkite yönlendirmek için
import { Provider } from 'react-redux';
import { getStore } from './redux';//redux/index.js te oluşturduğumuz getStore içinde createStore kullandık
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import reducer from './redux';



function App() {
  // const store = createStore(reducer);//createstoru redux/index.js te kullandık
  const store = getStore()
  return (
    <div className="app bg-dark text-light">
      <Provider store={store}>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

