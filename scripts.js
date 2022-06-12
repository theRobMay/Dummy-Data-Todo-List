let arrayOfTodos = [
    {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    let onlyTitles = arrayOfTodos.map(todo => {
    return todo.title
})
    document.write('<ol><li>'+onlyTitles.join('</li><li>')+'</li>')
}
const nameTodos = () => {
    let filteredNameOutput = arrayOfTodos.map(todo =>{
        return todo.userId
    });
    let userInput = document.getElementById('numInput').value
    const mainOutput = filteredNameOutput.map(output =>{
        return output.indexOf(userInput)
    });
    let newList = document.getElementById('todo-list')
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(mainOutput));
    newList.appendChild(li);
}
//let onlyTitles = arrayOfTodos.map(todo => {
//  return todo.title
//})
//console.log('onlyTitles:', onlyTitles)