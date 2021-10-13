gsap.registerPlugin(ScrollTrigger);

const flasker = document.querySelector("#flaske-animation");

flasker.forEach((flaske) => {
  const img = flasker.querySelectorAll("img");
  const h3 = flasker.querySelectorAll("h3");
  const p = flasker.querySelectorAll("p");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#flaske-animation",
        start: "50% 50%",
        end: "+=200",
        scrub: true,
      },
    })
    .from(img, {
      duration: 1,
      opacity: 0,
    })
    .from(h3, {
      duration: 1,
      opacity: 0,
    })
    .from(p, {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
    });
});
