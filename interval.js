// i++ vs ++i
console.log('one')
console.log('two')

let seconds = 0;
const intervalId = setInterval(()=>{
    console.log(++seconds);
    if(seconds === 10){
        clearInterval(intervalId)
    }
}, 1000)

console.log('four')
console.log('five')