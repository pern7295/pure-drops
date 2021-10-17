gsap.registerPlugin(ScrollTrigger);

const containers = document.querySelectorAll(".min-container .row");

containers.forEach((container) => {
  const h2s = container.querySelector("h2");
  const h3s = container.querySelectorAll("h3");
  const imgs = container.querySelectorAll(".ani-img");
  const ps = container.querySelectorAll("p");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 50%",
        end: "+=200",
        scrub: true,
        //pin: true,
        // markers: true,
      },
    })

    .from(h2s, {
      duration: 2,
      opacity: 0,
    })
    .from(h3s, {
      duration: 2,
      opacity: 0,
    })
    .from(imgs, {
      duration: 4,
      opacity: 0,
      y: 100,
      stagger: 0.1,
    })
    .from(ps, {
      duration: 2,
      opacity: 0,
      y: 40,
      stagger: 0.1,
    });
});

//gsap.registerPlugin(ScrollTrigger);

//GASP Animation - Ease In on ScrollTrigger

// const sections = document.querySelectorAll("section");

// sections.forEach((section) => {
//   gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "center bottom",
//         end: "+=200",
//         scrub: 1,
//         //pin: true,
//       },
//     })
//     .from(section.querySelector("h2"), {
//       duration: 0.8,
//       opacity: 0,
//       ease: "power1",
//     })
//     .from(section.querySelector("h3"), {
//       duration: 0.8,
//       opacity: 0,
//       ease: "power1",
//     })

//     .from(section.querySelectorAll("p"), {
//       duration: 0.8,
//       opacity: 0,
//       ease: "power1",
//       y: 150,
//       stagger: 1,
//     });
// });

// ---------------------------------------------

// gsap.registerPlugin(ScrollTrigger);

// const flasker = document.querySelector("#flaske-animation");

// flasker.forEach((flaske) => {
//   const img = flasker.querySelectorAll("img");
//   const h3 = flasker.querySelectorAll("h3");
//   const p = flasker.querySelectorAll("p");
//   gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: "#flaske-animation",
//         start: "50% 50%",
//         end: "+=200",
//         scrub: true,
//       },
//     })
//     .from(img, {
//       duration: 1,
//       opacity: 0,
//     })
//     .from(h3, {
//       duration: 1,
//       opacity: 0,
//     })
//     .from(p, {
//       y: 100,
//       duration: 1,
//       opacity: 0,
//       stagger: 1,
//     });
// });
