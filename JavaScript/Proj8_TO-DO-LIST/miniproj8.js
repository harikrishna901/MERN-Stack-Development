todoitems=[];
const mybtn = document.getElementById("mybtn");
const mytext = document.getElementById("mytext");
const mydiv = document.getElementById("mydiv");
let text="items";
function renderitems(){
    mydiv.innerHTML=null;
    for(const [idx,item] of Object.entries(todoitems)){
        const container = document.createElement("div");
        const additem = document.createElement("p");
        const deletebutton = document.createElement("button");
        additem.style.display="inline";
        additem.textContent=item;
        deletebutton.textContent="Delete";
        deletebutton.onclick= ()=>{
              removeitems(idx);
        }
        container.append(additem);
        container.append(deletebutton);
        mydiv.appendChild(container);
    }
    saveitems();
    console.log(todoitems);
}
function removeitems(idx){
    todoitems.splice(idx,1);
    renderitems();

}
function additems(){
    let itemvalue=mytext.value;
    if(!itemvalue){
        window.alert("enter correct input");
        return;
    }
    todoitems.push(itemvalue);
    mytext.value="";
    renderitems();

}
function saveitems(){
    const newitems=JSON.stringify(todoitems);
    localStorage.setItem(text,newitems);
}
function loaditems(){
    const olditems=localStorage.getItem(text);
    todoitems = olditems ? JSON.parse(olditems) : [];
    renderitems();

}
document.addEventListener("DOMContentLoaded",loaditems);