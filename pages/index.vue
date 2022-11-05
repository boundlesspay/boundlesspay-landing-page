<template>
 <div>
   <section class="home-top">
     <div class="container pb-5">
       <div class="row">
<!--         animate__delay-2s-->
         <div class="col-md-7 mt-lg-5 content"  data-aos="fade-up"
              data-aos-duration="2000" data-aos-offset="300"
              data-aos-easing="ease-in-sine">

           <h1 class="text-white" style="font-size: 57px"><span class="ityped"></span><br>
            Seamlessly
           </h1>

           <p class="text-white pt-2 anim1" style="font-size: 20px">A digital banking application for cross border collections, <br> payments and settlements</p>
           <div class="d-flex mt-4 mb-5 anim1">
             <a href="https://play.google.com/store/apps/details?id=com.bitfxt.boundlesspay" target="https://play.google.com/store/apps/details?id=com.bitfxt.boundlesspay"><img src="~assets/img/Mobile-app-store.svg" class="img-fluid" alt=""> </a>
             <a href="https://apps.apple.com/ng/app/boundlesspay/id1598547096" target="https://apps.apple.com/ng/app/boundlesspay/id1598547096" class="ml-2"><img src="~assets/img/app-store.svg" class="img-fluid" alt=""> </a>
           </div>
         </div>

         <div class="col-md-5 wrapper">
           <div class="swirl mt-n2">
             <img src="~assets/img/landing-page-img.png" class="ml-lg-n4 mt-lg-n4 img-mobile" width="550" alt="">
             <img src="~assets/img/underbackground.png" class="under-img" alt="">
           </div>
         </div>
       </div>
     </div>
   </section>


   <div class="container mt-4 pt-3">
<!--     <div class="global text-center ml12">GLOBAL REMITTANCES</div>-->
     <h2 class="text-center font-weight-bold mt-3" style="font-size: 39px"> A single platform for all your financial needs </h2>

     <div class="row mt-4 pt-3">
       <div class="col-md-4 h-100"  data-aos="zoom-in" data-aos-delay="50">
          <div class="card-box pt-5 pb-5 px-5 text-left h-100">
            <img src="~assets/img/secure-crypto.svg" class="img-fluid" alt="">
            <h4 class=" pt-4 pl-1">Secure crypto cards</h4>
            <div class="sub-text pt-1">Track and manage your crypto portfolio from any device you own.</div>
            <div class="mt-4">
              <nuxt-link to="/secure-crypto-cards"  style="text-decoration: none">
                <button class="button btn-4 w-100 mb-2 py-2 ">Learn more  <img src="~assets/img/arrow-left.svg" class="img-fluid ml-2" alt=""> </button>
              </nuxt-link>
            </div>
          </div>
       </div>

       <div class="col-md-4 h-100" data-aos="zoom-in" data-aos-delay="250">
         <div class="card-box pt-5 pb-5 px-5 text-left h-100">
           <img src="~assets/img/coin-swap.svg" class="img-fluid" alt="">
           <h4 class=" pt-4 pl-1">Currency swap</h4>
           <div class="sub-text pt-2">Swap from one cryptocurrencies to another seamlessly with ease and peace of mind.</div>
           <div class="mt-4">
             <nuxt-link to="/coin-swap" style="text-decoration: none" >
               <button class="button btn-4 w-100 mb-2 py-2 ">Learn more  <img src="~assets/img/arrow-left.svg" class="img-fluid ml-2" alt=""> </button>
             </nuxt-link>
           </div>
         </div>
       </div>

       <div class="col-md-4 h-100" data-aos="zoom-in" data-aos-delay="350">
         <div class="card-box pt-5 pb-5 px-5 text-left h-100">
           <img src="~assets/img/borderless-payment.svg" class="img-fluid" alt="">
           <h4 class=" pt-4 pl-1">Money transfer</h4>
           <div class="sub-text pt-2">Send money directly to any bank account from anywhere globally.</div>
           <div class="mt-4">
             <nuxt-link to="/transfer-money"  style="text-decoration: none">
               <button class="button btn-4 w-100 py-2 mb-2">Learn more  <img src="~assets/img/arrow-left.svg" class="img-fluid ml-2" alt=""> </button>
             </nuxt-link>

           </div>
         </div>
       </div>
     </div>
   </div>

   <div class="container " style="background: #131313; border-radius: 14px; margin-top: 100px">
      <div class="row ">
        <div class="col-md-6 pt-5 px-lg-5 m-4">
          <h1 class="text-white " style="font-size: 39px">A world with no Bounds</h1>
          <p class="pt-3 sub-textt" style="opacity: 0.6; line-height: 30px; font-size: 16px; color: #FFFFFF;">Boundlesspay is a safe app that turns your phone into a mobile bank. Its pre-installed digital wallet
            and debit card allows for the storage and spending of digital currencies across merchants worldwide. In addition, you can use one app to access crypto loans,
            pay utilities, invest in digital currencies, and access other unique decentralized finance features.</p>
        </div>
        <div class="col-md-5">
          <img src="~assets/img/bond.png" alt="" class=" img">
        </div>
      </div>
   </div>

