

const cellContainer = document.querySelector(".cell-container");




for( let i = 1 ; i <= 100; i++){
    const numberCell = document.createElement("div");
    numberCell.className = "number-cell";
    if( i % 3===0 && i % 5 ===0){
        numberCell.classList.add('number-cell-fizz-buzz')
        numberCell.innerHTML = "FizzBuzz"
       
    } else if( i % 3 ===0){
        numberCell.innerHTML = "Fizz"
        numberCell.classList.add('number-cell-fizz')
        console.log("Fizz")
    } else if( i % 5 ===0){
        numberCell.innerHTML = "Buzz"
        numberCell.classList.add('numbner-cell-buzz')
        console.log('Buzz')
    }else{
        numberCell.innerHTML = i

        console.log(i)
    }
    cellContainer.append(numberCell)
    
}
