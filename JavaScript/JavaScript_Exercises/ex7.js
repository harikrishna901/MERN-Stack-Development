//const id = document.querySelectorAll("h1");
//for(ide of id){
//    ide.style.backgroundColor='yellow';
//}

//Array.from(id).forEach(element => element.style.backgroundColor='yellow')
//id.forEach(Element => Element.style.fontSize='60px');
// dom navigation;
//const  id = document.getElementsByTagName("h1");
//const first = id.firstElementChild;
//first.style.backgroundColor='yellow';
//const last = id.lastElementChild;
//last.style.backgroundColor='blue';
//const next = first.nextElementSibling;
//const prev = last.previousElementSibling;
//next.style.backgroundColor='orange';
//prev.style.backgroundColor='blue';
//const parent = first.parentElement;
//parent.style.backgroundColor='red';
//const children = parent.children;
//console.log(children);
//Array.from(children).forEach(Element =>Element.style.backgroundColor='yellow');
const id = document.getElementById("animals");
const newele = document.createElement("li");
newele.textContent="Jaguar";
const lion = document.getElementById("lion");
//id.append(newele);
//id.insertBefore(newele,lion);
//id.removeChild(lion);
const idd = document.querySelectorAll("#animals li");
document.getElementById("animals").insertBefore(newele,idd[1]);
const neew = document.createElement("h4");
neew.textContent = "mmm";
neew.style.backgroundColor='blue';
document.body.append(neew);
const a = document.getElementsByTagName("h1");
a[0].textContent='nam'