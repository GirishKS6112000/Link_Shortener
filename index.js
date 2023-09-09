var btn= document.getElementById("btn");
var copybtn = document.getElementById("copybtn");

btn.addEventListener("click" ,change);
copybtn.addEventListener("click", copy);



async function change(){
	var lurl= document.getElementById("lurl").value;
    var surl= document.getElementById("surl");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${lurl}`);
	const data = await result.json();
    surl.value =data.result.short_link2 ;

}

function copy(){
	 var surl= document.getElementById("surl");
	 var copied = document.getElementById("copied");
	 surl.select();
	 window.navigator.clipboard.writeText(surl.value);
	 if(surl.value){
	 	copied.style.display="block"
	 	copied.innerText="Copied !"
	 }else{
	 	copied.style.display="none"
	 	
	 }

}


document.getElementById("btn").onclick= ()=>{
		let lurl = document.getElementById("lurl").value;
		if(!lurl){
			document.getElementById("info").style.display= "block"
			document.getElementById("info").innerText = "Give Your Long Url !"
		}
	}

	const chng= ()=>{
		let lurl = document.getElementById("lurl").value;
		if(lurl){
			document.getElementById("info").style.display= "none"
			
		}else{
			document.getElementById("info").style.display= "block"
			document.getElementById("info").innerText = "Give Your Long Url !"
		}
	}
