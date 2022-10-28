<template>
  <div class="">
    <div class="container coin-swap mt-lg-3">
      <div class="row">
        <div class="col-md-6 mt-4  px-lg-4 px-2" style="">
          <h1>Welcome to the World <br class="d-none d-sm-block"> of Global Remittances</h1>
          <p class="pt-2">Boundlesspay is a secure application that turns your cell-phone into a mobile bank.
            Its pre-installed digital wallet and debit card enables storing and spending of digital currencies across merchants globally. In addition, you can access crypto loans, pay utilities, invest in digital currencies and have
            \access to other amazing decentralised finance features in one single app.</p>
          <div class="d-flex mt-4 mb-5">
            <a href="https://play.google.com/store/apps/details?id=com.bitfxt.boundlesspay" target="https://play.google.com/store/apps/details?id=com.bitfxt.boundlesspay"><img src="~assets/img/mobile-app-black.svg" class="img-fluid" alt=""> </a>
            <div href="https://apps.apple.com/ng/app/boundlesspay/id1598547096" target="https://apps.apple.com/ng/app/boundlesspay/id1598547096" class="ml-2"><img src="~assets/img/google-store-black.svg" class="img-fluid" alt=""> </div>
          </div>
        </div>

        <div class="col-md-6 mt-2" >
          <img src="~assets/img/girl-listening-music-from-her-phone.png" style="border-radius: 20px" class="img-fluid" alt="">
        </div>
      </div>
    </div>

    <div class=" pb-5" style="background: rgba(139, 199, 255, 0.11); margin-top: 90px">
      <div class="container switch pt-5 pb-5">
        <div class="row mt-5">

          <div class="col-md-5 ml-5 mt-4 justify-content-start mr-auto "  data-aos="fade-left">
            <img src="~assets/img/Rectangle 232.png"  class="img-fluid" width="500" alt="">
          </div>

          <div class="col-md-6 pt-lg-5 mt-5 px-5">
            <h2>Our Values</h2>

            <p>BOur values are the bedrock for all that we do at Bitnob - And that’s why we have 5 Values that form the basis of
              our identity, and guide our interactions with customers,
              investors, stakeholders and the general public. These values are Low Ego, Ownership, Grit, Integrity and Crazy.</p>
          </div>

        </div>

        <div class="row mt-5 pt-lg-4">

          <div class="col-md-5 mr-4 pt-lg-5 mt-5 justify-content-end ml-auto">
            <h2  data-aos="fade-left" data-aos-delay="20">Our Mission</h2>

            <p class="pt-3"  data-aos="fade-left" data-aos-delay="120">Our mission is to bring deep liquidity, excellent service and better price
              discovery to
              the market. With a focus on customqer satisfaction, we want to provide you <w></w>ith the smoothest trading experience in the market.e</p>
          </div>

          <div class="col-md-6 mt-4 justify-content-end ml-auto ">
            <img src="~assets/img/Rectangle 233.png" class="img-fluid"  width="500" alt="">
          </div>

        </div>
      </div>
    </div>


    <div class="container mb-5" style="background: #000000; border-radius: 14px; margin-top: 100px">
      <div class="row ">
        <div class="col-md-6 px-5 pt-5">
          <span class="text-white">Ready to get started?</span>
          <h2 class="text-white pt-2">Download the App to start exploring</h2>
          <p class="pt-3" style="opacity: 0.5; line-height: 30px; font-size: 16px; color: #FFFFFF;">Explore a world of boundless opportunities with BoundlessPay. Get unlimited
            access to better financial services designed to get you to where you need to be.</p>
          <div class="d-flex mt-4 mb-5">
            <a href="https://play.google.com/store/apps/details?id=com.bitfxt.boundlesspay" target="https://play.google.com/store/apps/details?id=com.bitfxt.boundlesspay"><img src="~assets/img/Mobile-app-store.svg" class="img-fluid" alt=""> </a>
            <a href="https://apps.apple.com/ng/app/boundlesspay/id1598547096" class="ml-2"><img src="~assets/img/app-store.svg" class="img-fluid" alt=""> </a>
          </div>
        </div>
        <div class="col-md-5 pb-5 justify-content-end ml-auto" data-aos="fade-left" data-aos-easing="ease-in-back"
             data-aos-offset="0">
          <img src="~assets/img/Dark-mode.png" alt="" width="390" class="img-fluid img-top mt-n5 ">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coin-swap",

  mounted() {
    AOS.init({
      offset: 100,
      duration: 1000,
    });


  }
}
</script>

<style scoped>
.coin-swap {
  padding-top: 120px;
}

.col-md-6 {

}

.convert-card {
  background: #E3E3E3;
  border-radius: 10px;
}

.switch p {
  color: #000000;

  opacity: 0.6;
  font-size: 16px;
}
</style>