<!--   <div class="container mt-5">-->
<!--     <div class="global text-center pt-2">CRYPTO</div>-->
<!--     <h2 class="text-center font-weight-bold " style="font-size: 38px">Manage your Portfolio</h2>-->
<!--   </div>-->

<!--   <div class="container px-5 pt-4 mt-5 mb-5 home-page" style="background: #EEEEEE; border-radius: 20px;" id="tabs">-->
<!--     <ul class="row pt-3" >-->
<!--       <li><a href="#tab1" class="buy" >Buy & Sell crypto</a></li>-->
<!--       <li><a href="#tab2" class="buy">Send & Recieve crypto</a></li>-->
<!--       <li><a href="#tab3" class="buy" >Get realtime price updates</a></li>-->
<!--       <li><a href="#tab4" class="buy" >Enjoy secure escrow services</a></li>-->
<!--     </ul>-->


<!--     <div  id="tab1">-->
<!--       <div class="row">-->
<!--         <div class="col-md-6">-->
<!--           <div class="pl-3 mt-5 pt-5">-->
<!--             <h2 class="pt-4" style="font-size: 35px">Buy & Sell Crypto</h2>-->
<!--             <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>-->
<!--             <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.-->
<!--               They get cash flow on the accounts for up to 12 months,-->
<!--               all seamlessly without writing a single line of code</p>-->
<!--           </div>-->
<!--         </div>-->
<!--         <div class="col-md-6" >-->
<!--           <img src="~assets/img/crypto-img.png" class="buy-sell" width="400" alt="" >-->
<!--         </div>-->
<!--       </div>-->
<!--     </div>-->

<!--     <div  id="tab2">-->
<!--       <div class="row">-->
<!--         <div class="col-md-6">-->
<!--           <div class="pl-3 mt-5 pt-5">-->
<!--             <h2 style="font-size: 35px" class="pt-4">Send & Recieve Crypto</h2>-->
<!--             <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>-->
<!--             <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.-->
<!--               They get cash flow on the accounts for up to 12 months,-->
<!--               all seamlessly without writing a single line of code</p>-->
<!--           </div>-->
<!--         </div>-->
<!--         <div class="col-md-6 ">-->
<!--           <img src="~assets/img/send-recieve.png" class="buy-sell" width="430" alt="" >-->
<!--         </div>-->
<!--       </div>-->
<!--     </div>-->

<!--     <div  id="tab3">-->
<!--       <div class="row">-->
<!--         <div class="col-md-6">-->
<!--           <div class="pl-3 mt-5 pt-5">-->
<!--             <h2 style="font-size: 35px" class="pt-4">Get Realtime Updates</h2>-->
<!--             <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>-->
<!--             <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.-->
<!--               They get cash flow on the accounts for up to 12 months,-->
<!--               all seamlessly without writing a single line of code</p>-->
<!--           </div>-->
<!--         </div>-->
<!--         <div class="col-md-6">-->
<!--           <img src="~assets/img/ReaLTIME UPDATES .png" class="buy-sell" width="400" alt="" >-->
<!--         </div>-->
<!--       </div>-->
<!--     </div>-->

<!--     <div  id="tab4">-->
<!--       <div class="row">-->
<!--         <div class="col-md-6">-->
<!--           <div class="pl-3 mt-5 pt-5">-->
<!--             <h2 class="pt-4" style="font-size: 35px">Enjoy secure escrow services</h2>-->
<!--             <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>-->
<!--             <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.-->
<!--               They get cash flow on the accounts for up to 12 months,-->
<!--               all seamlessly without writing a single line of code</p>-->
<!--           </div>-->
<!--         </div>-->
<!--         <div class="col-md-6" >-->
<!--           <img src="~assets/img/escrow services.png" class="buy-sell" width="400" alt="" >-->
<!--         </div>-->
<!--       </div>-->
<!--     </div>-->
<!--   </div>-->

<!--   <div class="container px-5 pt-5 mt-5 mb-5" style="background: #EEEEEE; border-radius: 20px;">-->
<!--     <div class="row">-->
<!--       <h6 class="buy" @click="walletAddressForm" :class="[showWalletAddressForm ? 'active' : '']">Buy & Sell crypto</h6>-->
<!--       <h6 class="buy" @click="emailForm" :class="[showEmailForm ? 'active' : '']">Send & Recieve crypto</h6>-->
<!--       <h6 class="buy" @click="phoneForm" :class="[showPhoneForm ? 'active' : '']">Get realtime price updates</h6>-->
<!--       <h6 class="buy" @click="SecurityForm" :class="[showSecurityForm ? 'active' : '']" >Enjoy secure escrow services</h6>-->

