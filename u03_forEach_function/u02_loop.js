const _ = {};

_.each = function(list,callback){
    if(Array.isArray(list)){
      // loop through array
      for(var i =0;i<list.length; i++){
          callback(list[i],i,list);
      }
    }else{
        // loop through object
        for(var key in list){
            callback(list[key],key,list);
        }
    }
    // call the callback with a list item
}

_.each(['sally','georgie', 'porgie'], function(name,i,list){
if(list[i+1]){
    console.log(name,'is younger than', list[i+1])
}else{
    console.log(name,'is the oldest')
   }
})