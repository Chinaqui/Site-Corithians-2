function vaiCorinthians(){ 
alert("Vai Corinthians!");
}

function enviarFormulario(event){
event.preventDefault();
alert("Cadastro enviado!");
}

// REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
reveals.forEach((el) => {
const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
el.classList.add("active");
}
});
});

// CONTADOR
const counters = document.querySelectorAll(".counter");

function startCounters(){
counters.forEach(counter => {
const target = +counter.getAttribute("data-target");
let current = 0;

const step = () => {
if(current < target){
current++;
counter.innerText = current;
requestAnimationFrame(step);
}
};

step();
});
}

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
startCounters();
observer.disconnect();
}
});
});

const titulos = document.querySelector("#titulos");
if(titulos){
observer.observe(titulos);
}