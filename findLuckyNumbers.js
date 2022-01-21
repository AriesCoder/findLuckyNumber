// Write your code below this line.

function luckyNumbers(num){
    let arr = []
    while(num){
        let ranNum = Math.round(Math.random()*10)
        let isNotRepNum = true

        for(let j = 0; j < arr.length && isNotRepNum; j++){
            if(ranNum === arr[j] || ranNum === 0){
                isNotRepNum = false
            }
        }

        if(isNotRepNum){
            arr.push(ranNum)
            num--
        }

        if(arr.length === 10) {
            break
        }       
    }
    console.log(arr)    
}
    
luckyNumbers(12)

