const fs = require('fs');
//solution to 1
function finalfreq() {
  //log the time it takes to run the code until console.timeEnd
  console.time('executiontime');
  fs.readFile('./input.txt', (err, data) => {
  if(err) {
    console.log('error', err);
  }
  
  console.timeEnd('executiontime');
})

}

finalfreq();
