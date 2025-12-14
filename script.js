function generation(x, y) {
	switch (x){
		case (-3):{
			if(y==="m"){
				console.log("great grandfather");break;
			}else console.log("great grandmother");break;
				
		}
				case (-2):{
			if(y==="m"){
				console.log("grandfather");break;
			}else console.log("grandmother")	;break;
		}
	case (-1):{
			if(y==="m"){
				console.log("father");break;
			}else console.log("mother")	;break;
	}
		case (0):{
			if(y==="m"){
				console.log("me!");
				break;
			}else console.log("me!");	
break;
}
	case (+1):{
			if(y==="m"){
				console.log("son");
				break;
			}else console.log("daughter");	
break;
	}
		case (+2):{
			if(y==="m"){
				console.log("grandson");
				break;
			}else console.log("granddaughter");
break;
	}
case (+3):{
			if(y==="m"){
				console.log("great grandson"); break;
			}else console.log("great granddaughter");	 break;
	}
	default:
console.log("persona no gratta");
}}


function countTrue(arr) {
	var count=0;
	for (var i=0;i<arr.length;i++){
		if (arr[i]==true){
			count=count+1;
		}
	}
	return count;
}

function possibleBonus(a, b) {
	if ((b-a<=6)&&(b>a)) {return true;}
	else return false;
}

function sevenBoom(arr) {
  const str = arr.join("");    
	for(var i=0; i<str.length;i++)
  if (str[i]==="7"){
		return "Boom!";
	}           
     
    return "there is no 7 in the array";
  }