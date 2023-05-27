
$(document).ready(function() {
  $("#fullpage").fullpage({
    anchors: ["firstPage", "secondPage", "thirdPage"],
    menu: "#menu",
    autoScrolling:false,
    // responsiveWidth: 750
  });
})


// ScrollMagic: init controller

const controller = new ScrollMagic.Controller();

// Tween - Section 2
const scene = new ScrollMagic.Scene({
  triggerElement: "#section2",
})
// animate color and top border in relation to scroll position
.setTween("#bg img", {
  maxWidth: "1200px",
  top: "30%",
  left: "80%",
  opacity: 0.25,
})
// the tween duration can be omitted and defaults to 1
.addTo(controller);

// Tween - Section 3

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#section3",
  duration: 300,
})
  //animate color and top border in relation to scroll position
.setTween("#bg img", {
  top: "20%",
}) // the tween duration can be omitted and defaults to 1
  // Add indicators (requires plugin)
.addTo(controller);