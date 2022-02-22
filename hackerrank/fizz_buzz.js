/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    const addTextToMultiple = ({
        num, multiplier, text
    }) => num % multiplier === 0 ? text : "";
    
    const data = {
        fizz: {
            multiplier: 3,
            text: "Fizz"
        },
        buzz: {
            multiplier: 5,
            text: "Buzz"
        },
        fizzBuzz:null,
    };
    
    const arrNum = Array.from(Array(n), (_, i) => i + 1);
    arrNum.map((num) => {
        const fizz = addTextToMultiple({
            num, 
            ...data.fizz,
        });
        
        const buzz = addTextToMultiple({
            num,
            ...data.buzz,
        });
        
        data.fizzBuzz = fizz + buzz;
        
        console.log(data.fizzBuzz || num);
            
    });
}