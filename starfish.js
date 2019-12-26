class StarFish{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=50;
        this.height=50;
        this.image=loadImage("images/Starfish.png");

    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,50,50);
    }

}