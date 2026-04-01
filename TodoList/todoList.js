let mockData = [
    {id: 0, isDone: false, content: "React study", date: new Date().getTime()},
    {id: 1, isDone: true, content: "친구만나기", date: new Date().getTime()},
    {id: 2, isDone: false, content: "낮잠자기", date: new Date().getTime()},
];

 
const days = ["일", "월", "화", "수", "목", "금", "토"];


onload = function() {
    initData(mockData)
    const now = new Date();
    const dataStr =now.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

const dayName = days[now.getDay()];
document.querySelector('.App > h1').textContent = `${dataStr} (${dayName}요일)`;
};           
//const dayStr = days[now.getDay()];document.querySelector('.App >h1').textContent = `${dateStr} (${dayStr})`;

const initData = (printData) => {

    const wrapper = document.querySelector('.todos_wrapper');
    if (!wrapper) return; 

    wrapper.innerHTML = "";

    printData.forEach((todo) => {

        const dateString = new Date(todo.date).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
   
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('TodoItem');
        
      
    //리스트항목
     todoDiv.innerHTML = `
            <input type="checkbox" ${todo.isDone ? "checked" : ""} onchange="onUpdate(${todo.id})" />
            <div class="content">${todo.content}</div>
            <div class="date">${dateString}</div>
            <button name="delBtn" onclick="todoDel(${todo.id})">삭제</button>
        `;
        
        wrapper.appendChild(todoDiv);
    });
};
//checkbox 변경 이벤트
//체크박스 적용
const onUpdate = (id) => {
    const todo = mockData.find(item => item.id === id); 
}
//버튼이벤트

//name="delBtn" onclick="todoDel(this.id)" >삭제</button>

let idIndex = 3; //id의 값을 증가시킬 변수 
document.querySelector('.Editor > button').onclick = function(event) {
event.preventDefault();
 
//id는 idlnex, isDone은 false, content는 input의 value, date는 new Date().getTime()으로 설정하여 객체 생성
const newTodo = {
    id: idIndex++,
    isDone: false,
    content: document.querySelector('.Editor > input').value,
    date: new Date().getTime()
};
mockData.push(newTodo);
initData(mockData);
}

const todoDel =(th) =>{
    filteredData = mockData.filter(item => item.id !== th);
    mockData = filteredData;
    initData(mockData);
}
//검색
document.querySelector("#keyword").onkeyup =(e)=>{
    const searchKeyword = e.target.value;
    const searchedTodos = getFilteredData(searchKeyword);
    initData(searchedTodos);
}

const getFilteredData = (searchKeyword) => {
    if(searchKeyword===""){
    return mockData;
    }

    const filterResult = mockData.filter((todo) =>{
        return todo.content.includes(searchKeyword);
    })

    return filterResult;
}