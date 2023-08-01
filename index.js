// code your solution here
function superbowlWin(record){  
   const results = record.find(record => record.result === 'W')
   if(!results){
    return undefined
   } else {
    return results.year
   }
} 