<!--       <div class="col-md-6" v-if="showWalletAddressForm">-->
<!--          <div class="pl-3 mt-5">-->
<!--            <h2 class="" style="font-size: 35px">Buy & Sell Crypto</h2>-->
<!--            <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>-->
<!--            <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.-->
<!--              They get cash flow on the accounts for up to 12 months,-->
<!--              all seamlessly without writing a single line of code</p>-->
<!--          </div>-->
<!--       </div>-->

<!--       <div class="col-md-6" v-if="showWalletAddressForm">-->
<!--         <img src="~assets/img/crypto-img.png" class="buy-sell" width="400" alt="" >-->
<!--       </div>-->

<!--       <div class="col-md-6" v-if="showEmailForm">-->
<!--          <div class="pl-3 mt-5">-->
<!--            <h2 style="font-size: 35px" >Send & Recieve Crypto</h2>-->
<!--            <p class="pt-3" style="color: #000000;opacity: 0.8;" >Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>-->
<!--            <p class="pt-2" style="color: #000000;opacity: 0.8;" >Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.-->
<!--              They get cash flow on the accounts for up to 12 months,-->
<!--              all seamlessly without writing a single line of code</p>-->
<!--          </div>-->
<!--       </div>-->

<!--       <div class="col-md-6 " v-if="showEmailForm">-->
<!--         <img src="~assets/img/Buy-and-sell.png" class="buy-sell " width="400" alt="" >-->
<!--       </div>-->

<!--       <div class="col-md-6" v-if="showPhoneForm">-->
<!--          <div class="pl-3 mt-5">-->
<!--            <h2 style="font-size: 35px">Get Realtime Updates</h2>-->
<!--            <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>-->
<!--            <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.-->
<!--              They get cash flow on the accounts for up to 12 months,-->
<!--              all seamlessly without writing a single line of code</p>-->
<!--          </div>-->
<!--       </div>-->

<!--       <div class="col-md-6 mt-4" v-if="showPhoneForm">-->
<!--         <img src="~assets/img/sell-crypto.png" class="buy-sell" width="400" alt="" >-->
<!--       </div>-->

<!--       <div class="col-md-6" v-if="showSecurityForm">-->
<!--         <div class="pl-3 mt-5">-->
<!--           <h2 style="font-size: 35px">Enjoy secure escrow services</h2>-->
<!--           <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>-->
<!--           <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.-->
<!--             They get cash flow on the accounts for up to 12 months,-->
<!--             all seamlessly without writing a single line of code</p>-->
<!--         </div>-->
<!--       </div>-->
<!--       <div class="col-md-6 mt-4" v-if="showSecurityForm">-->
<!--         <img src="~assets/img/escrow-services.png" class="buy-sell" width="400" alt="" >-->
<!--       </div>-->
<!--     </div>-->
<!--   </div>-->

<!--   <div class="container mt-5 pt-4">-->
<!--     <div class="global text-center pt-2">DEFI</div>-->
<!--     <h2 class="text-center font-weight-bold " style="font-size: 40px">Better savings and earning opportunities</h2>-->
<!--   </div>-->

