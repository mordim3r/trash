function getCard() 
{
    
    let arrI = []
    let arrN = []
    let arrG = []
    let arrO = []
    let arrBingo = []





    let arrB = []
    uniqueElem: for (let index = 0; index < 5; index++) 
    {
        let b = Math.floor(Math.random() * 15) + 1
        console.log('b = ',b)
        if (arrB.includes(b)===true)
        {   
            console.log(arrB,'совпадение')
            continue uniqueElem
        }
        else
        {
        arrB.push(b)       
        }
    }
    for (let index = 0; index< 5; index ++)
            {
                arrB[index] = 'B' + arrB[index]
            }
    console.log(arrB)
}




getCard()