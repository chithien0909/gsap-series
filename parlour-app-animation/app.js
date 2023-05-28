const card1 = document.querySelector(".card-1");
const reverse = document.querySelector(".left");

let t1 = gsap.timeline({
  paused: true,

})

card1.addEventListener("click", (e) => {
  e.stopPropagation();
  t1.play();
})

reverse.addEventListener("click", (e) => {
  e.stopPropagation();
  t1.reverse();
})

t1.to(".card-1", {
  ease: Power1.easeInOut,
  height: 640,
  width: 320,
  top: 0,
  left: 0,
  margin: 0,
  duration: 0.5,
})


t1.to(".card-2", {
  ease: Power1.easeInOut,
  x: 400,
  duration: 0.5,
}, 0.1)

t1.to(".card-1 h3", {
  ease: Power1.easeInOut,
  duration: 0.5,
  fontSize: 24,
  margin: "32px",
  y: -250,
}, 0.1)


t1.to(".card-1 p", {
  ease: Power1.easeInOut,
  duration: 0.5,
  padding: 24,
  marginLeft: 8,
  y: -580,
}, 0.2)


t1.to(".card-1 button", {
  ease: Elastic.easeOut(1, 0.9),
  duration: 0.5,
  bottom: "60px",
  marginLeft: 8,

}, 0.2)

t1.to(".left", {
  ease: Elastic.easeOut(1, 0.9),
  duration: 0.5,
  top: "24px",
  left: "24px",

}, 0.2)

