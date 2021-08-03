const Engine= Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies       
                                    
var engine1
var world
var wheel,blackArea
var wheelOptions
var angle=60
var score= 0


function createArrow(){
  arrow=createSprite(archer.x,archer.y,10,10)

 
arrow.scale=0.4
if(archer.x>800){
  arrow.addImage(arrowleft)
  arrow.velocityX=-5
  arrow.setCollider("rectangle",0,0,120,2)
}
if(archer.x<200){
  arrow.addImage(arrowright)
  arrow.velocityX=5
  arrow.setCollider("rectangle",0,0,120,2)
}

if(archer.y<175){
  arrow.addImage(arrowdown)
  arrow.velocityY=5
  arrow.setCollider("rectangle",0,0,2,120)
}

if(archer.y>475){
  arrow.addImage(arrowup)
arrow.velocityY=-5
arrow.setCollider("rectangle",0,0,2,120)
}

arrowGroup.add(arrow)



}


function setup() {
  createCanvas(1000,650);
engine1=Engine.create()
world=engine1.world
blackArea=createSprite(500,325,600,300)
blackArea.visible=false
archer=createSprite(900,325,20,20)
archer.addImage(archerImg)
archer.scale=(0.3)
box1=createSprite(500,320,12,32)
box1.shapeColor="blue"
box2=createSprite(400,346,30,20)
box2.shapeColor="blue"
box3=createSprite(550,404,30,60)
box3.shapeColor="blue"
box4=createSprite(600,300,20,50)
box4.shapeColor="blue"
box5=createSprite(285,285.123,40,20)
box5.shapeColor="blue"
arrowGroup=createGroup()


}

function draw() {
  background(forest);
  Engine.update(engine1)
  textSize(25)
  fill("white")
  text("score="+score,850,60)
  if(arrowGroup.isTouching(box1)&&box1.shapeColor=="blue"){
arrowGroup.destroyEach()
box1.shapeColor="red"
score=score+10
  }
 if(arrowGroup.isTouching(box1)&&box1.shapeColor=="red"){
    arrowGroup.destroyEach()
score=score-5    
    }
     
    if(arrowGroup.isTouching(box2)&&box2.shapeColor=="blue"){
      arrowGroup.destroyEach()
      box2.shapeColor="red"
      score=score+10
        }
       if(arrowGroup.isTouching(box2)&&box2.shapeColor=="red"){
          arrowGroup.destroyEach()
      score=score-5    
          }
           


        
          if(arrowGroup.isTouching(box3)&&box3.shapeColor=="blue"){
            arrowGroup.destroyEach()
            box3.shapeColor="red"
            score=score+10
              }
             if(arrowGroup.isTouching(box3)&&box3.shapeColor=="red"){
                arrowGroup.destroyEach()
            score=score-5    
                }
                 
              

                if(arrowGroup.isTouching(box4)&&box4.shapeColor=="blue"){
                  arrowGroup.destroyEach()
                  box4.shapeColor="red"
                  score=score+10
                    }
                   if(arrowGroup.isTouching(box4)&&box4.shapeColor=="red"){
                      arrowGroup.destroyEach()
                  score=score-5    
                      }




                      if(arrowGroup.isTouching(box5)&&box5.shapeColor=="blue"){
                        arrowGroup.destroyEach()
                        box5.shapeColor="red"
                        score=score+10
                          }
                         if(arrowGroup.isTouching(box5)&&box5.shapeColor=="red"){
                            arrowGroup.destroyEach()
                        score=score-5    
                            }
                       
                    
          

  imageMode(CENTER)



   controlArcher() 
archer.collide(blackArea)


if(keyDown("space")){
createArrow()

}


drawSprites();

}

function preload(){
forest=loadImage("forestbg.jpg")
wheelimg=loadImage("wheel1.jpg")
arrowleft=loadImage("arrowleft.png")
arrowright=loadImage("arrowright.png")
arrowup=loadImage("arrowup.png")
arrowdown=loadImage("arrowdown.png")
archerImg=loadImage("archer1.png")



}
 
function controlArcher(){

  if(keyDown(UP_ARROW)){
    archer.y=archer.y-5
    
    }
  
    if(keyDown(DOWN_ARROW)){
      archer.y=archer.y+5    
      
      }
    
      if(keyDown(LEFT_ARROW)){
        archer.x=archer.x-5
        
        
        }
        if(keyDown(RIGHT_ARROW)){
          archer.x=archer.x+5
          
          
          }



}