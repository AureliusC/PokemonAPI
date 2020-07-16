const url= "https://pokeapi.co/api/v2/pokemon/"
const resultarea= document.getElementById("result")
async function  getpokiemon (pokiemonName) {
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokiemonName}/`);
const data = await response.json()
displayPokiemon(data);
console.log(data);
}
 function  displayPokiemon(data){
     let pokiemonImg = document.createElement("img");
     pokiemonImg.src=data.sprites.front_shiny;
     let Pname =document.createElement("h1");
     Pname.innerText =data.name;
     let ablity= document.createElement("h1");
     ablity.innerText=data.abilities[0].ability.name;
     let kickbut=document.createElement("h2");
     kickbut.innerText= data.moves[0].move.name;
     let game=document.createElement("img");
     game.src=data.sprites.back_default;
     resultarea.appendChild(pokiemonImg);
     resultarea.appendChild(Pname);
     resultarea.appendChild(ablity);
     resultarea.appendChild(kickbut);
     resultarea.appendChild(game);
 }
 document.getElementById("inputField").addEventListener("keyup", (event)=>{
     pokiemonName=event.target.value;
 });
document.getElementById("searchpokiemon").addEventListener("submit",(event) =>{
    event.preventDefault();
    getpokiemon(pokiemonName);
})

getpokiemon();