const game_01  = {};
game_01['suspects'] = [];




game_01.suspects.push({name  :"Mis Scarlet",
                       color :"red"})
game_01.suspects.push({name  :"Rusty",
                       color :"orange"})

const game_02 = {'suspects'  :[
                      {
                        name:"Rusty",
                        color:"red"
                      },
                      { name :"Miss Scarlet",
                        color:"red"
                      }
]};

game_01["suspects"]; // game_01[suspects] does not work
game_02["suspects"]; //  ""  is needed to get the output 

console.log(game_01["suspects"]);
console.log(game_02["suspects"]);

function foo(){
    for(let i=0;i<game_01.suspects.length;i++){    // add suspects to get its length
        console.log(game_01.suspects[i])           // game_01[i] doesn't work
        console.log(game_02.suspects[i]);
        console.log(game_02["suspects"][i]);                    // this works too.
        console.log(game_01["suspects"][i]);                    // this works too.
        

    }
}

foo()

var gameLoop = function(games_01) {
    for(var i=0; i <game_01.suspects.length;i++){
        console.log('outer loop');
        for( var key in game_01.suspects[i]){
        console.log('inner loop');
            if(game_01.suspects[i][key]==="Rusty"){
                   console.log('Found \'em !');
            }else { 
                console.log('next time!');
          }
        }
    }
}

gameLoop(game_01)
/*

const firstColor  = game.suspects[0].color;
const secondColor = game.suspects[0].color;

var [color_01,color_02] = [suspects[0].color, suspects[1].color];
var [{color:firstColor},{color:secondColor}] = suspects;
*/


function CreateSuspectObjects(name){
    return {
             name : name,
             color: name.split(' ')[2],
             speak(){
                 console.log("my name is ", name);  //speak: function(){  console.log("my name is ", name);} , both work
             }
    } ;
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
console.log(CreateSuspectObjects(game_01.suspects[0].name));
var suspectsList = [];

for(var i=0;i <suspects.length;i++){
    suspectsList.push(CreateSuspectObjects(suspects[i]));
}