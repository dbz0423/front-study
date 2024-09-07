// function eat(food = '苹果') {
//     console.log();
    
// }

// const eat = (food='苹果') => food;

// console.log(eat());

// const myLog = (tag, ...args) => {
//     console.log(`${tag}:`,args);
// }

// myLog('水果','火龙果')
// myLog('零食','坚果','芒果干','辣条')

function multiply(a, b = 1) {
    return a*b
}

console.log(multiply(5,2));
console.log(multiply(5));

