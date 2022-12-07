function generateGrid (){

    document.querySelector('.grid').innerHTML=" ";

    for(let i = 1; i<=100; i++){
        divItem = document.createElement('div')
        
        grid.appendChild(divItem)
    
        divItem.classList.add('square')

        divItem.innerText=i

        divItem.addEventListener('click',function(){
            this.classList.add('azure')
            console.log(this.innerText)
            onClick()

            if(check.includes(parseInt(this.innerText))){
               this.classList.add('red')
               let risultato= document.getElementById('risultato')
               risultato.innerText=`Hai perso, il tuo punteggio è: ${clicks}`
               grid.classList.add('events-none')
            
            }
            
        })
        
    }

} 

function generateBombsNumb (min,max){

    let bombs=[];
    let i = 0

    while(i <16){
        let number = Math.floor(Math.random() * (max - min + 1)) + min

        if(!bombs.includes(number)){
            bombs.push(number);
            i++
        }
    }

    return bombs

}

let clicks = 0;

function onClick() {
  clicks += 1;
};


let check = generateBombsNumb(1,16)
console.log(check)
let grid= document.getElementById('grid')
let divItem;
const playBtn = document.getElementById('btn')

playBtn.addEventListener('click', function(){
    generateGrid()
    generateBombsNumb(1,16)
    

})

















