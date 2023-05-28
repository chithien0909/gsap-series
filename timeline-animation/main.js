const buy = document.querySelector(".buy");

const back = document.querySelector(".back-button");

let t1 = gsap.timeline({paused: true, reversed: true});
let t2 = gsap.timeline({paused: true, reversed: true});


buy.addEventListener("click", (e) => {
  t2.play();
});

back.addEventListener("click", (e) => {
  t2.reverse();
});

t1.play();

t1.to(".car-1", {
  ease: Elastic.easeOut(1, 0.8),
  top: "10%",
  rotate: 0,
  duration: 0.5,
})

t1.to(".menu", {
  ease: Elastic.easeOut(1, 0.8),
  left: 30,
  duration: 0.5,
}, 0.3)

t1.to(".profile", {
  ease: Elastic.easeOut(1, 0.8),
  right: 30,
  duration: 0.5,
}, 0.3)


t1.to(".container h1", {
  ease: Elastic.easeOut(1, 0.8),
  bottom: "25%",
  duration: 0.5,
}, 0.3)

t1.to(".container p", {
  ease: Elastic.easeOut(1, 0.8),
  bottom: "14%",
  duration: 0.5,
}, 0.4)

t1.from(".buy", {
  ease: Elastic.easeOut(1, 0.8),
  scale: 0,
  duration: .5,
}, 0.6)

t2.to(".car-1", {
  ease: Elastic.easeOut(1, 0.8),
  top: "-60%",
  duration: .5,
})

t2.to(".menu", {
  ease: Power1.easeInOut(1, 0.8),
  left: -30,
}, 0.3)

t2.to(".profile", {
  ease: Power1.easeInOut(1, 0.8),
  right: -30,
}, 0.3)


t2.to(".container h1", {
  ease: Elastic.easeOut(0.5, 0.8),
  bottom: "-25%",
}, 0)

t2.to(".container p", {
  ease: Elastic.easeOut(1, 0.8),
  bottom: "-14%",
}, 0)

t2.to(".buy i", {
  ease: Power1.easeOut(1, 0.8),
  scale: 0,
  duration: .3
})

t2.to(".buy", {
  ease: Power1.easeOut(1, 0.8),
  scaleY: 16,
  width: 378,
  duration: .3,
})

t2.to(".back-button", {
  ease: Power1.easeOut(1, 0.8),
  bottom: "5%",
  duration: .3,
}, .3)


t2.to(".car-final", {
  ease: Elastic.easeOut(1, 0.8),
  left: "50%",
  duration: .5,
}, 0.5)


t2.to(".container h2", {
  ease: Elastic.easeOut(1, 0.8),
  left: "60%",
  duration: .5,
}, .7)


t2.to(".summary", {
  ease: Elastic.easeOut(1, 0.8),
  left: "52%",
  duration: .5,
}, 0.7)


t2.to(".summary-2", {
  ease: Elastic.easeOut(1, 0.8),
  left: "52%",
  duration: .5,
}, .7)

