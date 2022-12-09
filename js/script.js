function generateGrid (num){
    let divItem;
    document.querySelector('.grid').innerHTML=" ";

    for(let i = 1; i<=num; i++){
        divItem = document.createElement('div')
        
        grid.appendChild(divItem)

        if(num == 100 ){
            divItem.classList.add('square')
        }
        else if(num == 81){
            divItem.classList.add('square-81')
        }
        else{
            divItem.classList.add('square-49')
        }

        divItem.innerText=i

        divItem.addEventListener('click',function(){
            clicks += 1
            console.log(clicks)
            let numWin = num - check.len

            if(check.includes(parseInt(this.innerText))){
               this.classList.add('red')
               let risultato= document.getElementById('risultato')
               risultato.innerText=`Hai perso il tuo punteggio è ${clicks}`
               grid.classList.add('events-none')   
                

            }else{
               this.classList.add('azure')
               console.log(this.innerText)
               
            } 
            
        })
        
    }

} 

function generateBombsNumb (min,max){

    let bombs=[];
    let i = 0

    while(i < 16){
        let number = Math.floor(Math.random() * (max - min + 1)) + min

        if(!bombs.includes(number)){
            bombs.push(number);
            i++
        }
    }

    return bombs

}

let clicks = 0
let check;
let grid= document.getElementById('grid')
const playBtn = document.getElementById('btn')

playBtn.addEventListener('click', function(){

    let valueSelect = document.getElementById('difficolta').value

    if(valueSelect == 1){
        num = 100
        min = 1
        max = 100
    }
    else if(valueSelect == 2){
        num = 81
        min = 1
        max = 81
    }
    else{
        num = 49
        min = 1
        max = 49
    }

    check = generateBombsNumb(min,max)
    generateGrid(num)
    console.log(check)

})
















