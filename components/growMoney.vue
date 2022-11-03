<template>
  <div>

       <div class="container px-5 pt-5 mt-5 mb-5" style="background: #EEEEEE; border-radius: 20px;">
         <div class="row">
           <h6 class="buy" @click="walletAddressForm" :class="[showWalletAddressForm ? 'active' : '']">Send Money Globally</h6>
           <h6 class="buy" @click="emailForm" :class="[showEmailForm ? 'active' : '']">Invest in Mutual Funds</h6>
           <h6 class="buy" @click="phoneForm" :class="[showPhoneForm ? 'active' : '']">Savings</h6>
           <h6 class="buy" @click="SecurityForm" :class="[showSecurityForm ? 'active' : '']" >Staking</h6>
           <h6 class="buy" @click="PreferencesForm" :class="[showPreferencesForm ? 'active' : '']" >Refer a friend</h6>


           <div class="col-md-6 mt-4" v-if="showWalletAddressForm">
             <div class="pl-3 mt-5 pt-5">
                             <h2 class="" style="font-size: 35px">Send Money Globally</h2>
                             <p class="pt-3" style="color: #000000;opacity: 0.8;">Inflow Finance, using Mono Connect, allows thousands of users to understand and manage their finances across multiple accounts all in one place.</p>
                             <p class="pt-2" style="color: #000000;opacity: 0.8;">Just by linking their financial accounts to the Inflow app
                               using Mono, Inflow's users can now get a better view of their financial health by monitoring real-time balances
                               and transactions across accounts, create budgets, and get personal insights on their spending habits</p>
                           </div>
           </div>

           <div class="col-md-6 mt-5" v-if="showWalletAddressForm">
             <img src="~assets/img/grow-your-money.png" class="buy-sell" width="400" alt="" >
           </div>

           <div class="col-md-6 mt-4" v-if="showEmailForm">
             <div class="pl-3 mt-5 pt-5">
                             <h2 style="font-size: 35px" >Invest in Mutual Funds</h2>
                             <p class="pt-3" style="color: #000000;opacity: 0.8;">Inflow Finance, using Mono Connect, allows thousands of users to understand and manage their finances across multiple accounts all in one place.</p>
                             <p class="pt-2" style="color: #000000;opacity: 0.8;"> Just by linking their financial accounts to the Inflow app using Mono, Inflow's users can now get a better view of their financial health by monitoring real-time balances and transactions across accounts, create budgets,
                               and get personal insights on their spending habits.</p>
             </div>
           </div>

           <div class="col-md-6 mt-5" v-if="showEmailForm">
             <img src="~assets/img/Invest mockup 2.png" class="buy-sell" width="400" alt="" >
           </div>

           <div class="col-md-6 mt-4" v-if="showPhoneForm">
             <div class="pl-3 mt-5 pt-5">
                             <h2 style="font-size: 35px">Savings</h2>
                             <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>
                             <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.
                               They get cash flow on the accounts for up to 12 months,
                               all seamlessly without writing a single line of code</p>
                           </div>
           </div>

           <div class="col-md-6 mt-5" v-if="showPhoneForm">
             <img src="~assets/img/Savings.png" class="buy-sell" width="400" alt="" >
           </div>

           <div class="col-md-6 mt-4" v-if="showSecurityForm">
             <div class="pl-3 mt-5 pt-5">
                             <h2 style="font-size: 35px">Staking</h2>
                             <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>
                             <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.
                               They get cash flow on the accounts for up to 12 months,
                               all seamlessly without writing a single line of code</p>
                           </div>
           </div>

           <div class="col-md-6 mt-5" v-if="showSecurityForm">
             <img src="~assets/img/Staking.png" class="buy-sell" width="430" alt="" >
           </div>

           <div class="col-md-6 mt-4" v-if="showPreferencesForm">
             <div class="pl-3 mt-5 pt-5">
                             <h2 style="font-size: 35px">Refer a friend</h2>
                             <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>
                             <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.
                               They get cash flow on the accounts for up to 12 months,
                               all seamlessly without writing a single line of code</p>
                           </div>
           </div>

           <div class="col-md-6 mt-5" v-if="showPreferencesForm">
             <img src="~assets/img/refer.png" class="buy-sell" width="400" alt="" >
           </div>


         </div>
       </div>

