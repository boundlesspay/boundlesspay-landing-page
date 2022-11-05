<template>
  <div class="">
    <div class="container coin-swap mt-lg-3">
        <div class="row">
          <div class="col-md-6 mt-lg-5 mt-3 px-4" data-aos="fade-up"
               data-aos-duration="2000" data-aos-offset="300"
               data-aos-easing="ease-in-sine">
            <h1 >Convert your crypto <br class="d-none d-sm-block"> easily and fast!</h1>
            <p class="pt-2">Receive payments from anywhere, and convert them <br class="d-none d-sm-block">
              to your local currency or other currencies.</p>
            <div class="d-flex mt-4 mb-5">
              <a href="https://play.google.com/store/apps/details?id=com.bitfxt.boundlesspay" target="https://play.google.com/store/apps/details?id=com.bitfxt.boundlesspay"><img src="~assets/img/mobile-app-black.svg" class="img-fluid" alt=""> </a>
              <div href="https://apps.apple.com/ng/app/boundlesspay/id1598547096" target="https://apps.apple.com/ng/app/boundlesspay/id1598547096" class="ml-2"><img src="~assets/img/google-store-black.svg" class="img-fluid" alt=""> </div>
            </div>
          </div>

          <div class="col-md-6 ">
            <img src="~assets/img/coin-swap.png" class="img-fluid" alt="">
          </div>
        </div>
    </div>

    <div class="mt-5 pb-5" style="background: rgba(139, 199, 255, 0.11);">
      <div class="container switch pt-5 pb-5">
        <h2 class=" pt-3"  style="font-size: 38px">Switch fast between currencies at the <br> best rate</h2>
        <div class="row">
          <div class="col-md-6 px-4 pt-lg-5 mt-3 ">
            <div class="mt-5 pt-4" data-aos="fade-left" data-aos-delay="20">
              <h4 class="">Convert your crypto in seconds</h4>
              <p>Receive payments in BTC, BNB and SOL and convert them instantly.
                Our platform is secure and simple, jsut the way want</p>
            </div>
            <div class="mt-5" data-aos="fade-left" data-aos-delay="150">
              <h4 class="">No hidden fees. Competitive market rates.</h4>
              <p>Convert your BTC to USDT, MATIC, BNB or any other
                cryptocurrencies within seconds with no hidden fees.</p>
            </div>
            <div class="mt-5" data-aos="fade-left" data-aos-delay="300">
              <h4 class="">Seamless funding and withdrawal</h4>
              <p>We offer multiple payment options to fund your account for different currencies.
                You can also withdraw to your virtual foreign accounts or bank accounts.</p>
            </div>
          </div>

          <div class="col-md-5 mt-4 justify-content-end ml-auto">
            <img src="~assets/img/switch-fast.png" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5 pt-5">
      <h2 class=""  style="font-size: 37px">How to convert crypto in <br class="d-none d-sm-block"> seconds</h2>
      <p>Opening an account has never been this seamless</p>

      <div class="row mt-5">
        <div class="col-md-4">
        <div class="">
          <img src="~assets/img/Group 298.png" class="img-fluid pt-2" width="65" alt="">
          <h5 class="pt-4">Enter the amount</h5>
          <p class="pt-2">Input the amount you want to convert <br> into the input box</p>
        </div>
      </div>

        <img src="~assets/img/line.svg" class="img-fluid pt-2 center-img d-none d-sm-block" width="300" alt="">

        <div class="col-md-4 top">
          <div class="">
            <img src="~assets/img/Group 299.png" class="img-fluid pt-2" width="65" alt="">
            <h5 class="pt-4 ">Select your crypto</h5>
            <p class="pt-2">Input the amount you want to convert <br> into the input box</p>
          </div>
        </div>

        <img src="~assets/img/line.svg" class="img-fluid pt-2 center-img1 d-none d-sm-block" width="300" alt="">

        <div class="col-md-4 top">
          <div class="">
            <img src="~assets/img/Group 300.png" class="img-fluid pt-2" width="65" alt="">
            <h5 class="pt-4 font-weight-bold">Complete conversion</h5>
            <p class="pt-2">Input the amount you want to convert <br> into the input box</p>
          </div>
        </div>
      </div>


      <div class="col-md-4 mt-4 ml-n2">
        <nuxt-link to="/">
          <button class="button btn w-50 mb-2 mt-1 text-white" style="background: #003399; border-radius: 4px;">Get started  <img src="~assets/img/check-white.svg" class="img-fluid ml-2" alt=""> </button>
        </nuxt-link>
      </div>
    </div>

    <downloadApp />
  </div>
</template>

<script>
import downloadApp from "../components/downloadApp";

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
