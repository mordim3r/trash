

function getCard() {


    
    let arrB = []
    let arrI = []
    let arrN = []
    let arrG = []
    let arrO = []
    let arrBingo = []
    B = Math.floor(Math.random() * 15) + 1;       //случайное число от 1 до 15
    //console.log('1-15',B)
    I = Math.floor(Math.random() * (30 - 16 + 1)) + 16       //случайное число от 16 до 30
    //console.log('16-30',I)
    N = Math.floor(Math.random() * (45 - 31 + 1)) + 31       //случайное число от 16 до 30
    //console.log('31-45',N)
    G = Math.floor(Math.random() * (60 - 46 + 1)) + 46       //случайное число от 16 до 30
    //console.log('45-60',G)
    O = Math.floor(Math.random() * (75 - 61 + 1)) + 61       //случайное число от 16 до 30
    //console.log('61-75',O)
    
    uniqueElem1: for (let index = 0; index < 5; index++) {
        let b = Math.floor(Math.random() * 15) + 1
        arrB.push(b)  
        console.log(arrB[index])  
        if (arrB.includes(arrB[index])==false){   
            for (let index = 0; index< 5; index ++){
                arrB[index] = 'B' + arrB[index]
    }
    else{
        arrB = []
        continue uniqueElem1

    }
        }}
    }
    console.log(arrB)
}
/*
    uniqueElem2: for (let index = 0; index < 5; index++) {
        
        let i = (Math.floor(Math.random() * (30 - 16 + 1)) + 16)
        arrI.push(I)
        if (arrI.includes(arrI[index])===true){
            console.log('есть')
            continue uniqueElem2
        }
        else {
       
        arrI[index] = 'I' + arrI[index]
        }
    }
    console.log(arrI)


    uniqueElem3: for (let index = 0; index < 4; index++) {
        let n = Math.floor(Math.random() * (45 - 31 + 1)) + 31
         arrN.push(n)
        if (arrB.includes(arrN[index])===true){
            console.log('есть')
            continue uniqueElem3
        }
        else{
                   
       
        arrN[index] = 'N' + arrN[index]
    }}
    console.log(arrN)


    uniqueElem4: for (let index = 0; index < 5; index++) {
        let g = Math.floor(Math.random() * (60 - 46 + 1)) + 46
        arrG.push(g)
        if (arrG.includes(arrG[index])===true){
            console.log('есть')
            continue uniqueElem4
        }
        else {
        
        arrG[index] = 'G' + arrG[index]
    }}
    console.log(arrG)


    uniqueElem5: for (let index = 0; index < 5; index++) {
        let o = Math.floor(Math.random() * (75 - 61 + 1)) + 61
         arrO.push(o)
        if (arrO.includes(arrO[index])===true){
            console.log('есть')
            continue uniqueElem5
        }
        else{

        
       
        arrO[index] = 'O' + arrO[index]
    }}
    console.log(arrO)




///объединение массивов
arrBingo = arrB.concat(arrI, arrN, arrG, arrO)
console.log(arrBingo)
return arrBingo

*/




/*
let arr = []
for(let i=0; i<5; i++){
    let a = i
    
    console.log(a)
    arr.push(i)
if (arr.includes(a)===true){
    console.log('есть')
}
else {
    console.log('нет')
}

console.log(arr)
}

*/
}
getCard()