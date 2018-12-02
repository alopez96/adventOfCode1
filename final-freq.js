const fs = require('fs');
//solution to 1
function finalfreq() {
  //log the time it takes to run the code until console.timeEnd
  console.time('executiontime');
  fs.readFile('./input.txt', (err, data) => {
  if(err) {
    console.log('error', err);
  }
  //get all strings
  const strings = data.toString();

  //break up the strings
  const stringsArray = strings.split('\n');

  //testing
  console.log('array', stringsArray);
  console.log('total steps', stringsArray.length);

  var intArray = []
  var total = 0;
  var integer = 0;
  var integer2 = 0;

  //loop through frequencies
  for(i = 0; i < stringsArray.length; i++){
    intArray.push(stringsArray[i])
  }

  for(i = 0; i < stringsArray.length; i++){ 
    integer = Number(stringsArray[i]);
    total += integer
  }

  var j = 1;
  var i = 0;
  var total2 = 0;
  var firstfreq = stringsArray[0];
  var newArray = [0];
  do{
    integer2 = Number(stringsArray[i]);
    total2 += integer2
    newArray[j] = total2
    i++
    if(i = (stringsArray.length-1)){
      i = 0
    }
    j++
    console.log('testing', newArray)
  }while(!newArray.includes(total2))


  console.timeEnd('executiontime');
  console.log('total', total);
  console.log('firstfreq', firstfreq);
  
})

}

finalfreq();
