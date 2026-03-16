
const mytext = document.getElementById("mytext");
const mybtn = document.getElementById("mybtn");
const container = document.getElementById("container");
const apikey="620450c6";
const loadingdata=document.getElementById("loadingdata");
mybtn.onclick=async function getdata(){
    container.innerHTML="";
    let moviename = mytext.value.trim();
    container.style.display="inline";
    container.classList.add("contain");
    const data = await getMoviedetails(moviename);
    if(data){
        await displaydetails(data);
    }
    console.log("get data is completed 3");

}
async function getMoviedetails(moviename){
    if(!moviename || moviename===""){
        displayerror("enter valid movie name...");
        return;
    }
    loadingdata.style.display="block";
    loadingdata.classList.add("loadingdatacss");
    try{
        const response = await fetch(`https://www.omdbapi.com/?s=${moviename}&apikey=${apikey}`);
        const data = await response.json();
        console.log(data);
         if(data.Response==="False"){
            displayerror(data.Error);
            return;
        }
        console.log("getMoviedetails is completed.1");

        return data;
    }
    catch(error){
        displayerror("Network error");
    }
    finally{
        loadingdata.style.display="none";
    }

}
async function displaydetails(data){
    container.innerHTML="";
    const img = document.createElement("img");
    const hr1 = document.createElement("hr");
    const hr2 = document.createElement("hr");
    const moviename=document.createElement("h1");
    const year = document.createElement("p");
    const rating = document.createElement("p");
    const genre = document.createElement("p");
    year.classList.add("pelements");
    rating.classList.add("pelements");
    genre.classList.add("pelements");
    moviename.textContent=data.Search[0].Title;
    year.textContent=`Year: ${data.Search[0].Year}`;
    img.src=data.Search[0].Poster;
    img.alt="sampleimg";
    img.classList.add("myimg");
    const response = await fetch(`https://www.omdbapi.com/?i=${data.Search[0].imdbID}&apikey=${apikey}`);
    const rate = await response.json();
    //console.log(rate);
    rating.textContent=`IMDb Rating: ${rate.imdbRating} / 10`;
    genre.textContent=`Genre: ${rate.Genre}`;
    container.append(img);
    container.append(moviename);
    container.append(hr1);
    container.append(year);
    container.append(rating);
    container.append(hr2);
    container.append(genre);
    console.log("displaying details completed.2");





}
function displayerror(error){
    container.innerHTML = "";
    container.style.textAlign="center";
    container.style.display="block";
    container.classList.add("contain");
    const newele=document.createElement("h1");
    newele.textContent=`${error}!!`;
    container.append(newele);
    console.log("displaying error");
}