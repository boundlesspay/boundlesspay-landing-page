<template>
  <div class="">
    <div class="container coin-swap mt-lg-3">
      <div class="row">
        <div class="col-md-6 mt-lg-5 mt-3 px-lg-4 px-2" data-aos="fade-up"
             data-aos-duration="2000" data-aos-offset="300"
             data-aos-easing="ease-in-sine">
          <h1>Easily and quickly  transfer <br class="d-none d-sm-block"> money to  anyone</h1>
          <p class="pt-2">Send money online from Africa to the UK and other <br class="d-none d-sm-block"> part of the world with ease. </p>
          <div class="d-flex mt-4 mb-5">
            <a href="https://play.google.com/store/apps/details?id=com.bitfxt.boundlesspay" target="https://play.google.com/store/apps/details?id=com.bitfxt.boundlesspay"><img src="~assets/img/mobile-app-black.svg" class="img-fluid" alt=""> </a>
            <a href="https://apps.apple.com/ng/app/boundlesspay/id1598547096" target="https://apps.apple.com/ng/app/boundlesspay/id1598547096" class="ml-2"><img src="~assets/img/google-store-black.svg" class="img-fluid" alt=""> </a>
          </div>
        </div>

        <div class="col-md-6">
          <img src="~assets/img/transfer-money.png" class="img-fluid" alt="">
        </div>
      </div>
    </div>

    <div class="mt-5 pb-5" style="background: rgba(139, 199, 255, 0.11);">
      <div class="container switch pt-5 pb-5">
        <h2 class="font-weight-bold pt-3 ml-lg-2" style="font-size: 37px">Free crypto wallets for all your <br class="d-none d-sm-block"> international transactions.</h2>
        <div class="row">
          <div class="col-md-6 px-4 pt-5">
            <div class="mt-5 pt-5" data-aos="fade-left" data-aos-delay="20">
              <h4 class="font-weight-bold">Get paid by foreign employers and clients</h4>
              <p>Use your crypto wallet to receive USDT and other cryptos.
                Cash out to any bank account globally like a local.</p>
            </div>
            <div class="mt-5" data-aos="fade-left" data-aos-delay="150">
              <h4 class="font-weight-bold">Instant currency exchange</h4>
              <p>Enjoy quick and efficient online foreign exchange transactions.
                Say goodbye to bank queues and disappointments.</p>
            </div>
            <div class="mt-5"  data-aos="fade-left" data-aos-delay="300">
              <h4 class="font-weight-bold">Send and receive money quickly</h4>
              <p>Enjoy fast global money transfer with your easy to use wallet on BoundlessPay</p>
            </div>
          </div>

          <div class="col-md-5 mt-4 justify-content-end ml-auto">
            <img src="~assets/img/free-crypto.png" class="img-fluid" alt="">
          </div>
        </div>
      </div>

      <div class="container mt-5 pt-4">
        <h2 class="text-center" style="font-size: 38px;">A smarter alternative for cross <br> border payments</h2>
        <p class="text-center pt-2">Settle from markets all over the world, in under 24 hours, directly into your BoundlessPay account.</p>

          <div class="row mt-5 pt-4 mb-4">
          <div class="col-md-3">
            <div>
              <img src="~assets/img/Frame 331.svg" class="img-fluid" width="150">
            </div>
          </div>
          <div class="col-md-3 top">
            <div>
              <img src="~assets/img/Group 332.svg" class="img-fluid"  width="145">
            </div>
          </div>
          <div class="col-md-3 top">
            <div>
              <img src="~assets/img/Group 333.svg" class="img-fluid"  width="210">
            </div>
          </div>

          <div class="col-md-3 top">
            <div>
              <img src="~assets/img/Group 334.svg" class="img-fluid" width="230">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5 pt-5">
      <h2 class="font-weight-bold" style="font-size: 37px">How to send money globally <br class="d-none d-sm-block"> using BoundlessPay</h2>
      <p>Opening an account has never been this seamless</p>

      <div class="row mt-5">
        <div class="col-md-4 ">
          <div class="h-100">
            <img src="~assets/img/Group 298.png" class="img-fluid pt-2" width="65" alt="">
            <h4 class="pt-4 font-weight-bold">Register in minutes</h4>
            <p class="pt-2">Sign up online, or in our app with your email address</p>
          </div>
        </div>

        <img src="~assets/img/line.svg" class="img-fluid pt-2 center-img d-none d-sm-block" width="300" alt="">

        <div class="col-md-4 top">
          <div class="h-100">
            <img src="~assets/img/Group 299.png" class="img-fluid pt-2" width="65" alt="">
            <h4 class="pt-4 font-weight-bold">Complete KYC verification</h4>
            <p class="pt-2">Verify your identity using your government-issued ID</p>
          </div>
        </div>

        <img src="~assets/img/line.svg" class="img-fluid pt-2 center-img1 d-none d-sm-block" width="300" alt="">

        <div class="col-md-4 top" >
          <div class=" h-100">
            <img src="~assets/img/Group 300.png" class="img-fluid pt-2" width="65" alt="">
            <h4 class="pt-4 font-weight-bold">Fund and send</h4>
            <p class="pt-2">Request your crypto virtual cards in few minutes and start spending on your favorites websites at the best rates.</p>
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
