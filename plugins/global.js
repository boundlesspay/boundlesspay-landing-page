import Vue from 'vue';
import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin.js";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import 'animate.css';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
// gsap.registerPlugin(PixiPlugin, MotionPathPlugin);




