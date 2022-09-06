function doSomething(){
    console.log('third')
}

console.log('frist');
console.log('second');

// const timeOutId = setTimeout(()=>{console.log('third')}, 5000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response =>{
    console.log('response');
    return response.json()
})
  .then(json => console.log(json))

console.log('fouth');
console.log('fifth');