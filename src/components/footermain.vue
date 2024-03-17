<script setup>
import { gsap } from "gsap";
import { onMounted, onUnmounted, ref, watchEffect } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  animateText,
  changeColor,
  pulse,
  BGchangeColor,
  ObjectChangeColor,
} from "./animations.js";
import { Icon } from "@iconify/vue";
// Add gaming sht
// <Icon icon="simple-icons:myanimelist"  style="color: #161616" />
// <Icon icon="arcticons:genshin-impact"  style="color: #161616" />
// <Icon icon="mdi:steam"  style="color: #161616" />

const currentTime = ref(new Date().toLocaleTimeString());

watchEffect(() => {
  const intervalId = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString();
  }, 1000);

  onUnmounted(() => {
    clearInterval(intervalId);
  });
});

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
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
        duration: 5,
        delay: index * 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".outterWrapper",
          toggleActions: "play none none reverse",
          start: "top center",
          end: "bottom center",
        },
      }
    );
  });
  BGchangeColor(".outterWrapper", "#161616");
  ObjectChangeColor(
    ".underline",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  ObjectChangeColor(
    ".underline1",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  ObjectChangeColor(
    ".underline2",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  ObjectChangeColor(
    ".underline3",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  ObjectChangeColor(
    ".underline4",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  animateText(".detail", ".outterWrapper", "details.", 2);
  animateText(".contacts", ".outterWrapper", "socials.", 2);
  changeColor(
    "#arrowup",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );

  ObjectChangeColor(
    "#navbar",
    "#161616",
    ".outterWrapper",
    "top center",
    "bottom center"
  );

  changeColor(
    "#samshh",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );

  changeColor(
    ".contacts",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".contact",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".time p",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".detail",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".details",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".madeby",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".source",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".ficon",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  pulse(".underline", 2, 0);
  pulse(".underline1", 2, 0.5);
  pulse(".underline2", 2, 1);
  pulse(".underline3", 2, 1.5);
  pulse(".underline4", 2, 2);
});

onUnmounted(() => {
  gsap.killTweensOf(".outterWrapper", ".contacts");
});
</script>

<template>
  <div class="outterWrapper">
    <div class="timewrap">
      <div class="innerWrapper">
        <div class="contwrap">
          <h1 class="contacts">jK8zX3Qp</h1>
          <a
            class="contact linkedin hoverable"
            target="_blank"
            href="https://www.linkedin.com/in/samshh/"
            style="cursor: none"
          >
            <Icon icon="mdi:linkedin" class="ficon" style="color: #161616" />
            LinkedIn
            <div class="underline"></div>
          </a>
          <a
            class="contact github hoverable"
            target="_blank"
            href="https://github.com/Samshh"
            style="cursor: none"
          >
            <Icon icon="mdi:github" class="ficon" style="color: #161616" />
            GitHub
            <div class="underline1"></div>
          </a>
          <a
            class="contact google hoverable"
            target="_blank"
            href="https://developers.google.com/profile/u/samshh"
            style="cursor: none"
          >
            <Icon icon="bxl:google" class="ficon" style="color: #161616" />
            Google
            <div class="underline2"></div>
          </a>
          <a
            class="contact bento hoverable"
            target="_blank"
            href="https://bento.me/samshh"
            style="cursor: none"
          >
            <Icon
              icon="simple-icons:bento"
              class="ficon"
              style="color: #161616"
            />
            Bento
            <div class="underline3"></div>
          </a>
          <a
            class="contact instagram hoverable"
            target="_blank"
            href="https://www.instagram.com/smldcra/"
            style="cursor: none"
          >
            <Icon icon="mdi:instagram" class="ficon" style="color: #161616" />
            Instagram
            <div class="underline4"></div>
          </a>
        </div>
      </div>
      <div class="signWrap">
        <div class="detailwrap">
          <h1 class="detail">4Bn9ZrQ2</h1>
          <p class="details">samdacs2@gmail.com</p>
          <p class="details">+63 969 696 9696</p>
        </div>
        <div class="mySign">
          <svg
            class="sigvg hoverable"
            width="390.37"
            height="306.3"
            viewBox="156.5 110 395.37 311.3"
          >
            <path
              fill="none"
              stroke="#e7e7e7"
              stroke-width="5"
              id="svg_53"
              d="m161,384c9.16667,-5.83334 10.35379,-6.60562 11.60667,-7.43735c1.32726,-0.8811 2.72375,-1.82251 4.185,-2.8335c1.53897,-1.06476 3.14815,-2.19778 4.815,-3.41849c3.57765,-2.62009 5.44933,-4.07755 7.39867,-5.59866c2.02652,-1.58133 4.11258,-3.24026 6.26549,-4.96201c2.22182,-1.77686 4.50264,-3.61594 6.85051,-5.50201c4.8765,-3.91733 7.40912,-5.93436 9.996,-8c2.64447,-2.11163 5.34602,-4.27151 8.09099,-6.49799c2.80447,-2.27475 5.66069,-4.60941 8.541,-7.03799c5.94507,-5.01266 8.94566,-7.67624 12.00267,-10.40134c3.12051,-2.78171 6.27986,-5.64923 9.498,-8.58151c3.28326,-2.99164 6.621,-6.05576 10.03799,-9.1665c7.03644,-6.40579 10.68341,-9.66736 14.37201,-12.98666c3.72308,-3.35031 7.46078,-6.71933 11.1525,-10.13849c3.67496,-3.40363 7.29739,-6.79968 10.7475,-10.2735c6.69653,-6.74255 9.71326,-10.18515 12.57199,-13.58533c2.77786,-3.30397 5.35751,-6.61325 7.74301,-9.912c2.315,-3.20126 4.46347,-6.37859 6.39301,-9.552c3.67737,-6.04796 5.19,-9.06619 6.612,-12c1.37875,-2.8446 2.60599,-5.66182 3.6825,-8.448c1.04941,-2.71608 1.97833,-5.40863 2.73749,-8.088c1.47763,-5.21518 1.96027,-7.82884 2.41202,-10.40134c0.44516,-2.535 0.78546,-5.04898 1.03799,-7.53151c0.24838,-2.44183 0.41968,-4.84961 0.49799,-7.21649c0.15201,-4.59428 0.08289,-6.82199 0.01068,-9c-0.0708,-2.13512 -0.19135,-4.22879 -0.34201,-6.28351c-0.14819,-2.02133 -0.32782,-4.00966 -0.522,-5.96849c-0.38123,-3.84537 -0.59152,-5.73254 -0.79599,-7.58934c-0.19992,-1.81552 -0.40201,-3.57826 -0.61951,-5.2755c-0.20813,-1.62408 -0.41492,-3.16389 -0.66449,-4.60049c-0.44339,-2.55222 -0.71469,-3.63828 -1.00266,-4.59868c-0.2587,-0.86275 -0.54611,-1.62447 -0.87451,-2.28c-0.29935,-0.59753 -0.62973,-1.1252 -1.00949,-1.56c-0.7139,-0.81735 -1.16296,-1.12102 -1.60135,-1.41867c-0.44183,-0.3 -0.91595,-0.56519 -1.41,-0.81299c-0.50598,-0.25378 -1.0386,-0.48854 -1.59,-0.72301c-1.15717,-0.49207 -1.76663,-0.74664 -2.39865,-0.99066c-0.64368,-0.24852 -1.30493,-0.48016 -1.99051,-0.6405c-0.68982,-0.16132 -1.40488,-0.27994 -2.12549,-0.2355c-1.49133,0.09195 -2.25015,0.42847 -2.99335,0.80934c-0.78214,0.40083 -1.5437,0.93752 -2.27701,1.57199c-0.76718,0.66379 -1.50836,1.42714 -2.18698,2.29201c-1.42776,1.81961 -2.00995,2.89314 -2.59866,3.98933c-0.60501,1.12654 -1.16144,2.3168 -1.69351,3.552c-0.54428,1.26349 -1.05872,2.571 -1.5585,3.912c-1.02393,2.74731 -1.513,4.16266 -1.99734,5.60533c-0.4942,1.472 -0.97223,2.98936 -1.4025,4.56599c-0.44376,1.62611 -0.85849,3.32301 -1.17749,5.106c-0.6792,3.79631 -0.84189,5.85803 -1,8.004c-0.16449,2.23254 -0.25995,4.55295 -0.32251,6.9525c-0.06451,2.47385 -0.08798,5.0183 -0.0975,7.6275c-0.01968,5.3933 -0.00827,8.16783 -0.004,10.98933c0.00436,2.86549 0.01385,5.77203 0.039,8.71649c0.02545,2.97955 0.06067,5.99126 0.129,9.03151c0.1384,6.15659 0.26395,9.26619 0.40134,12.39467c0.13821,3.14722 0.30365,6.31105 0.49051,9.49049c0.18777,3.19527 0.3956,6.40424 0.62549,9.6255c0.46246,6.47984 0.73044,9.73323 0.996,12.99333c0.26578,3.26257 0.54092,6.52271 0.81601,9.77701c0.27423,3.24435 0.5509,6.47437 0.81601,9.68698c0.52438,6.3541 0.76654,9.48816 0.996,12.58533c0.22617,3.05255 0.4361,6.05432 0.62549,8.9985c0.18515,2.87851 0.35434,5.68512 0.49051,8.41351c0.259,5.1897 0.33572,7.64047 0.40134,9.99066c0.06281,2.24982 0.10315,4.39993 0.129,6.45001c0.0246,1.94992 0.0351,3.79999 0.039,5.54999c0.00714,3.20001 0.00455,4.65115 0,6.00934c-0.00427,1.27216 -0.01276,2.46545 -0.039,3.58649c-0.02475,1.05634 -0.05737,2.05539 -0.129,3.0015c-0.13412,1.77173 -0.26172,2.60596 -0.40002,3.40802c-0.13342,0.77365 -0.29224,1.51291 -0.47098,2.21548c-0.17099,0.67209 -0.35568,1.30759 -0.561,1.90051c-0.37613,1.08624 -0.58633,1.56497 -0.80533,2.00266c-0.20779,0.41531 -0.44061,0.80002 -0.71701,1.13852c-0.27615,0.3382 -0.60114,0.65234 -0.987,0.91348c-0.85391,0.57788 -1.41083,0.7879 -2.00934,0.99335c-0.646,0.22174 -1.36545,0.39279 -2.14951,0.48898c-0.84204,0.1033 -1.76007,0.13837 -2.7345,0.039c-2.17517,-0.2218 -3.35413,-0.60117 -4.60532,-1.00266c-1.3428,-0.43091 -2.75229,-0.97336 -4.2435,-1.578c-1.58511,-0.6427 -3.24881,-1.36249 -5.00851,-2.11801c-3.80353,-1.63306 -5.85172,-2.50238 -8.004,-3.39066c-2.24762,-0.92764 -4.59756,-1.8768 -7.04999,-2.84549c-2.54752,-1.00623 -5.19614,-2.03391 -7.95001,-3.0705c-5.79193,-2.18021 -8.84666,-3.27316 -11.98666,-4.39734c-3.21664,-1.15161 -6.50626,-2.31183 -9.855,-3.49051c-3.39793,-1.19598 -6.83803,-2.39981 -10.30501,-3.62549c-6.9894,-2.47095 -10.48512,-3.73413 -13.98,-4.98666c-3.48347,-1.24844 -6.94923,-2.48782 -10.4025,-3.6795c-3.42015,-1.18024 -6.80702,-2.32916 -10.17751,-3.3645c-6.57202,-2.01877 -9.80852,-2.83295 -12.96266,-3.59201c-3.04657,-0.73315 -5.98212,-1.36398 -8.7765,-1.91849c-2.62323,-0.52054 -5.06236,-0.96057 -7.2915,-1.3335c-3.72614,-0.62335 -5.19049,-0.83719 -6.388,-1.00403c-0.94347,-0.13144 -1.65012,-0.23456 -2.133,-0.22498c-0.27342,0.00543 -0.36885,0.12033 -0.243,0.22498c0.62079,0.51624 1.26648,0.68121 1.96933,0.98935c0.81769,0.35849 1.75208,0.73584 2.79449,1.11899c1.12936,0.4151 2.34595,0.83304 3.64951,1.20901c2.77388,0.80002 4.26181,1.10214 5.80533,1.39465c1.61287,0.30566 3.31966,0.56949 5.12851,0.81302c1.92047,0.25858 3.97134,0.4946 6.1635,0.72299c4.85524,0.50586 7.54897,0.75269 10.44,0.99066c3.1026,0.2554 6.43738,0.48456 10.0215,0.6405c3.84666,0.16736 7.97783,0.27631 12.40649,0.2355c9.82458,-0.09052 15.24944,-0.43051 21.02,-0.80933c6.12111,-0.40182 12.58347,-0.9393 19.38599,-1.57202c7.147,-0.66476 14.6297,-1.43307 22.44601,-2.29199c16.64243,-1.82877 25.44922,-2.89075 34.55865,-3.996c9.38495,-1.13867 19.01193,-2.34961 28.84952,-3.64951c10.02783,-1.32504 20.21219,-2.716 30.5145,-4.2345c20.89352,-3.07959 31.39401,-4.8208 41.87332,-6.57465c10.39468,-1.73969 20.62585,-3.52286 30.633,-5.29501c9.72083,-1.72147 19.08133,-3.41708 28.02301,-5.02499c16.35077,-2.94022 23.64459,-4.22607 30.34134,-5.38535c6.11868,-1.0592 11.68549,-2.00305 16.71899,-2.8605c4.5238,-0.77063 8.56281,-1.44754 12.12903,-2.09549c5.83514,-1.06021 8.13788,-1.55432 10.06665,-2.00665c1.59204,-0.37335 2.86383,-0.71408 3.84601,-1.00201c0.72656,-0.21298 1.20648,-0.49759 1.50598,-0.46201c0.08905,0.01059 -0.07947,0.18854 -0.35999,0.40134c-0.38977,0.29568 -0.89911,0.65527 -1.521,1.08151c-0.72705,0.49832 -1.56372,1.05667 -2.51105,1.6665c-2.1889,1.40912 -3.44281,2.17313 -4.77863,2.98532c-1.4035,0.85333 -2.86768,1.72815 -4.37701,2.61899c-1.53595,0.90656 -3.08899,1.81339 -4.64697,2.70901c-3.05682,1.75723 -4.54004,2.58716 -5.98267,3.39066c-1.40179,0.78073 -2.76807,1.53168 -4.09955,2.25452c-1.29395,0.70245 -2.55475,1.37927 -3.78448,2.02948c-2.35834,1.24698 -3.49701,1.83411 -4.61469,2.40802c-1.10565,0.56772 -2.21231,1.12863 -3.32999,1.6875c-1.13565,0.56784 -2.30209,1.1442 -3.50998,1.73248c-2.57071,1.25204 -3.9556,1.918 -5.41867,2.59866c-1.53412,0.71371 -3.15085,1.43954 -4.86301,2.14801c-1.789,0.74026 -3.67307,1.47757 -5.673,2.14801c-4.26053,1.42825 -6.58429,2.01572 -9.01334,2.58932c-2.53702,0.59909 -5.21088,1.13135 -8.022,1.59601c-2.94095,0.48611 -6.0332,0.9122 -9.28198,1.23599c-6.95911,0.6936 -10.69919,0.85492 -14.58801,0.98801c-4.02646,0.13779 -8.18063,0.17569 -12.4425,0.0885c-4.35855,-0.08917 -8.80115,-0.27734 -13.29749,-0.67651c-9.15527,-0.81277 -13.75528,-1.57312 -18.34534,-2.40134c-4.57791,-0.82602 -9.09137,-1.80789 -13.50299,-2.94299c-4.33017,-1.11414 -8.52859,-2.32547 -12.513,-3.75299c-7.51245,-2.69156 -10.86105,-4.33362 -13.97336,-5.98267c-2.95328,-1.56476 -5.65823,-3.23456 -8.09698,-4.9935c-2.31244,-1.66785 -4.41263,-3.38934 -6.207,-5.21851c-3.31146,-3.3757 -4.543,-5.2171 -5.616,-7.00269c-1.03189,-1.71722 -1.84894,-3.49921 -2.427,-5.3205c-0.57443,-1.80981 -0.95584,-3.69839 -1.077,-5.6355c-0.25293,-4.04437 0.05865,-6.19861 0.39334,-8.40533c0.34778,-2.29324 0.87988,-4.64723 1.5795,-7.0425c0.72427,-2.47958 1.60703,-5.00728 2.7045,-7.53749c2.29791,-5.29787 3.82495,-7.91554 5.38132,-10.59866c1.59805,-2.75497 3.33179,-5.52254 5.1225,-8.343c1.82916,-2.88101 3.73346,-5.79367 5.61752,-8.793c3.85794,-6.14166 5.72586,-9.33994 7.58533,-12.59201c1.87805,-3.28458 3.72153,-6.62436 5.56799,-9.98999c1.85492,-3.38101 3.69342,-6.78323 5.56799,-10.17c3.74161,-6.75987 5.67126,-10.08144 7.57867,-13.38135c1.88593,-3.26276 3.75351,-6.47139 5.51999,-9.657c1.72644,-3.11343 3.38733,-6.15926 4.80002,-9.207c2.67502,-5.77107 3.6015,-8.63179 4.39865,-11.38399c0.76315,-2.6349 1.32947,-5.19923 1.78052,-7.65901c0.42877,-2.33826 0.73288,-4.56898 1.0155,-6.66899c0.50992,-3.78872 0.75079,-5.46497 1.01065,-6.984c0.23328,-1.36353 0.466,-2.56116 0.6405,-3.597c0.14539,-0.86314 0.33609,-1.56441 0.2355,-2.067c-0.10223,-0.51082 -0.48621,-0.45988 -0.80267,-0.19467c-0.4588,0.38446 -0.93793,1.02521 -1.47449,1.845c-0.64014,0.97807 -1.30939,2.16218 -1.96951,3.555c-1.55472,3.28028 -2.24625,5.25552 -2.98532,7.39067c-0.79413,2.29418 -1.56128,4.76888 -2.31601,7.40849c-0.79572,2.7829 -1.5737,5.71921 -2.31601,8.80351c-1.57336,6.53743 -2.27884,10.00694 -2.996,13.588c-0.73904,3.69026 -1.44696,7.49847 -2.12549,11.42099c-0.69656,4.02682 -1.36783,8.16373 -1.99051,12.41101c-1.2887,8.79015 -1.83722,13.34424 -2.40799,17.98c-0.57965,4.70792 -1.14008,9.47931 -1.7265,14.29649c-0.59085,4.85349 -1.18524,9.73161 -1.86151,14.61151c-1.35129,9.75089 -2.15671,14.58182 -3.00931,19.37733c-0.84756,4.76729 -1.77084,9.48885 -2.77502,14.15698c-0.99609,4.63065 -2.05283,9.2067 -3.22498,13.707c-2.30746,8.85931 -3.65097,13.1575 -4.98669,17.40134c-1.32123,4.19785 -2.6998,8.32898 -4.07999,12.41251c-1.36652,4.04312 -2.75284,8.03622 -4.07999,12.00751c-2.61865,7.83603 -3.82666,11.73044 -4.99069,15.59198c-1.14877,3.81091 -2.23441,7.5755 -3.28348,11.27551c-1.02679,3.6214 -2.00452,7.16159 -2.96851,10.60049c-1.83545,6.54776 -2.73224,9.63284 -3.59866,12.60266c-0.83627,2.86649 -1.65289,5.63846 -2.41202,8.3385c-0.73926,2.62939 -1.44919,5.20392 -2.052,7.75351c-1.18262,5.00174 -1.60855,7.51105 -2,9.99734c-0.38556,2.44897 -0.69333,4.85818 -0.948,7.20749c-0.24615,2.27087 -0.43918,4.45395 -0.58798,6.5325c-0.27051,3.77829 -0.34299,5.45633 -0.40533,6.99335c-0.05704,1.40637 -0.08002,2.69333 -0.09,3.87l0.00998,1.07666l0.03,0.98666l0.05002,0.90668"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="madewrap">
      <div class="madeby">
        <a class="source">© 2024 Samshh</a>
      </div>
      <div id="footerID">
        <div class="time">
          <p>{{ currentTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mySign {
  padding-left: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signWrap {
  display: flex;
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
  padding-top: clamp(7.5px, 1.7vw, 15px);
}

.ficon {
  font-size: clamp(15px, 1.7vw, 30px);
}

.underline,
.underline1,
.underline2,
.underline3,
.underline4 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #161616;
  transform-origin: left center;
  transform: scaleX(0);
}

.source {
  font-size: clamp(8px, 1.7vw, 16px);
  margin: 0;
  text-decoration: none;
  color: #161616;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: none;
}

.madeby {
  text-align: center;
  display: flex;
  align-items: flex-end;
}

.madewrap {
  width: 50vw;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
}

.timewrap {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.detailwrap {
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.detail {
  font-size: clamp(22.5px, 3.4vw, 45px);
  font-weight: 400px;
  margin: 0;
  text-align: left;
  color: #161616;
}

.details {
  margin: 0;
  font-size: clamp(15px, 1.7vw, 30px);
  font-weight: 400;
  text-align: center;
  padding-top: clamp(7.5px, 1.7vw, 15px);
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  z-index: 1;
  color: #161616;
}

.outterWrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: clamp(7.5px, 1.7vw, 15px);
  padding-top: clamp(22px, 5.7vw, 45px);
}

.innerWrapper {
  padding-top: clamp(22px, 5.7vw, 45px);
  display: flex;
  justify-content: space-between;
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
}

.contwrap {
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
}

.contacts {
  font-size: clamp(22.5px, 3.4vw, 45px);
  font-weight: 400px;
  margin: 0;
  text-align: left;
  color: #161616;
}

.contact {
  margin: 0;
  font-size: clamp(15px, 1.7vw, 30px);
  padding-top: clamp(7.5px, 1.7vw, 15px);
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #161616;
}

.time p {
  font-size: clamp(15px, 1.7vw, 30px);
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #161616;
  margin: 0;
  white-space: nowrap;
}

.contact i {
  margin-right: clamp(5px, 1.7vw, 10px);
}

::selection {
  background-color: #e7e7e7;
  color: #161616;
}

::-moz-selection {
  background-color: #e7e7e7;
  color: #161616;
}

@media (min-width: 1680px) {
  .mySign {
    transform: scale(1.5);
  }
}

@media (max-width: 950px) {
  .outterWrapper {
    padding-top: 0;
  }
  .signWrap {
    display: flex;
    flex-direction: column;
  }

  .mySign {
    transform: scale(1);
    padding-top: 85px;
    padding-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
