var dog,happyDog,foodS,foodStock,database

function preload()
{
  dogImg = loadImage("images/dogImg1.png")
  happyDog   = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,200,50,50)
  dog.addImage(dogImg)
  dog.scale = 0.2
  database = firebase.database()
  foodStock =database.ref("Food");
  foodStock.on("value",readStock);
}
function readStock(data) {
foodS = data.val();
console.log(foodS)
}

function writeStock(x){
data.ref('/').update({
  Food : x
})

}



function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog.addImage(happyDog)
  }

  
  drawSprites();
  textSize(20)
  fill("lavender")
  text("Press Up Arrow Key To feed the dog and to make it happy",30,30)
  textSize(20)
  fill("yellow")
  text("Food Stock :"+foodS,30,100)
}



