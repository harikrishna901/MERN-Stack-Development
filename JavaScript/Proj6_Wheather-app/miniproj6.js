const mytext = document.getElementById("mytext");
const mydiv = document.querySelector(".mydiv");
const mybtn = document.getElementById("mybtn");

const apikey = "a29f8d9baba5307dd0954b87f078fd77";

mybtn.onclick = async function () {
    const cityname = mytext.value.trim();
    mydiv.innerHTML="";
    const data = await getWeather(cityname);
    console.log(data);
    const name=document.createElement("h1");
    const temperature = document.createElement("p");
    const humidityy= document.createElement("p");
    const des = document.createElement("p");
    const {main:{temp,humidity},weather:[{description}]}=data;
    name.textContent=cityname;
    mydiv.append(name);
    temperature.textContent=`${(((temp)*(9/5))+32).toFixed(1)} F`;
    temperature.classList.add("pelements");
    mydiv.append(temperature);
    humidityy.textContent=`Humidity: ${humidity}`;
    humidityy.classList.add("pelements");
    mydiv.append(humidityy);
    des.textContent=description;
    des.classList.add("pelements");
    mydiv.append(des);
    mydiv.style.display="flex";





};

async function getWeather(name) {
    if (!name) {
        displayError("Enter a valid city name");
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}`);

        if (!response.ok) {
            displayError("City not found");
            return;
        }

        const data = await response.json();
        return data;

    } catch (error) {
        displayError("Network error");
    }
}

function displayError(error) {
    mydiv.innerHTML = "";
    const e = document.createElement("h1");
    e.classList.add("pelements");
    e.textContent = error;
    mydiv.append(e);
}
