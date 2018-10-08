remoteMathService(
  function(err, answer) {
    if(err) console.log("error ", err);
    if(answer !== 3) {
      console.error("wrong answer", answer);
    } else {
      console.log("correct", answer);
    }
  }
);

async function remoteMathService(cb){
  var one = await serviceOne();
  var two = await serviceTwo();
  cb(undefined, one + two);
}

function serviceOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });
}

function serviceTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1500);
  });
}
