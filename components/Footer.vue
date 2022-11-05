<template>
  <footer>
    <div class="container pt-5 pb-2 pb-md-5">
      <div class="row">
        <div class="col-lg-4  col-sm-4 col-md-4">

          <div class="row">
            <div class="col-12 col-sm-12">
              <div class="">
                <div>
                  <img loading="lazy" src="~/assets/img/Bpay-logo.png" width="288px" class="img-fluid ml-n4" alt="">
                </div>
              </div>
              <div class=" mt-4" style="color: #ffffff; opacity: 0.6; font-size: 14px">
                <p>403 Oxford Building, Jumeriah Village Circle (JVC), Dubai, United Arab Emirates.</p>
                <p>6th Floor 2 Kingdom Street, London, United Kingdom, W2 6JP</p>
              </div>

             <div class="d-flex mt-4">
               <p>Insured & Secured by</p>
               <p class="ml-4">Audited by</p>
             </div>
              <div class="d-flex  ml-n2">
                <img src="~assets/img/cybavo.svg" class="img-fluid" alt="">
               <div class="ml-4 text-white mt-1"> <img src="~assets/img/image20.svg" class="img-fluid" alt=""> <span class="ml-2" >Immune bytes</span></div>
             </div>
              <!--              <img class="img-fluid ml-n2" style="max-height: 150px " src="~/assets/images/SAFE_GATE__CBN_AN_NDIC.png" alt="">-->
            </div>
          </div>
        </div>

        <div class="col-lg-7 col-sm-8 col-md-8 ml-5 mt-4 left-web justify-content-end ml-auto" >
          <div class="row">
            <div class="col-sm-4 col-6 mb-2">
              <h5 class="mb-4">About</h5>
              <div>
                <p>
                  <n-link to="/about-us">About Us</n-link>
                </p>
                <p>
                  <n-link to="/careers">Careers</n-link>
                </p>
                <p>
                  <n-link to="/contact-us">Contact us</n-link>
                </p>
              </div>
            </div>

            <div class="col-sm-3 col-6">
              <h5 class="mb-4">Support</h5>
              <div>
                <p>
                  <n-link to="/faq">FAQS</n-link>
                </p>
                <p>
                  <a href="https://chatting.page/cpvlrseec913qel8amvdv8r60fkwizad">Support</a>
                </p>
                <p>
                  <a href="https://blog.boundlesspay.com/?gi=c8ff136b070a">Blog</a>
                </p>


              </div>
            </div>

            <div class="col-sm-5 col-6 ">
              <h5 class="mb-4">Legal</h5>
              <div>
                <p>
                  <n-link to="/privacy-policy">Privacy policy</n-link>
                </p>
                <p>
                  <n-link to="terms-of-use">Terms and conditions</n-link>
                </p>
                <p>
                  <a href="/kyc">KYC/AML policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class=" container">
      <div class="container half-black lg">

      </div>
    </div>

    <div class="container">
      <div class="pt-4 d-flex half-black small ">
        <span style="opacity: 0.6; color: #ffffff">© Copyright 2022 Boundless Nexus Ltd. (UK) 12527470. All Rights Reserved.</span>
      </div>

      <div class="d-lg-flex half-black justify-content-end ml-auto mt-lg-n3 pb-5">
        <a href="https://twitter.com/boundlesspay" target="https://twitter.com/boundlesspay">
          <img src="~assets/img/Round icons (4).svg" alt="">
        </a>

        <a href="https://t.me/boundlesspay_official" target="https://t.me/boundlesspay_official">
          <img src="~assets/img/telegram.svg" alt="">
        </a>
        <a href="https://www.instagram.com/boundlesspay/" target="https://www.instagram.com/boundlesspay/">
          <img src="~assets/img/instagram.svg" alt="">
        </a>
        <a href="https://www.facebook.com/boundlesspayofficial/" target="https://www.facebook.com/boundlesspayofficial/">
          <img src="~assets/img/facebook.svg" alt="">
        </a>

        <a href="https://www.linkedin.com/company/boundlesspay/" target="https://www.linkedin.com/company/boundlesspay/">
          <img src="~assets/img/linkden.svg" alt="">
        </a>

      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "FooterComponent",
  methods: {
    setFocus() {
      document.getElementById("form-wrap").focus()
    },
    showSuccess(){
      showSuccessModal('Subscribed', 'You will be notified.')
    }
  },
  mounted(){

  }
}
</script>

<style scoped>
footer a {
  color: inherit;
}

p {
  font-family: "Light"!important;
}

.lg {
  opacity: 0.3;
  border: 1px solid #FFFFFF;
}

@media all and (min-width: 768px) {
  .br-md-1 {
    border-right: 1px solid #212121;
  }
  .left-web {
    position:relative;
    left: 28px;
  }
}

.half-black img{
  padding: 0px 8px 0px;
}

footer {
  background: #040404;
  margin-top: 100px;
}

footer h5{
  font-weight: 550;
  color: #ffffff;
  font-size: 20px;
}

footer p{
  font-size: 15px;
  line-height: 28px;
  color: #FFFFFF;
  opacity: 0.6;
  font-weight: 450;
  list-style: none;
  margin-bottom: .5rem;
}

a {
  text-decoration: none!important;
}

footer ::placeholder {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #9F9F9F;
}
</style>
