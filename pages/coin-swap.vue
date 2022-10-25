<template>
  <div class="">
    <div class="container coin-swap mt-lg-3">
        <div class="row">
          <div class="col-md-6 mt-5 px-4 animate__shakeX animate__animated">
            <h1 >Convert your crypto <br class=""> easily and fast!</h1>
            <p>Receive payments from anywhere, and convert them <br class="d-none d-sm-block">
              to your local currency or other currencies.</p>
            <div class="d-flex mt-4 mb-5">
              <div><img src="~assets/img/Mobile app store badge (3).png" class="img-fluid" alt=""> </div>
              <div class="ml-2"><img src="~assets/img/Mobile app store badge (4).png" class="img-fluid" alt=""> </div>
            </div>
          </div>

          <div class="col-md-6 animate__backInRight animate__animated">
            <img src="~assets/img/coin-swap.png" class="img-fluid" alt="">
          </div>
        </div>
    </div>

    <div class="mt-5 pb-5" style="background: rgba(139, 199, 255, 0.11);">
      <div class="container switch pt-5">
        <h2 class=" pt-3"  style="font-size: 38px">Switch fast between currencies at the <br> best rate</h2>
        <div class="row">
          <div class="col-md-6 px-4 pt-lg-3">
            <div class="mt-5 pt-4">
              <h4 class="">Convert your crypto in seconds</h4>
              <p>Receive payments in BTC, BNB and SOL and convert them instantly.
                Our platform is secure and simple, jsut the way want</p>
            </div>
            <div class="mt-5">
              <h4 class="">No hidden fees. Competitive market rates.</h4>
              <p>Convert your BTC to USDT, MATIC, BNB or any other
                cryptocurrencies within seconds with no hidden fees.</p>
            </div>
            <div class="mt-5">
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
