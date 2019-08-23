// dragElement(document.getElementById("mydiv"));
// Make the DIV element draggable:
//console.log(document.getElementById("mydiv1"));

var i =0;

function defaultPos()
{
	console.log(screen.width/3);
	Pos_td();
	// document.getElementById('mydiv1').style.top = 10;
	// document.getElementById('mydiv1').style.left = 10;
	
}

var td_Patter ={
	'tdT1':0,
	'tdL1':0,
	'tdT2':0,
	'tdL2':0,
	'tdT3':0,
	'tdL3':0,
	'tdT4':0,
	'tdL4':0,
	'tdT5':0,
	'tdL5':0,
	'tdT6':0,
	'tdL6':0
	
}




function Pos_td()
{
	 var i =0;
     for(i=1;i< 7;i++)
	  {
    	document.getElementById('td'+i).classList.remove('TestCheck');
       td_Patter['tdT'+i] = document.getElementById('td'+i).offsetTop;
	   td_Patter['tdL'+i] =document.getElementById('td'+i).offsetLeft;
   	 }
	
	//console.log(td_Patter);
}

  function ClickEvent(x) {
            //console.log(x.checked);
            if (x.checked == true) {
                document.getElementById('dvTEST').classList.add('TestCheck');
            }
            else {
                 document.getElementById('dvTEST').classList.remove('TestCheck');
            }
        }


function block(a,b)
{
   //console.log(x);
var x = document.getElementById('point');
var i =0;
for(i=1;i<7;i++)
{
	if((a -202 ) > td_Patter['tdT'+i] && b > td_Patter['tdL'+i] &&  b < (635 *i)  )
	{ 
     
	  
	  Pos_td();
	   document.getElementById('td'+ i).classList.add('TestCheck');

        switch('td'+ i)
		{
		case 'td1':
		    x.innerText = 'Initiated';	
             break;
	    case 'td2':
		     x.innerText = 'New';	
             break;
   		case 'td3':
		     x.innerText = 'In Progress';	
             break;
	    case 'td4':
		     x.innerText = 'Blocked';	
             break;
	    case 'td5':
		     x.innerText = 'Completed';	
             break;
		case 'td6':
		     x.innerText = 'Done';	
             break;
		}
       //x.innerText = 'td'+ i;	
    }
    else if(a < 180)
	 {
		Pos_td();
	  
	}
	
}

}


function block1(k)
{
 
	
}

function Check(x)
{  
    dragElement(x);
	//console.log(document.getElementById("mydiv1"));
	//console.log(x.id);
}
function dragElement(elmnt) {
//console.log(elmnt);
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

	var z = 0;

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
	
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	
	block(elmnt.offsetTop,elmnt.offsetLeft);
	
	//console.log(document.elementFromPoint((elmnt.offsetTop - pos2),(elmnt.offsetLeft - pos1)));
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}