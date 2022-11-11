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
            <a href="https://apps.apple.com/ng/app/boundlesspay/id1598547096" target="https://apps.apple.com/ng/app/boundlesspay/id1598547096" class="ml-2"><img src="~assets/img/google-store-black.svg" class="img-fluid" alt=""> </a>
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

          <div class="col-md-5 ml-lg-5 mt-4 justify-content-start mr-auto "  data-aos="fade-left">
            <img src="~assets/img/Rectangle 232.png"  class="img-fluid" width="500" alt="">
          </div>

          <div class="col-md-6 pt-lg-5 mt-5 px-4 px-lg-5">
            <h2 class="mt-lg-4 pt-3"  >Our Mission</h2>

            <p class="pt-3"  data-aos="fade-left" data-aos-delay="120">Our vision is to Build a top digital payment solution company that will eliminate barrier in crypto-fiat
              transactions and made Blockchain based payment accessible to everyone globally. </p>

          </div>

        </div>

        <div class="row mt-5 pt-lg-4">

          <div class="col-md-5 mr-4 pt-lg-5 mt-5 justify-content-end ml-auto">
            <h2 class="mt-lg-4 pt-3" data-aos="fade-left" data-aos-delay="20">Our Values</h2>

            <p>Our Mission is to achive financial inclusion of the
              unbanked and expose the banked to opportunities in the Blockchain industry. </p>
          </div>

          <div class="col-md-6 mt-4 justify-content-end ml-auto ">
            <img src="~assets/img/Rectangle 233.png" class="img-fluid"  width="500" alt="">
          </div>

        </div>
      </div>
    </div>


    <downloadApp />
  </div>
</template>

<script>
import downloadApp from "../components/downloadApp.vue";
export default {
  name: "coin-swap",
  components: {downloadApp},

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
