class Ground{
    constructor(x,y,width,height){
        this.width = width
        this.height = height
        var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
    show(){
        rect (this.body.position.x, this.body.position.y, this.width, this.height)
    }
}