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
//let onlyTitles = arrayOfTodos.map(todo => {
//  return todo.title
//})
//console.log('onlyTitles:', onlyTitles)