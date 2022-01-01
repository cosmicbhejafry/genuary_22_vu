// palette: https://coolors.co/eff6ee-9ef7f4-d9293d-d2338b-2a43c0-53b814-ebc91e-6f13a4-30b09b
// noprotect
var phrases = ["adventure is out there","i have just met you & i love you ","send you a post card from para dise falls ","wilderness must be explored ","can I come in sir? ","kevin is a girl?! ","else the tigers will come and eat you "];
var fil_t;
var colors = ["#D9293D","#D2338B","#2A43C0","#53B814","#EBC91E","#6F13A4","#30B09B"];
function setup() {
  // createCanvas(1000, 1500);
  createCanvas(windowWidth, windowHeight);
  p0 = [width/2,height/2];
  p1 = [width/2-width/6,height/2-height/6];
  p2 = [width/2+width/6,height/2-height/6];
  // along_bez_text(phrases[ix],p0,p1,p2,p0);
  frameRate(1);
  textSize(13);
  // background("#9EF7F4");
//   fil_t = false;
//     for(var ix = 0; ix < phrases.length; ix++){

//    var sx = (width/phrases.length-2)*(ix+0.2); var sy = height/2;
//    balloon_draw(phrases[ix],width/(4+frameCount%3),height/6,sx,sy,colors[ix],fil_t);  
//   }
}

function draw() {
   background("#9EF7F4");

for(j = 0; j<50; j++){
  for(var ix = 0; ix < phrases.length; ix++){

   var sx = random(width); var sy = random(height/1.5);
  var bw = width/(4+frameCount%3); 
    var bh = height/6;
    var add = frameCount%3;
    // add = 2;
  if(width/height>1.4){bw = width/(6.0+add); 
  // bh = height/(6 +2- add);
  }
    balloon_draw(phrases[ix],bw,bh,sx,sy,colors[ix],fil_t);  
  }
  
}
  if(frameCount<10){
    saveCanvas("_a_"+frameCount+".png"); }
}

// function sampleFromShape(p0,p1,p2,p3){
//   // rejection sampling??
// }

function balloon_draw(txt,wid,ht,bx,by,col,ft){
  strokeWeight(0.6);
  stroke("#EFF6EE");
  var cs = 8;
  var rx = random(2*width/cs)-width/8;
  line(bx,by,width/2+rx,height);
  push();
  translate(bx,by);
  var c = color(col);
  c.setAlpha(255);
  fill(c);
  rotate(random(PI/3)-PI/6);
  along_bez_text(txt,[0,0],[-wid/2,-ht],[wid/2,-ht],[0,0]);
  noStroke();
  if(ft){
    c.setAlpha(50);
    fill(c);
    bezier(0,0,-wid/2,-ht,wid/2,-ht,0,0);  
  }
  pop();
}

function along_bez_text(x1,p0,p1,p2,p3){  
  for(var i = 0; i<x1.length; i+=1){
    var x = along_bez_one(i/(x1.length-1),p0[0],p1[0],p2[0],p3[0]);

var y = along_bez_one(i/(x1.length-1),p0[1],p1[1],p2[1],p3[1]);
    // circle(x,y,10);
    text(x1[i],x,y);
  }  
}

function along_bez_one(t,p0,p1,p2,p3){
  var v = pow((1-t),3)*p0;
  v+=3*t*pow(1-t,2)*p1;
  v+=3*(1-t)*pow(t,2)*p2;
  v+=pow(t,3)*p3;
  return v;
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    fil_t = true;
  }if(keyCode === DOWN_ARROW){
    fil_t = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
