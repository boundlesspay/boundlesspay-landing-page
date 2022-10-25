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
            Transactions
           </h1>

           <p class="text-white pt-2 anim1" style="font-size: 20px">Local and international cryptocurrency or fiat payments leveraging <br> blockchain technology.</p>
           <div class="d-flex mt-4 mb-5 anim1">
             <div><img src="~assets/img/Mobile-app-store.svg" class="img-fluid" alt=""> </div>
             <div class="ml-2"><img src="~assets/img/app-store.svg" class="img-fluid" alt=""> </div>
           </div>
         </div>

         <div class="col-md-5 wrapper">
           <div class="swirl mt-n2">
             <img src="~assets/img/home-page-img.png" class="animate__lightSpeedInRight animate__animated" width="490" alt="">
             <img src="~assets/img/underbackground.png" class="under-img" alt="">
           </div>
         </div>
       </div>
     </div>
   </section>


   <div class="container mt-4 pt-3">
     <div class="global text-center ml12">GLOBAL REMITTANCES</div>
     <h2 class="text-center font-weight-bold mt-3" style="font-size: 39px">A platform for global remittances <br class="d-none d-sm-block"> across the whole world</h2>

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
           <h4 class=" pt-4 pl-1">Coin swap</h4>
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
           <div class="sub-text pt-2">Send money directly to any bank account globally.</div>
           <div class="mt-4">
             <nuxt-link to="/transfer-money"  style="text-decoration: none">
               <button class="button btn-4 w-100 py-2 mb-2">Learn more  <img src="~assets/img/arrow-left.svg" class="img-fluid ml-2" alt=""> </button>
             </nuxt-link>

           </div>
         </div>
       </div>
     </div>
   </div>

   <div class="container " style="background: #000000; border-radius: 14px; margin-top: 100px">
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

   <div class="container mt-5">
     <div class="global text-center pt-2">CRYPTO</div>
     <h2 class="text-center font-weight-bold " style="font-size: 38px">Manage your Portfolio</h2>
   </div>

   <div class="container px-5 pt-5 mt-5 mb-5" style="background: #EEEEEE; border-radius: 20px;">
     <div class="row">
       <h6 class="buy" @click="walletAddressForm" :class="[showWalletAddressForm ? 'active' : '']">Buy & Sell crypto</h6>
       <h6 class="buy" @click="emailForm" :class="[showEmailForm ? 'active' : '']">Send & Recieve crypto</h6>
       <h6 class="buy" @click="phoneForm" :class="[showPhoneForm ? 'active' : '']">Get realtime price updates</h6>
       <h6 class="buy" @click="SecurityForm" :class="[showSecurityForm ? 'active' : '']" >Enjoy secure escrow services</h6>

       <div class="col-md-6" v-if="showWalletAddressForm">
          <div class="pl-3 mt-5">
            <h2 class="" style="font-size: 35px">Buy & Sell Crypto</h2>
            <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>
            <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.
              They get cash flow on the accounts for up to 12 months,
              all seamlessly without writing a single line of code</p>
          </div>
       </div>

       <div class="col-md-6" v-if="showWalletAddressForm">
         <img src="~assets/img/crypto-img.png" class="buy-sell img-ani" width="400" alt="" >
       </div>

       <div class="col-md-6" v-if="showEmailForm">
          <div class="pl-3 mt-5">
            <h2 style="font-size: 35px" >Send & Recieve Crypto</h2>
            <p class="pt-3" style="color: #000000;opacity: 0.8;" >Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>
            <p class="pt-2" style="color: #000000;opacity: 0.8;" >Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.
              They get cash flow on the accounts for up to 12 months,
              all seamlessly without writing a single line of code</p>
          </div>
       </div>

       <div class="col-md-6 " v-if="showEmailForm">
         <img src="~assets/img/Buy-and-sell.png" class="buy-sell " width="400" alt="" >
       </div>

       <div class="col-md-6" v-if="showPhoneForm">
          <div class="pl-3 mt-5">
            <h2 style="font-size: 35px">Get Realtime Updates</h2>
            <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>
            <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.
              They get cash flow on the accounts for up to 12 months,
              all seamlessly without writing a single line of code</p>
          </div>
       </div>

       <div class="col-md-6 mt-4" v-if="showPhoneForm">
         <img src="~assets/img/sell-crypto.png" class="buy-sell" width="400" alt="" >
       </div>

       <div class="col-md-6" v-if="showSecurityForm">
         <div class="pl-3 mt-5">
           <h2 style="font-size: 35px">Enjoy secure escrow services</h2>
           <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>
           <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.
             They get cash flow on the accounts for up to 12 months,
             all seamlessly without writing a single line of code</p>
         </div>
       </div>
       <div class="col-md-6 mt-4" v-if="showSecurityForm">
         <img src="~assets/img/escrow-services.png" class="buy-sell" width="400" alt="" >
       </div>
     </div>
   </div>

   <div class="container mt-5 pt-4">
     <div class="global text-center pt-2">DEFI</div>
     <h2 class="text-center font-weight-bold " style="font-size: 40px">Better savings and earning opportunities</h2>
   </div>



   <div class="container px-5 pt-5 mt-5 mb-5" style="background: #EEEEEE; border-radius: 20px;">
     <div class="row">
       <h6 class="buy" @click="walletAddressForm" :class="[showWalletAddressForm ? 'active' : '']">Grow your money</h6>
       <h6 class="buy" @click="emailForm" :class="[showEmailForm ? 'active' : '']">Access loans faster</h6>
       <h6 class="buy" @click="phoneForm" :class="[showPhoneForm ? 'active' : '']">Earn with ease</h6>
       <h6 class="buy" @click="SecurityForm" :class="[showSecurityForm ? 'active' : '']" >Stake</h6>
       <h6 class="buy" @click="SecurityForm" :class="[showSecurityForm ? 'active' : '']" ></h6>


       <div class="col-md-6" v-if="showWalletAddressForm">
         <div class="pl-3 mt-5">
           <h2 class="" style="font-size: 35px">Grow Your Money</h2>
           <p class="pt-3" style="color: #000000;opacity: 0.8;">Inflow Finance, using Mono Connect, allows thousands of users to understand and manage their finances across multiple accounts all in one place.</p>
           <p class="pt-2" style="color: #000000;opacity: 0.8;">Just by linking their financial accounts to the Inflow app
             using Mono, Inflow's users can now get a better view of their financial health by monitoring real-time balances
             and transactions across accounts, create budgets, and get personal insights on their spending habits</p>
         </div>
       </div>
       <div class="col-md-6" v-if="showWalletAddressForm">
         <img src="~assets/img/escrow-services.png" class="buy-sell" width="400" alt="" >
       </div>

       <div class="col-md-6" v-if="showEmailForm">
         <div class="pl-3 mt-5">
           <h2 style="font-size: 35px" >Access Loans Faster</h2>
           <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>
           <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.
             They get cash flow on the accounts for up to 12 months,
             all seamlessly without writing a single line of code</p>
         </div>
       </div>
       <div class="col-md-6 " v-if="showEmailForm">
         <img src="~assets/img/Refer-1.png" class="buy-sell" width="400" alt="" >
       </div>

       <div class="col-md-6" v-if="showPhoneForm">
         <div class="pl-3 mt-5">
           <h2 style="font-size: 35px">Earn with ease</h2>
           <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>
           <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.
             They get cash flow on the accounts for up to 12 months,
             all seamlessly without writing a single line of code</p>
         </div>
       </div>
       <div class="col-md-6 mt-4" v-if="showPhoneForm">
         <img src="~assets/img/Earn-1.png" class="buy-sell" width="400" alt="" >
       </div>

       <div class="col-md-6" v-if="showSecurityForm">
         <div class="pl-3 mt-5">
           <h2 style="font-size: 35px">Stake</h2>
           <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>
           <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.
             They get cash flow on the accounts for up to 12 months,
             all seamlessly without writing a single line of code</p>
         </div>
       </div>
       <div class="col-md-6 mt-4" v-if="showSecurityForm">
         <img src="~assets/img/Staking-1.png" class="buy-sell" width="400" alt="" >
       </div>
     </div>
   </div>

   <div class="container mt-5 pt-5">
     <div class="row">
       <div class="col-md-6  img-ani">
         <img src="~assets/img/CARD-THAT-SOLVES.png" class="img-fluid" alt="" >
       </div>

       <div class="col-md-6 mt-4 px-4">
         <span style="color: #003399;" class="ml13">BoundlessPay Card</span>
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
           <nuxt-link to="/secure-crypto-cards">
             <button class="button btn w-50 mb-2 mt-1 text-white" style="background: #003399; border-radius: 4px;">Learn more  <img src="~assets/img/check-white.svg" class="img-fluid ml-2" alt=""> </button>
           </nuxt-link>
         </div>
       </div>
     </div>
   </div>

   <div class="container mb-5" style="background: #000000; border-radius: 14px; margin-top: 100px">
     <div class="row ">
       <div class="col-md-6 px-5 pt-5">
         <span class="text-white">Ready to get started?</span>
         <h2 class="text-white pt-3">Download the App to start exploring</h2>
         <p class="pt-3" style=" font-size: 16px; color: #FFFFFF;">Explore a world of boundless opportunities with BoundlessPay. Get unlimited
           access to better financial services designed to get you to where you need to be.</p>
         <div class="d-flex mt-4 mb-5">
           <div><img src="~assets/img/Mobile-app-store.svg" class="img-fluid" alt=""> </div>
           <div class="ml-2"><img src="~assets/img/app-store.svg" class="img-fluid" alt=""> </div>
         </div>
       </div>
       <div class="col-md-5 pb-5 justify-content-end ml-auto" data-aos="fade-left" data-aos-easing="ease-in-back"
            data-aos-offset="0">
         <img src="~assets/img/Dark-mode.png" alt="" width="390" class="img-fluid img-top mt-n5 ">
       </div>
     </div>
   </div>

   <div class="mt-5 container">
     <h2 class="text-center pt-3">Our partners</h2>
     <p class="text-center pt-3">We’ve partnered with market leading providers in the crypto market
       to build a <br> solution specifically for the digital economy.</p>

     <div class="d-flex justify-content-center mx-auto">
       <img src="~assets/img/our-partners.png" class="img-fluid" width="1000" alt="">
     </div>
   </div>

   <div class="mt-5 pt-4 container">
     <h2 class="text-center">Grants and Support</h2>
     <p class="text-center pt-3">We’ve partnered with market leading providers in the crypto market
       to build a <br> solution specifically for the digital economy.</p>

     <div class="d-flex justify-content-center mx-auto">
       <img src="~assets/img/Grants-support.png" class="img-fluid mt-n2" width="1000" alt="">
     </div>
   </div>
 </div>
</template>

<script>
export default {

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
    window.ityped.init(document.querySelector('.ityped'),{
      strings: ['Seamless','Global','Boundless', 'Fast', 'Easy',],
      loop: true
    })

    AOS.init({
      offset: 100,
      duration: 1000,
    });

    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
      }).add({
      targets: '.ml12 .letter',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    });


    var textWrapper = document.querySelector('.ml13');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.ml13 .letter',
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
      }).add({
      targets: '.ml13 .letter',
      translateY: [0,-100],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1200,
      delay: (el, i) => 100 + 30 * i
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
  color: #d5b9b9;
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
  .buy-sell {
    position: relative;
    left: 70px;
    top: 0px;
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
