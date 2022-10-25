<template>
  <div class="">
    <div class="container coin-swap mt-lg-3">
      <div class="row">
        <div class="col-md-6 mt-5 px-4">
          <h1>Easily and quickly transfer money to <br class="d-none d-sm-block"> anyone</h1>
          <p>Send money online from Africa to the UK and other <br class="d-none d-sm-block"> part of the world with ease. </p>
          <div class="d-flex mt-4 mb-5">
            <div><img src="~assets/img/Mobile app store badge (3).png" class="img-fluid" alt=""> </div>
            <div class="ml-2"><img src="~assets/img/Mobile app store badge (4).png" class="img-fluid" alt=""> </div>
          </div>
        </div>

        <div class="col-md-6 animate__animated animate__flipInX">
          <img src="~assets/img/transfer-money.png" class="img-fluid" alt="">
        </div>
      </div>
    </div>

    <div class="mt-5 pb-5" style="background: rgba(139, 199, 255, 0.11);">
      <div class="container switch pt-5">
        <h2 class="font-weight-bold pt-3 ml-2" style="font-size: 37px">Free crypto wallets for all your <br class="d-none d-sm-block"> international transactions.</h2>
        <div class="row">
          <div class="col-md-6 px-4 ">
            <div class="mt-5 ">
              <h4 class="font-weight-bold">Get paid by foreign employers and clients</h4>
              <p>Use your crypto wallet to receive USDT and other cryptos.
                Cash out to any bank account globally like a local.</p>
            </div>
            <div class="mt-5">
              <h4 class="font-weight-bold">Instant currency exchange</h4>
              <p>Enjoy quick and efficient online foreign exchange transactions.
                Say goodbye to bank queues and disappointments.</p>
            </div>
            <div class="mt-5">
              <h4 class="font-weight-bold">Send and receive money quickly</h4>
              <p>Enjoy fast global money transfer with your easy to use wallet on BoundlessPay</p>
            </div>
          </div>

          <div class="col-md-5 mt-4 justify-content-end ml-auto">
            <img src="~assets/img/free-crypto.png" class="img-fluid" alt="">
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

        <img src="~assets/img/line.svg" class="img-fluid pt-2 center-img" width="300" alt="">

        <div class="col-md-4 top">
          <div class="h-100">
            <img src="~assets/img/Group 299.png" class="img-fluid pt-2" width="65" alt="">
            <h4 class="pt-4 font-weight-bold">Complete KYC verification</h4>
            <p class="pt-2">Verify your identity using your government-issued ID</p>
          </div>
        </div>

        <img src="~assets/img/line.svg" class="img-fluid pt-2 center-img1" width="300" alt="">

        <div class="col-md-4 top" >
          <div class=" h-100">
            <img src="~assets/img/Group 300.png" class="img-fluid pt-2" width="65" alt="">
            <h4 class="pt-4 font-weight-bold">Fund and send</h4>
            <p class="pt-2">Request your crypto virtual cards in few minutes and start spending on your favorites websites at the best rates.</p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mt-4 ml-n2">
        <nuxt-link to="/schools">
          <button class="button btn w-50 mb-2 mt-1 text-white" style="background: #003399; border-radius: 4px;">Get started  <img src="~assets/img/check-white.svg" class="img-fluid ml-2" alt=""> </button>
        </nuxt-link>
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
            <div><img src="~assets/img/Mobile-app-badge.png" class="img-fluid" alt=""> </div>
            <div class="ml-2"><img src="~assets/img/app-store.png" class="img-fluid" alt=""> </div>
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
