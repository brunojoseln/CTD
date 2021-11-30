
let = fizzBuzz = (num1, num2,p1 = 'Fizz',p2 = 'Buzz',p3 = 'FizzBuzz') =>{
    for(let i = 0; i <= 100; i++){
        if (i%num1 == 0 && i%num2 == 0) {
            console.log(p3)
        }else if (i%num1 == 0){
            console.log(p1)
        }else if (i%num2 == 0){
            console.log(p2)
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(4,25,'Honk','Quack','Divisivel pelos 2')

