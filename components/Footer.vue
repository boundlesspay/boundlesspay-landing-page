<template>
  <footer>
    <div class="container pt-5 pb-2 pb-md-5">
      <div class="row">
        <div class="col-lg-4  col-sm-4 col-md-4 mb-4">

          <div class="row">
            <div class="col-12 col-sm-12">
              <div class="d-flex">
                <div>
                  <img loading="lazy" src="~/assets/img/MA logo-8 1.svg" width="128px" class="img-fluid" alt="">
                </div>
              </div>
              <div class=" mt-4" style="color: #18113C; font-size: 14px">Madesoft Academy prepares students for fulfilling and rewarding careers in the engineering, and tech space</n-link></div>
              <!--              <img class="img-fluid ml-n2" style="max-height: 150px " src="~/assets/images/SAFE_GATE__CBN_AN_NDIC.png" alt="">-->
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-sm-8 col-md-8 ml-5 left-web" >
          <div class="row">
            <div class="col-sm-4 col-6 mb-2">
              <h5 class="mb-4">Company</h5>
              <div>
                <p>
                  <n-link to="/about-us">About Us</n-link>
                </p>
                <p>
                  <n-link to="/schools">Schools</n-link>
                </p>
                <p>
                  <n-link to="/companies">Partnership</n-link>
                </p>
                <p>
                  <n-link to="/become-a-mentor">Become a Mentor</n-link>
                </p>
              </div>
            </div>

            <div class="col-sm-3 col-6 mb-2">
              <h5 class="mb-4">Support</h5>
              <div>
                <p>
                  <n-link to="/contact-us">Help</n-link>
                </p>
                <p>
                  <n-link to="/#faq">Get the App</n-link>
                </p>
                <p>
                  <n-link to="/contact-us">Contact Us</n-link>
                </p>
                <p>
                  <n-link to="/terms-and-conditions">Career</n-link>
                </p>
              </div>
            </div>

            <div class="col-sm-5 col-6 mb-2">
              <h5 class="mb-4">Address</h5>
              <div>
                <p>
                  <n-link to="#">813 Emmanuel Adubifa Street Omole 2 Lagos Nigeria</n-link>
                </p>
                <p>
                  <n-link to="#">Email: <span style="color: #7450FE;">admin@madesoftacademy.com</span></n-link>
                </p>
                <p>
                  <n-link to="#">Phone: <span class="font-weight-bold">+234708 169 7403</span> </n-link>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="lg">
      <div class="container half-black">

      </div>
    </div>

    <div class="container">
      <div class="pt-4 d-flex half-black small">
        <span style="opacity: 0.7">Copyright © 2022 Madesoft Academy- All Right Reserved</span>
      </div>

      <div class="d-lg-flex half-black justify-content-end ml-auto mt-lg-n3 pb-5">
        <n-link to="/about-us"> <span>About</span></n-link>
        <n-link to="/terms-conditions"> <span>Terms & Conditions</span></n-link>
        <n-link to="/privacy-policy"> <span>Privacy Policy</span></n-link>
        <n-link to="/contact-us"> <span>Contact</span></n-link>
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
  border-bottom: 1px solid #D3D3D3;
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
</style>
