  window.onload = function() {
  var button = document.getElementById("preview"); 
  button.onclick = previewHandler;

   };


function previewHandler() {    
 	var canvas = document.getElementById("can");   
	var context = canvas.getContext("2d");
	 
 	fillBackgroundColor(canvas,context);
	drawText(canvas,context);
 	
	
 function drawText(canvas,context) {
 var message = document.getElementById("display").value;
 var selectObj=document.getElementById("foregroundColor");
 var index=selectObj.selectedIndex;
 var fgColor=selectObj[index].value;
 context.fillStyle = fgColor;
 context.font="italic 1.2em serif";
 context.textAlign="left";
 context.fillText(message,150,80);
 
       }
	
	
   	var selectObj = document.getElementById("shape"); 
	var index = selectObj.selectedIndex;  
   	var shape = selectObj[index].value;
	
    if (shape == "squares") 
    { 
    	for (var squares = 0; squares < 20; squares++) 
    { 
		drawSquare(canvas, context); 
 	} 
	
 	}
 	else if (shape == "circles") 
 	{
 	for (var circles = 0; circles < 20; circles++) 
 	{ 
		drawCircle(canvas, context); 
    } 
    }

	
    }
 


 function fillBackgroundColor(canvas,context)
 { 
 var selectObj=document.getElementById("backgroundColor");
 var index=selectObj.selectedIndex;
 var bgColor=selectObj[index].value;
 context.fillStyle = bgColor;
 context.fillRect(0,0,600,200);
 }
 
       
function drawSquare(canvas, context) 
{
    var w = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    context.fillStyle = "red";    
    context.fillRect(x, y, w, w);
}
    
    function drawCircle(canvas, context) 
    { 
    var radius = Math.floor(Math.random() * 40);    
    var x = Math.floor(Math.random() * canvas.width);  
    var y = Math.floor(Math.random() * canvas.height);
    context.beginPath();   
	context.arc(x, y, radius, 0,(360*Math.PI)/180, true);
    context.fillStyle ="blue";    
    context.fill(); 
    }
    

