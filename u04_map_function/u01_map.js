const _ = {};

const weapons = ['candlestick','lead pipe','revolver'];
const makeBroken = function(item){
    return `broken ${item}`
};


typeof _.map(weapons,makeBroken);