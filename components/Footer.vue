<template>
  <footer>
    <div class="container pt-5 pb-2 pb-md-5">
      <div class="row">
        <div class="col-lg-4  col-sm-4 col-md-4 mb-4">

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
              <!--              <img class="img-fluid ml-n2" style="max-height: 150px " src="~/assets/images/SAFE_GATE__CBN_AN_NDIC.png" alt="">-->
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-sm-8 col-md-8 ml-5 mt-4 left-web" >
          <div class="row">
            <div class="col-sm-4 col-6 mb-2">
              <h5 class="mb-4">Company</h5>
              <div>
                <p>
                  <n-link to="/about-us">About Us</n-link>
                </p>
                <p>
                  <n-link to="/schools">Careers</n-link>
                </p>
                <p>
                  <n-link to="/companies">Contact us</n-link>
                </p>
              </div>
            </div>

            <div class="col-sm-3 col-6 mb-2">
              <h5 class="mb-4">Support</h5>
              <div>
                <p>
                  <n-link to="/contact-us">FAQS</n-link>
                </p>
                <p>
                  <n-link to="/#faq">Support</n-link>
                </p>
                <p>
                  <n-link to="/contact-us">Blog</n-link>
                </p>

              </div>
            </div>

            <div class="col-sm-5 col-6 mb-2">
              <h5 class="mb-4">Legal</h5>
              <div>
                <p>
                  <n-link to="#">Provicy policy</n-link>
                </p>
                <p>
                  <n-link to="#">Terms and conditions</n-link>
                </p>
                <p>
                  <n-link to="#">Contact us</n-link>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class=" container ">
      <div class="container half-black lg">

      </div>
    </div>

    <div class="container">
      <div class="pt-4 d-flex half-black small ">
        <span style="opacity: 0.6; color: #ffffff">© Copyright 2022 Boundless Nexus Ltd. (UK) 12527470. All Rights Reserved.</span>
      </div>

      <div class="d-lg-flex half-black justify-content-end ml-auto mt-lg-n3 pb-5">

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

.half-black a {
  padding: 0px 15px 0px;
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
  font-size: 14px;
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
