/*fetch("ex1.json")
.then(response => response.json())
.then(values => {values.forEach(element => {
    console.log(element.age);
});})
.catch(error =>console.log(error));

a();
async function a(){
    try{
    const t = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    if(!t.ok){
        throw new error("not found");
    }
    const data =await t.json();
    console.log(data);
    }
    catch(error){
        console.error(error);
    }

}
*/
const myimg = document.getElementById("myimg");
const mybtn = document.getElementById("mybtn");
mybtn.onclick=
async function(){
    try{
        const mytext = document.getElementById("mytext").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${mytext}`);
        if(!response.ok){
            throw new Error("data not found.");
        }
        const data = await response.json();
        const sprites = data.sprites.back_default;
        myimg.src=sprites;
        myimg.alt = mytext;
        myimg.style.display="block";
    }
    catch(error){
        console.error(error);

    }
}