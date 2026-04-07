import TodoItem from './TodoItem';
import { useState } from 'react';
import './List.css';

const List = ({todos, onUpdate, onDelete}) => {
  const [search, setSearch] = useState("");

  const getFilteredData =() =>{
    if(search === "") {
        return todos;}
         return todos.filter((todo)=>
        todo.content.toLowerCase().includes(search.toLowerCase())
        );
  }

  const filteredTodos = getFilteredData();
  


  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input value ={search}
        onChange={(e) => setSearch(e.target.value)} 
        placeholder='검색어를 입력해주세요.' 
      />

      <div className="todos_wrapper">
            {filteredTodos.map((todo)=>{
                return <TodoItem key={todo.id}
                {...todo}
                onUpdate = {onUpdate}
                onDelete = {onDelete}
                />

            })

        }
      
      </div>
    </div>
  );
};

export default List;