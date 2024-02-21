const paths = document.querySelectorAll(".sigvg path");
paths.forEach((item, index) => {
  const pathLength = item.getTotalLength();
  item.setAttribute("stroke-dasharray", pathLength);
  item.setAttribute("stroke-dashoffset", pathLength);
  gsap.fromTo(
    item,
    { strokeDashoffset: pathLength },
    {
      strokeDashoffset: 0,
      duration: 3,
      delay: index * 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: item,
        toggleActions: "play none none reverse",
        start: "top center",
        end: "bottom center",
      },
    }
  );
});