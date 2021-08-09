canvas=document.getElementById("myCanvas")

ctx=canvas.getContext("2d")

//Give specific height and width to the car image
greenCar_height=100
greenCar_width=75



background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greenCar_y=5
greenCar_x=225


function add() {
	background_imgTag= new Image()
	background_imgTag.onload = uploadBackground
	background_imgTag.src = background_image

	greenCar_imgTag= new Image()
	greenCar_imgTag.onload = uploadBackground
	greenCar_imgTag.src = background_image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width,canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(greenCar_imgTag, greenCar_y ,greenCar_x,greenCarwidth,greenCar_height)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greenCar_y >=0){
		greenCar = greenCar_y-10
		console.log
	}
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