<!--    <div class="container px-5 pt-4 mt-5 mb-5" style="background: #EEEEEE; border-radius: 20px;" id="tabss">-->
<!--      <ul class="row pt-3" >-->
<!--        <li><a href="#tab5" class="buy" >Send Money Globally</a></li>-->
<!--        <li><a href="#tab6" class="buy">Invest in Mutual Funds</a></li>-->
<!--        <li><a href="#tab7" class="buy" >Savings</a></li>-->
<!--        <li><a href="#tab8" class="buy" >Staking</a></li>-->
<!--        <li><a href="#tab9" class="buy" >Refer a friend</a></li>-->
<!--      </ul>-->


<!--      <div  id="tab5">-->
<!--        <div class="row">-->
<!--          <div class="col-md-6">-->
<!--            <div class="pl-3 mt-5">-->
<!--              <h2 class="" style="font-size: 35px">Send Money Globally</h2>-->
<!--              <p class="pt-3" style="color: #000000;opacity: 0.8;">Inflow Finance, using Mono Connect, allows thousands of users to understand and manage their finances across multiple accounts all in one place.</p>-->
<!--              <p class="pt-2" style="color: #000000;opacity: 0.8;">Just by linking their financial accounts to the Inflow app-->
<!--                using Mono, Inflow's users can now get a better view of their financial health by monitoring real-time balances-->
<!--                and transactions across accounts, create budgets, and get personal insights on their spending habits</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-md-6 mt-4" >-->
<!--            <img src="~assets/img/grow-your-money.png" class="buy-sell" width="400" alt="" >-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div  id="tab6">-->
<!--        <div class="row">-->
<!--          <div class="col-md-6">-->
<!--            <div class="pl-3 mt-5">-->
<!--              <h2 style="font-size: 35px" >Invest in Mutual Funds</h2>-->
<!--              <p class="pt-3" style="color: #000000;opacity: 0.8;">Inflow Finance, using Mono Connect, allows thousands of users to understand and manage their finances across multiple accounts all in one place.</p>-->
<!--              <p class="pt-2" style="color: #000000;opacity: 0.8;"> Just by linking their financial accounts to the Inflow app using Mono, Inflow's users can now get a better view of their financial health by monitoring real-time balances and transactions across accounts, create budgets,-->
<!--                and get personal insights on their spending habits.</p>-->
<!--            </div>-->


<!--          </div>-->
<!--          <div class="col-md-6 mt-4">-->
<!--            <img src="~assets/img/Invest mockup 2.png" class="buy-sell" width="400" alt="" >-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div  id="tab7">-->
<!--        <div class="row">-->
<!--          <div class="col-md-6">-->
<!--            <div class="pl-3 mt-5">-->
<!--              <h2 style="font-size: 35px">Savings</h2>-->
<!--              <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>-->
<!--              <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.-->
<!--                They get cash flow on the accounts for up to 12 months,-->
<!--                all seamlessly without writing a single line of code</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-md-6 mt-4">-->
<!--            <img src="~assets/img/Savings.png" class="buy-sell" width="400" alt="" >-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div  id="tab8">-->
<!--        <div class="row">-->
<!--          <div class="col-md-6">-->
<!--            <div class="pl-3 mt-5">-->
<!--              <h2 style="font-size: 35px">Staking</h2>-->
<!--              <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>-->
<!--              <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.-->
<!--                They get cash flow on the accounts for up to 12 months,-->
<!--                all seamlessly without writing a single line of code</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-md-6 mt-4" >-->
<!--            <img src="~assets/img/Staking.png" class="buy-sell" width="430" alt="" >-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div  id="tab9">-->
<!--        <div class="row">-->
<!--          <div class="col-md-6">-->
<!--            <div class="pl-3 mt-5">-->
<!--              <h2 style="font-size: 35px">Refer a friend</h2>-->
<!--              <p class="pt-3" style="color: #000000;opacity: 0.8;">Carbon wanted to make their risk assessment and borrower qualification better with high-quality data.</p>-->
<!--              <p class="pt-2" style="color: #000000;opacity: 0.8;">Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes.-->
<!--                They get cash flow on the accounts for up to 12 months,-->
<!--                all seamlessly without writing a single line of code</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-md-6 mt-4" >-->
<!--            <img src="~assets/img/refer.png" class="buy-sell" width="400" alt="" >-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "grow-money",

  data() {
    return {
      showWalletAddressForm:false,
      showEmailForm:true,
      showPhoneForm:false,
      showSecurityForm:false,
      showPreferencesForm:false
    }
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

<style scoped>
@media screen and (min-width: 800px) {
  .buy-sell {
    position: relative;
    left: 70px;
    top: 0px;
  }
}
</style>
