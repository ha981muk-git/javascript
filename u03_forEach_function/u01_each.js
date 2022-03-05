const game_01  = {};
game_01['suspects'] = [];




game_01.suspects.push({name  :"Mis Scarlet",
                       color :"red"})
game_01.suspects.push({name  :"Rusty",
                       color :"orange"})

function CreateSuspectObjects(name){
    return {
             name : name,
             color: name.split(' ')[2],
             speak(){log("my name is ${name}");}
            
    } ;
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
console.log(CreateSuspectObjects(game_01.suspects[0].name));
var suspectsList = [];

_.each(suspects,function(name){ // Looping 
    let suspectsObj = CreateSuspectObjects(name);
    suspectsList.push(suspectsObj);
})


// Same as above 
for(var i=0;i <suspects.length;i++){
    suspectsList.push(CreateSuspectObjects(suspects[i]));
}

//_.each = function(list,callback){ // _.each takes two value one list and one callback function
//  //....TODO  
//}


