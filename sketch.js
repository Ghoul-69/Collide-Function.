var line1,line2,line3,box,surface1,surface2,surface3,surface4,canvas;



function setup() {
 canvas=createCanvas(800,600)
    //create 4 different surfaces
 surface1=createSprite(710,570,190,20)
 surface2=createSprite(510,570,190,20)
 surface3=createSprite(310,570,190,20)
 surface4=createSprite(110,570,190,20)
 box=createSprite(200,200,25,25)
 line1=createSprite(5,100,10,1000)
 line2=createSprite(100,5,10000,10)
 line3=createSprite(795,100,10,1000)
    //create box sprite and give velocity
    box.velocityY=-4;
    box.velocityX=2;

}
function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
  
    box.bounceOff(line1);
    box.bounceOff(line2);
    box.bounceOff(line3);


   if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor="RED"
   }

   if(surface2.isTouching(box)&&box.bounceOff(surface2)){
    box.shapeColor="YELLOW"
   }
   if(surface3.isTouching(box)){
    box.velocityX=0;
    box.velocityY=0;
   }
   if(surface4.isTouching(box)&&box.bounceOff(surface4)){
    box.shapeColor="BLUE"
   }
    //add condition to check if box touching surface and make it box
  
    surface1.shapeColor="RED"
    surface2.shapeColor="YELLOW"
    surface3.shapeColor="GREEN"
    surface4.shapeColor="BLUE"
    line1.shapeColor="LIGHTGREY"
    line2.shapeColor="LIGHTGREY"
    line3.shapeColor="LIGHTGREY"
    drawSprites();

}
