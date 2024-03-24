import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const animateTextNav = (selector, trigger, text, duration) => {
  gsap.to(selector, {
    duration: duration,
    text: text,
    padding: 0,
    delay: 0,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      markers: false,
    },
  });
};

export const animateText = (selector, trigger, text, duration) => {
  gsap.to(selector, {
    duration: duration,
    text: text,
    delay: 0,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "center center",
      toggleActions: "play none none reverse",
      markers: false,
    },
  });
};

export const ObjectChangeColor = (selector, color, trigger, start, end) => {
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
    backgroundColor: color,
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

export const scrollerpic = (selector, trigger, opacity, x) => {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      scrub: false,
      markers: false,
    },
    ease: "power1.inOut",
    x: x,
    opacity: opacity,
  });
};

export const pulse = (selector, duration, delay) => {
  gsap.to(selector, {
    duration: duration,
    delay: delay,
    scaleX: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
};
