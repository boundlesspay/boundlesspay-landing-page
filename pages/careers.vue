<template>
<div class="mt-5 pt-5">
  <div class="text-center pt-5">
    <h2 style="font-size: 38px;">We’re a team of ambitious, diverse, <br>
      and passionate people</h2>
    <p class="pt-2">Join us in building the future of banking and payments.</p>
  </div>

    <div class="my-4 pt-2 d-flex justify-content-center mx-auto">
      <button style="background: #003399; border-radius: 4px;" class="text-white col-lg-1 w-50 btn">join</button>
    </div>

    <div class="container mt-5 pt-3 px-lg-5">
      <div class="px-lg-5">
        <img src="~assets/img/careers-img.png" class="img-fluid" alt="">

        <p class="mt-5">
          We're a diverse, and ambitious team of almost 150 people, based across the UK, Europe and South Africa. We are all hugely
          passionate about making banking and payments work for crypto, and most importantly about building a solution that works for our customers.
        </p>

        <p class="mt-5">
          You’ll be joining BoundlessPay at a pivotal time in our journey. We’ve just closed $40 million in a Series A funding round,
          led by Tiger Global Management. This will enable us to scale like never before, allowing us to supercharge our growth and product development.
        </p>

        <p class="mt-5">
          We expect to expand into even more markets over the next few years, and, by joining now you’ll be coming on board
          while we’re still in the early stages of our mission,
          where you will have considerable influence over how we shape the future of crypto banking and payments globally.
        </p>
      </div>


  </div>

  <h2 style="font-size: 38px;" class="mt-5 pt-4 text-center">What our people say</h2>

  <div class="container p-5 mt-5 " style="background: rgba(217, 217, 217, 0.29);">
    <carousel :autoplay="true" :nav="false" :items="5"  :loop="true">


      <div class="col-12">
        <slide>
          <div class="row">
            <div class="col-md-5 ml-4">
              <img src="~assets/img/Rectangle 256.png" class="img-fluid" width="450" alt="">
            </div>
            <div class="col-md-6 pt-5 px-lg-4">
              <p>
                “Having started working for BoundlessPay in the early start-up days, I could not be more proud
                to help grow this world class team. BoundlessPay is not just a team, it is a group of people who
                value each other, culture and growth above everything else. It is by putting it's people first that
                BoundlessPay somehow makes the unimaginable a reality -- and I could not be more excited to see what comes next.”
              </p>

              <h5 style="color: #003399;" class="pt-4">King-Son Ariweriokuma</h5>
              <span>Chief Marketing Officer</span>
            </div>
          </div>
        </slide>
      </div>



    </carousel>
  </div>

  <div class="d-flex justify-content-center mx-auto mt-5">
    <button class="btn text-white" style="background: #003399; border-radius: 4px;">View Open Positions</button>
  </div>

  <div class="container mt-5 pt-5 everything">
    <h2 class="text-center pt-4">Everything you need to succeed</h2>

    <div class="row mt-5 pt-2">
      <div class="col-md-3 top">
        <div>
          <img src="~assets/img/Group 340.svg" class="img-fluid" width="40" alt="">
          <h5 class="my-3 font-weight-bold [t-2">Do your best work</h5>
          <p>An open and creative
            environment where you can help us define the future of BoundlessPay,
            its culture and opportunity in the market.</p>
        </div>
      </div>

      <div class="col-md-3 top">
        <div>
          <img src="~assets/img/Group 340.svg" class="img-fluid" width="40" alt="">
          <h5 class="my-3 font-weight-bold pt-2">Work flexibly</h5>
          <p>Work remotely or join us at one of our fantastic offices in London or Cape Town.</p>
        </div>
      </div>

      <div class="col-md-3 top">
        <div>
          <img src="~assets/img/Group 340.svg" class="img-fluid" width="40" alt="">
          <h5 class="my-3 font-weight-bold pt-2">Continuous learning</h5>
          <p>Curiosity is our compass. We welcome experimentation, failure, and the courage to try again.
            We invest in many kinds of trainings and workshops to make sure our team is always building new skills.</p>
        </div>
      </div>

      <div class="col-md-3 top">
        <div>
          <img src="~assets/img/Group 340.svg" class="img-fluid" width="40" alt="">
          <h5 class="my-3 font-weight-bold pt-2">Best</h5>
          <p>Among other benefits, we offer a retirement contribution, equity,
            world-class healthcare coverage, generous annual paid vacation days
            to all full-time employees.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-5 pt-4">
    <div class="row">
      <div class="col-md-5">
        <img src="~assets/img/Rectangle 257.png" class="img-fluid" alt="">
      </div>

      <div class="col-md-6 ml-lg-5 ml-3 mt-5 px-lg-3 px-2">
        <h2>Join us</h2>
        <p class="pt-3 " style="line-height: 46px;">At BoundlessPay, we believe in equal opportunities for all.
          We’re growing fast and have a number of exciting opportunities across the business -
          from Product, Engineering, Operations to Sales.
          Check them out to see if there is a role for you.</p>

        <button class="text-white mt-3 btn" style="background: #003399; border-radius: 4px;">View open positions</button>
      </div>
    </div>
  </div>

  <downloadApp />
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import downloadApp from "../components/downloadApp.vue";

export default {
  name: "careers",
  components: {
    Carousel,
    Slide,
    downloadApp
  },

  mounted() {

    AOS.init({
      offset: 100,
      duration: 1000,
    });
  }
}
</script>

<style scoped>
.everything p{
  font-size: 16px;
}
</style>