<!--   <growMoney />-->

   <div class="container mt-5 pt-5">
     <div class="row">
       <div class="col-md-6  img-ani">
         <img src="~assets/img/CARD-THAT-SOLVES.png" class="img-fluid" alt="" >
       </div>

       <div class="col-md-6 mt-4 px-4">
         <span style="color: #003399;" class="">BoundlessPay Card</span>
         <h2 class="py-1 " style="font-size: 45px">Card that solves <br> everything</h2>
         <p>Get the freedom to make quick and easy payments, earn <br class="d-none d-sm-block"> money, spend smart, and save more.</p>
         <div class="d-flex mt-5">
           <div>
             <div><img src="~assets/img/check-good.svg" alt="" class="img-fluid"> <span class="ml-2">Create virtual cards</span> </div>
             <div class="mt-2"><img src="~assets/img/check-good.svg" alt="" class="img-fluid"> <span class="ml-2">Pay utility bills</span> </div>
           </div>
           <div class="ml-4">
             <div><img src="~assets/img/check-good.svg" alt="" class="img-fluid"> <span class="ml-2">No hidden fees</span> </div>
             <div class="mt-2"><img src="~assets/img/check-good.svg" alt="" class="img-fluid"> <span class="ml-2">Cash back</span> </div>
           </div>
         </div>

         <div class="col-md-6 mt-4" >
           <nuxt-link to="/learn-more-crypto-card">
             <button class="button btn w-50 mb-2 mt-1 text-white" style="background: #003399; border-radius: 4px;">Learn more  <img src="~assets/img/check-white.svg" class="img-fluid ml-2" alt=""> </button>
           </nuxt-link>
         </div>
       </div>
     </div>
   </div>

   <downloadApp />

   <div class="mt-5 pt-4 container partners">
     <h2 class="text-center ">Our partners</h2>
     <p class="text-center pt-3">We’ve partnered with market leading providers in the crypto market
       to build a <br> solution specifically for the digital economy.</p>

     <div class="d-flex justify-content-center mx-auto">
       <img src="~assets/img/our-partners.png" class="img-fluid" width="1000" alt="">
     </div>
   </div>

   <div class="mt-5 pt-4 container mb-5  partners">
     <h2 class="text-center">
       Grants and Backers</h2>
     <p class="text-center pt-3">We've have received grants, supports and investments by notable blockchain <br> foundations and funds.</p>

     <div class="d-flex justify-content-center mx-auto">
       <img src="~assets/img/Grants-support.png" class="img-fluid mt-n2" width="1000" alt="">
     </div>
   </div>
 </div>
</template>

<script>
import downloadApp from "../components/downloadApp.vue";
export default {
    components: {downloadApp},
  data() {
    return {
      showWalletAddressForm:false,
      showEmailForm:true,
      showPhoneForm:false,
      showSecurityForm:false,
      showPreferencesForm:false
    }
  },

  mounted() {

    $(function () {
      $("#tabs").timerTabPanel({timeInterval:1500});
    });

    window.ityped.init(document.querySelector('.ityped'),{
      strings: ['Send','Receive','Swap', 'Remit', 'Earn', 'Pay',],
      loop: true
    })

    AOS.init({
      offset: 100,
      duration: 1000,
    });




  },

  methods: {
    walletAddressForm() {
      this.showEmailForm = false
      this.showPhoneForm = false
      this.showSecurityForm = false
      this.showPreferencesForm = false
      this.showWalletAddressForm = true
    },
    emailForm() {
      this.showWalletAddressForm = false
      this.showPhoneForm = false
      this.showSecurityForm = false
      this.showPreferencesForm = false
      this.showEmailForm = true
    },
    phoneForm() {
      this.showWalletAddressForm = false
      this.showEmailForm = false
      this.showSecurityForm = false
      this.showPreferencesForm = false
      this.showPhoneForm = true
    },
    SecurityForm() {
      this.showWalletAddressForm = false
      this.showPhoneForm = false
      this.showEmailForm = false
      this.showPreferencesForm = false
      this.showSecurityForm = true
    },
    PreferencesForm() {
      this.showWalletAddressForm = false
      this.showPhoneForm = false
      this.showEmailForm = false
      this.showSecurityForm = false
      this.showPreferencesForm = true
    }
  }
}
</script>

<style>
button {
  transition: 0.5s;
  border: 0.5px solid #000000;
  border-radius: 4px;
  padding: 0px 25px 0px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  height: 42px;
  background: #fff;
  display: block;
  position: relative;
  color: #000000;

}



.btn-4::before {
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-4::after {
  background: #fff;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

button:hover {
  color: #06389b;
}

.btn-4:hover:after {
  height: 0;
  left: 50%;
  top: 50%;
  width: 0;
}


.home-top {
  background: #000000;
  padding-top: 150px;
}

.under-img {
  bottom: -340px;
  left: -60px;
  position: absolute;
}

.global {
  letter-spacing: 0.4em;
  color: #000000;
  opacity: 0.3;
  font-size: 18px;
}

.col-md-6 {
  padding: 0;
  margin: 0;
}

.img {
  position: relative;
  top: 39px;
  width: 525px;
}

.buy {
  padding: 0px 15px 0px;
  color: #030000;
  font-size: 17px;
  opacity: 0.3;
  cursor: pointer;
}

@media screen and (min-width: 800px) {
  .home-page .buy-sell {
    position: relative;
    left: 70px;
    top: 18px;
  }
}

@media screen and (max-width: 780px) {
  .buy-sell {
    position: relative;
    left: -50px;
    top: 0px;
  }
  .img-mobile {
    margin-top: 20px;
    position: relative;
    left: -40px;
  }

}

.active {
  color: #003399;
  font-weight: 700;
  opacity: 1!important;
}

.img-ani {
  transform: translatey(0px);
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {

    transform: translatey(-20px);
  }
  100% {

    transform: translatey(0px);
  }
}



</style>
