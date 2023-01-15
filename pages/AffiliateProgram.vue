<template>
  <div>
    <div class="container px-5 coin-swap mt-lg-3">
      <div class="row ">
        <div class="col-md-6 mt-5 pt-lg-5 px-lg-4" data-aos="fade-up"
             data-aos-duration="2000" data-aos-offset="300"
             data-aos-easing="ease-in-sine">
          <h1>BoundlessPay Affiliate <br  class="d-none d-sm-block"> Program </h1>
          <p>Earn up to $1000 monthly plus 40% of your  referral’s <br  class="d-none d-sm-block"> trading fees</p>
          <div class="d-flex mt-4 mb-5">
            <a href="#">
              <button class="btn text-white" style="background: #000;border-radius: 4px;">Get rewards</button>
            </a>
            <a href="#"  class="ml-2">
              <button class="btn" style="border: 0.5px solid #000000; border-radius: 4px;">
                Learn more
              </button>
            </a>
          </div>
        </div>

        <div class="col-md-6 mt-4">
          <img src="~assets/img/affilate-img.png" class="img-fluid" alt="">
        </div>
      </div>
    </div>

    <div class="container mt-5 pt-4">
      <div class="row justify-content-center mx-auto">
        <h2 class="text-center mb-5 pb-lg-3">Benefits of Participating in the Program</h2>
        <div class="col-md-4 px-5">
          <div class="text-left">
            <img src="~assets/img/become-an-affilate.png" class="img-fluid" alt="">

            <h5 class="pt-4">Become an affiliate</h5>
            <p style="color: #000000; opacity: 0.6; font-size: 15px">Invite 10 active users to become an affiliate and start earning fees</p>
          </div>
        </div>

        <div class="col-md-4 px-5">
          <div class="text-left">
            <img src="~assets/img/promote.png" class="img-fluid" alt="">

            <h5 class="pt-4">Promote BoundlessPay</h5>
            <p style="color: #000000; opacity: 0.6; font-size: 15px">Link to BoundlessPay in articles, blog posts, and videos, place ads on your websites</p>
          </div>
        </div>

        <div class="col-md-4 px-5">
          <div class="text-left">
            <img src="~assets/img/earn-trading.png" class="img-fluid" alt="">

            <h5 class="pt-4">Earn trading fees</h5>
            <p style="color: #000000; opacity: 0.6; font-size: 15px">New users sign up through your invitation link, you’ll start earning their trading fees
            </p>
          </div>
        </div>
      </div>
    </div>

    <div style="background: #000; margin-top: 90px">
      <div class="container p-5">
        <div class="row px-4">
          <div class="col-md-6 pt-5">
            <h3 class="text-white">Reasons to become a <br> BoundlessPay affiliate</h3>
          </div>

          <div class="col-md-6 pt-4">
            <div class="d-flex">
              <div>
                <img src="~assets/img/green-check.svg" class="img-fluid" alt="">
              </div>
              <p class="ml-2 text-white">Earn commissions by inviting or recalling</p>
            </div>

            <div class="d-flex">
              <div>
                <img src="~assets/img/green-check.svg" class="img-fluid" alt="">
              </div>
              <p class="ml-2 text-white">Detailed data reports</p>
            </div>

            <div class="d-flex">
              <div>
                <img src="~assets/img/green-check.svg" class="img-fluid" alt="">
              </div>
              <p class="ml-2 text-white">Hourly rewards distribution</p>
            </div>

            <div class="d-flex">
              <div>
                <img src="~assets/img/green-check.svg" class="img-fluid" alt="">
              </div>
              <p class="ml-2 text-white">Lifetime commission rebate</p>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>

<!--    <div class="container mt-5 pt-lg-5">-->
<!--      <div class="row">-->
<!--        <div class="col-md-5">-->
<!--          <h2>Benefits of participating in the Program</h2>-->

<!--          <img src="~assets/img/benefits.png" class="img-fluid ml-lg-n5 ml-n3" alt="">-->
<!--        </div>-->

<!--        <div class="col-md-6 mt-5 pt-lg-5 ">-->
<!--          <div class="d-flex mt-3 benefit">-->
<!--            <img src="~assets/img/checks.svg" class="img-fluid" alt="">-->

<!--            <p class="ml-3 pt-3">Earn a $1 one-time commission when your referral subscribes to a virtual card.</p>-->
<!--          </div>-->

<!--          <div class="d-flex benefit">-->
<!--            <img src="~assets/img/checks.svg" class="img-fluid" alt="">-->

<!--            <p class="ml-3 pt-3">Affiliate referral link that allows you to earn 40% commission from the total fees charged from your referrals.</p>-->
<!--          </div>-->

<!--          <div class="d-flex benefit">-->
<!--            <img src="~assets/img/checks.svg" class="img-fluid" alt="">-->

<!--            <p class="ml-3 pt-3">The top 20 affiliates will share from a minimum pool of $1000 monthly (T&C applied)</p>-->
<!--          </div>-->

<!--          <div class="d-flex benefit">-->
<!--            <img src="~assets/img/checks.svg" class="img-fluid" alt="">-->

<!--            <p class="ml-3 pt-3"> Become part of Nexus Universe, a core community of like-minded affiliates across Africa.</p>-->
<!--          </div>-->

<!--          <div class="d-flex  benefit">-->
<!--            <img src="~assets/img/checks.svg" class="img-fluid" alt="">-->

<!--            <p class="ml-3 pt-3">Access to Boundlesspay branded items (polos and other gift packs)</p>-->
<!--          </div>-->

<!--          <div class="d-flex benefit">-->
<!--            <img src="~assets/img/checks.svg" class="img-fluid" alt="">-->

<!--            <p class="ml-3 pt-3">The fastest way to get the latest information about BoundlessPay!</p>-->
<!--          </div>-->

<!--        </div>-->
<!--      </div>-->
<!--    </div>-->



    <downloadApp />

  </div>
</template>

<script >
import downloadApp from "../components/downloadApp.vue";
export default {
  components: {downloadApp},
  head: {
    link: [
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'}
    ],
  },

  mounted() {

    AOS.init({
      offset: 100,
      duration: 1000,
    });

  }
}
</script>

<style>
.coin-swap {
  padding-top: 120px;
}

.benefit{
  padding: 0px 0px 12px;
}
</style>
