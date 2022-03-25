//INITIALZING LOCOMOTIVE SCROLL
var scroll_one = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.01,
    inertia: 0.2,
    scrollFromAnywhere: true,
    tablet: {
      breakpoint: 0
    }
  });
  // FOR BG ANIME ON SCROLL
  gsap.to(".hp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".hp",
      markers: 0,
      scrub: 1, //forced anyways
      end: "bottom top",
      start: "top top"
    }
  });
  
  // FOR 'MOTIVE' ANIME
  let tl = gsap.timeline();
  tl.from(
    "#on",
    // { opacity: 0 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: "#on",
        markers: 0,
        scrub: 1, //forced anyways
        end: "bottom 70%"
      }
    }
  );
  // FOR MOTIVE BG ANIME
  gsap.to("#mtiv", {backgroundSize:"100%", backgroundPosition:"50% 100%", scrollTrigger:{trigger:"#mtiv", markers:1, scrub:1, start:"top 95%"}})
  // FOR 'SCROLL' ANIME
  let tl2 = gsap.timeline();
  tl2.from(
    "#scroll",
    // { opacity: 0 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: "#scroll",
        markers: 0,
        scrub: 1,
        end: "50% 50%"
      }
    }
  );
  // FOR IMAGE ANIME
  let imgs = document.querySelectorAll("img");
  imgs.forEach((e, i) => {
    if (i != 0) {
      console.log(e, i);
      gsap.from(e, {
        opacity: 0,
        // x: gsap.utils.random(-20, 20),
        scrollTrigger: {
          trigger: e,
          markers: 0,
          scrub: 1,
          end: "50% 50%"
        }
      });
    }
  });
  // FOR VIDEO ANIME
  let videos = document.querySelectorAll(".vid");
  videos.forEach((e, i) => {
    gsap.from(e, {
      opacity: 0,
      x: gsap.utils.random(-20, 20),
      scrollTrigger: {
        trigger: e,
        markers: 0,
        scrub: 1,
        end: "50% 50%"
      }
    });
  }); 
  window.onload = () => {
    gsap.to(".load_page", 0.5, { opacity: 0 });
    gsap.to(".load_page", { display: "none", delay: 0.6 });
  
    scroll_one.update();
    scroll_one.on("scroll", () => {
      ScrollTrigger.refresh();
    });
    // OPENING ANIME
    let otl = gsap.timeline({ delay: 0.8 });
    otl.fromTo(
      ".ho",
      2,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, ease: "expo.out" }
    );
  };
  