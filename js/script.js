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
        })
        
    }

} 

let grid= document.getElementById('grid')
let divItem;
const playBtn = document.getElementById('btn')

playBtn.addEventListener('click', function(){
    generateGrid()

})

















