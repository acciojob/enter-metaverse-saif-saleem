//your JS code here. If required.
enter = ()=>{
let e=document.getElementById("d1");
let el=document.getElementById("status");
el.remove();
	let pr=document.createElement("p");
let par=document.createElement("h1");
let no=document.createTextNode("Entered Metaverse");
par.appendChild(no);
	pr.appendChild(par);
e.appendChild(par);
}
