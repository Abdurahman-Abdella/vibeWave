const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");
const heroDiv = document.querySelector(".hero-img");
const sectionContainer = document.querySelector("section");
const bodyContainer = document.querySelector("body");
const emblemDiv = document.querySelector(".emblem");
const albumTitleSpan = document.querySelector(".album-title");
const albumSpan = document.querySelector(".album-author");

const texts = document.querySelectorAll(".text");
const albumNum = document.querySelector(".album-num");
const spotifyWidget = document.querySelector(".spotify-widget iframe");

  const albums = [
  {
    album: "Timeless",
    author: "The Weekend",
    emblem: "Life is better with music",
    "bg-color": ["#e0b86f", "#0D1827"],
    "accent-color": "#e0b86f",
    url: "images/timless.jpg",
    spotify: "https://open.spotify.com/embed/track/0FIDCNYYjNvPVimz5icugS?utm_source=generator"
  },
  {
    album: "One of the girls",
    author: "The Weekend",
    emblem: "Life is better with music",
    "bg-color": ["#c72f2f", "#0D1827"],
    "accent-color": "#c72f2f",
    url: "images/oneof.jpg",
    spotify: "https://open.spotify.com/embed/track/7CyPwkp0oE8Ro9Dd5CUDjW?utm_source=generator"
  },
  {
    album: "Starboy",
    author: "The Weekend",
    emblem: "Life is better with music",
    "bg-color": ["#ffbd44", "#0D1827"],
    "accent-color": "#ffbd44",
    url: "images/starboy.jpg",
    spotify: "https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB?utm_source=generator"
  },
  {
    album: "Blinding lights",
    author: "The Weekend",
    emblem: "Life is better with music",
    "bg-color": ["#580f41", "#0D1827"],
    "accent-color": "#a72a6b",
    url: "images/blindin.jpg",
    spotify: "https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b?utm_source=generator"
  },
  {
    album: "Standin next to You",
    author: "Jungkook",
    emblem: "Life is better with music",
    "bg-color": ["#1db954", "#0D1827"],
    "accent-color": "#0a9396",
    url: "images/jungkook.jpg",
    spotify: "https://open.spotify.com/embed/track/2KslE17cAJNHTsI2MI0jb2?utm_source=generator"
  },
  {
    album: "NINAO",
    author: "Gims",
    emblem: "Life is better with music",
    "bg-color": ["#bb3e03", "#0D1827"],
    "accent-color": "#ee9b00",
    url: "images/gims.jpg",
    spotify: "https://open.spotify.com/embed/track/2uBKQbVcw8G9m34lGYM6VA?utm_source=generator"
  },
  {
    album: "The Search",
    author: "NF",
    emblem: "Life is better with music",
    "bg-color": ["#14213d", "#0D1827"],
    "accent-color": "grey",
    url: "images/nate.jpg",
    spotify: "https://open.spotify.com/embed/track/3oLe5ZILASG8vU5dxIMfLY?utm_source=generator"
  },
  {
    album: "Stay",
    author: "Justin Bieber",
    emblem: "Life is better with music",
    "bg-color": ["#1db954", "#0D1827"],
    "accent-color": "#1db954",
    url: "images/justice.jpg",
    spotify: "https://open.spotify.com/embed/track/567e29TDzLwZwfDuEpGTwo?utm_source=generator"
  },
  {
    album: "That's What I Like",
    author: "Bruno Mars",
    emblem: "Life is better with music",
    "bg-color": ["#3a86ff", "#0D1827"],
    "accent-color": "#00b4d8",
    url: "images/mars.jpg",
    spotify: "https://open.spotify.com/embed/track/0KKkJNfGyhkQ5aFogxQAPU?utm_source=generator"
  },
  {
    album: "Uptown Funk",
    author: "Bruno Mars",
    emblem: "Life is better with music",
    "bg-color": ["#ff006e", "#0D1827"],
    "accent-color": "#fb5607",
    url: "images/uptown.jpg",
    spotify: "https://open.spotify.com/embed/track/32OlwWuMpZ6b0aN2RZOeMS?utm_source=generator"
  }
];



scrollLeft.addEventListener("click", () => handleClickScroll(-1));
scrollRight.addEventListener("click", () => handleClickScroll(1));
heroDiv.addEventListener("animationend", () => {
	heroDiv.classList.remove("album-transition");
	document.addEventListener("keydown", handleKeyScroll);
	scrollLeft.disabled = false;
	scrollRight.disabled = false;
	scrollLeft.classList.remove("key-press-hover-left");
	scrollRight.classList.remove("key-press-hover-right");

	for (const text of texts) text.classList.add("show-texts");
});

const handleClickScroll = (val) => {
	if (index + val >= 0 && index + val < albums.length) {
		updateDisplay((index += val));
	}
};

const handleKeyScroll = (e) => {
	if (e.key == "ArrowLeft") {
		scrollLeft.classList.add("key-press-hover-left");
		handleClickScroll(-1);
	}
	if (e.key == "ArrowRight") {
		scrollRight.classList.add("key-press-hover-right");
		handleClickScroll(1);
	}
};
let index = 0;

const updateDisplay = (index) => {
	let DELIMITER = "";

	const album = albums[index];

	for (const text of texts) text.classList.remove("show-texts");
	emblemDiv.innerHTML = "";
	scrollLeft.disabled = true;
	scrollRight.disabled = true;
	document.removeEventListener("keydown", handleKeyScroll);

	sectionContainer.id = `hero-${album.album.toLowerCase().replace(" ", "-")}`;
	bodyContainer.style.background = `linear-gradient(180deg, ${album["bg-color"][0]} 0%, ${album["bg-color"][1]} 100%)`;
	heroDiv.style.backgroundImage = `url(${album.url})`;
	albumTitleSpan.textContent = album.album;
	albumSpan.textContent = album.author || "";

	spotifyWidget.src = album.spotify;

	const number = index + 1;
	albumNum.innerText = number >= 10 ? number + "." : `0${number}.`;
	albumNum.style.color = album["accent-color"];

	if (index === albums.length - 1) {
  scrollRight.classList.add("hide-arrow");
} else {
  scrollRight.classList.remove("hide-arrow");
}


	createEmblem(album.emblem, DELIMITER[0] || undefined).forEach((node) =>
		emblemDiv.append(node)
	);

	heroDiv.classList.add("album-transition");
};

const createEmblem = (string, delimiter = "•") => {
	const spans = [];

	string = string.trim().replaceAll(" ", delimiter) + delimiter;
	const numChars = string.length;
	const degVal = 90 / (numChars / 4);

	string.split("").forEach((char, idx) => {
		const span = document.createElement("span");
		span.innerText = char;
		span.style.transform = `rotate(${180 - degVal * idx}deg)`;
		if (char === delimiter) span.style.color = albums[index]["accent-color"];
		spans.push(span);
	});

	return spans;
};

updateDisplay(index);
