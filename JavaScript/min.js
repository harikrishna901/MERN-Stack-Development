const mytext = document.getElementById("mytext");
const mybtn = document.getElementById("mybtn");
const container = document.getElementById("container");

const apikey = "620450c6";

mybtn.addEventListener("click", () => {
    getdata();
});

async function getdata() {
    const moviename = mytext.value.trim();
    container.innerHTML = "";

    const data = await getMoviedetails(moviename);

    if (data) {
        displaydetails(data);
    }
}

async function getMoviedetails(moviename) {
    if (!moviename) {
        displayerror("Enter valid movie name");
        return;
    }

    try {
        const response = await fetch(
            `https://www.omdbapi.com/?s=${moviename}&apikey=${apikey}`
        );

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        if (data.Response === "False") {
            displayerror(data.Error);
            return;
        }

        return data;
    } catch (error) {
        displayerror("Network error");
    }
}

async function displaydetails(data) {
    if (!data.Search || data.Search.length === 0) {
        displayerror("Movie not found");
        return;
    }

    container.innerHTML = "";

    const movie = data.Search[0];

    const img = document.createElement("img");
    img.src = movie.Poster !== "N/A" ? movie.Poster : "no-image.png";
    img.alt = movie.Title;
    img.classList.add("myimg");

    const moviename = document.createElement("h1");
    moviename.textContent = movie.Title;

    const year = document.createElement("p");
    year.classList.add("pelements");
    year.textContent = `Year: ${movie.Year}`;

    const rating = document.createElement("p");
    rating.classList.add("pelements");

    const genre = document.createElement("p");
    genre.classList.add("pelements");

    const hr1 = document.createElement("hr");
    const hr2 = document.createElement("hr");

    const response = await fetch(
        `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apikey}`
    );
    const rate = await response.json();

    rating.textContent = `IMDb Rating: ${rate.imdbRating} / 10`;
    genre.textContent = `Genre: ${rate.Genre}`;

    container.append(
        img,
        moviename,
        hr1,
        year,
        rating,
        hr2,
        genre
    );
}

function displayerror(error) {
    container.innerHTML = "";
    container.className = "contain";

    const newele = document.createElement("h1");
    newele.textContent = `${error}!!`;

    container.append(newele);
}
