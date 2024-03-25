const bodyElement = document.querySelector("body");
bodyElement.style.backgroundColor = '#e9e9e9';

const news = document.querySelector(".news");
news.style.backgroundColor = "white";
news.style.maxWidth = "60rem";

const title = document.querySelector("h1");
title.classList.add("news__title");
const currentNews = document.querySelector(".news__title");
currentNews.textContent = "Aktuální novinky";

const firstNew = document.getElementById("zprava1");
firstNew.classList.add("post--main");

const img = document.querySelector("#zprava3 img");
img.src = "images/zprava3-novy.jpg";



