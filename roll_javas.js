// let score;
// let dice;

// /*
// //intially 
// score=0;
// display image1;

// //when roll button clicked execute below code and start timer for 20sec
// {
// 	dice=random(7);
// 	display image(${dice}); //display image of dice outcome
// 	score=score+dice;
// }
// //above code active for 20 sec

// //after 20sec disable roll button and display score
// display score;
// */


// var d1=document.createElement("img");
// d1.src="dice-1.png";

// var d2=document.createElement("img");
// d2.src="dice-2.png";

// var d3=document.createElement("img");
// d3.src="dice-3.jpeg";

// var d4=document.createElement("img");
// d4.src="dice-4.png";

// var d5=document.createElement("img");
// d5.src="dice-5.png";

// var d6=document.createElement("img");
// d6.src="dice-6.png";

// dice = Math.floor(Math.random() * 6) + 1;

// document.write(dice);

// switch(dice)
// {
//  	case 1:
//  		img.src="dice-1.png";	
//  	break;

//  	case 2:
//  		document.write(d2.src);	
//  	break;

//  	case 3:
//  		document.write(d3.src);	
//  	break;

//  	case 4:
//  		document.write(d4);	
//  	break;

//  	case 5:
//  		document.write(d5);	
//  	break;

//  	case 6:
//  		document.write(d6);	
//  	break;
// }


var sum=0;
var t=5;

function fn()
{

	if(t==5)
	{
		timeless();
	}

	let dicer = Math.floor(Math.random() *6 ) + 1;
	document.getElementById('img1').src="dice-"+dicer+".png";
	sum = sum+dicer;
	document.getElementById('score').innerHTML = sum;
}

function timeless()
{
	if(t<0)
	{
		document.getElementById("rbutton").disabled=true;
		alert("Time Up !   Reload Page");
	}
	else
	{
		setTimeout(function(){timeless();},1000);
		--t;
		console.log(t);
	}
}




