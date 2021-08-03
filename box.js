class Box{

    constructor(x,y,width,height){
      var Options={
            isStatic:true
            }
            this.width=width
            this.height=height
           this.body =Bodies.rectangle(x,y,width,height,Options)
            World.add(world,this.body)

    }
display(){
rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,this.width,this.height)


}










}