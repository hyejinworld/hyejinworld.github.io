import './App.css';
import './index.css'
import { useRef } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
// import { useCallback } from 'react';

const mockData = [
  { id: 0, isDone: false, content: "React study", date: new Date().getTime() },
  { id: 1, isDone: false, content: "친구 만나기", date: new Date().getTime() },
  { id: 2, isDone: false, content: "낮잠 자기", date: new Date().getTime() },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef =useRef(3);

  const onCreate = (content) => {
    const newTodo ={
      id: idRef.current++, isDone: false, content:content, date: new Date().getTime(),}
    
      setTodos([newTodo, ...todos]);
  }

  // const onCreate = useCallback ((content)=>{
  //   console.log("onCreate content=" + content)
  //   dispatch({
  //     type:"CREATE",
  //     data:{
  //       id: idRef.current++,
  //       isDone:false,
  //       content:content,
  //       date : new Date().getTime(),
  //     }
  //   })
  // }, []);

  const onUpdate = (targetId) =>{
    setTodos(
      todos.map((todo)=>
      todo.id ===targetId ? {...todo, isDone: ! todo.isDone} : todo)
    )
  }

  const onDelete =(targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete = {onDelete} />
    </div>
  );
}

export default App;