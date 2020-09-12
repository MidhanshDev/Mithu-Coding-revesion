function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  console.log(5);
  console.log("hello");
  var name = "Midhansh";
  console.log(name);
  console.log(name.length);
  console.log(name.toUpperCase());
  var num = 5;
  console.log(num);
  console.log(parseInt("123"));
  console.log(2+3);
  console.log(2-3);
  console.log(5*7);
  console.log(36/12);
  console.log(12%5);
  console.log("hi"+"how are you");
  console.log("hi"-"hello");
  console.log(5/0);
  var bool = true;
  console.log(2===3);
  var test
  console.log(test);
  if(3>2){
    console.log("Happy");
  }else{
    console.log("Not Happy");
  }
  var name = "My name";
  switch(name){
    case "My name":console.log("C1");
    break;
    case "my Name":console.log("C2");
    break;
    default:console.log("All c = false");
  }
  for(var i = 0;i<=5;i++){
    console.log(i);
  }

  var i = 0;
  while(i<=5){
    console.log(i);
    i = i+1;
  }
  var friends = ["f1","f2","f3"];
  console.log(friends);
  console.log(friends[0]);
  for( var index in friends){
    console.log(friends[index]);
  }

  console.log(friends.length);
  friends.push("f4");
  console.log(friends);
  friends.pop();
  console.log(friends);

  var a = cr(10);
  console.log(a);

  var paddle = new Object();
  paddle.length = 50;
  paddle.showLength = function(){
   console.log(paddle.length);
  }
  paddle.showLength();
  console.log(paddle);
}


function draw() {
  background(255,255,255);
  

  drawSprites();
}

function cr(r){
  var cr = 2*3*r;
  return cr;
}