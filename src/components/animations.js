import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
export const animateText = (selector, trigger,text, duration) => {
    gsap.to(selector, {
        duration: duration, 
        text: text, 
        delay: 1,
        ease: "power1.inOut",
        scrollTrigger: {
        trigger: trigger,
        start: "top center",
        end: "40% center",
        toggleActions: "play none none reverse",
        scrub: 10,
        markers: false,
      },
    });
  };

export const changeColor = (selector, color, trigger, start, end) => {
    gsap.to(selector, {
        scrollTrigger: {
          trigger: trigger,
          start: start,
          end: end,
          toggleActions: "play reverse play reverse",
          scrub: false,
          markers: false,
        },
        ease: "power1.inOut",
        color: color,
      });
};

export const BGchangeColor = (trigger, color) => {
  gsap.to(".background", {
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      scrub: false,
      markers: false,
    },
    ease: "power1.inOut",
    backgroundColor: color,
  });
};

export const cursorChange = (trigger, color) => {
  gsap.to(".custom-cursor", {
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      scrub: false,
      markers: false,
    },
    ease: "power1.inOut",
    backgroundColor: color,
  });
};