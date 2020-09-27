class Box {
 var options ={
     restitution:1
 }
 this.body=Bodies.rectangle()
World.add(World,this.body)

display();
var pos=this.body.position
rectmode(CENTER)
fill(100)
rect(pos.x,pos.y,this.width,this.height)
}
