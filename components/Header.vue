<template>
  <div>
    <b-navbar toggleable="lg" class="pt-2">
      <div class="container-fluid">
        <b-navbar-brand to="/" class="ml-n2 py-3">
          <img loading="lazy" src="~/assets/img/Logo (white).png" width="230px" class="img-fluid d-none d-md-inline mt-n1 pb-2" alt="">
          <img loading="lazy" src="~/assets/img/Logo (white).png" width="200px" class="img-fluid d-md-none" alt="">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto text-white center_ nav-center" >
            <div class="d-flex">
              <nuxt-link to="/" class="ml-1 cool-link">Home</nuxt-link>
            </div>
              <div class="d-flex">
                <nuxt-link to="/about-us" class="ml-1 cool-link">About</nuxt-link>
              </div>
              <div class="d-flex ml-lg-3 product">
                <div  class="d-flex top-btn mt-n2">
                  <b-dropdown
                    variant="empty"
                    size="sm"
                    right
                    toggle-class="header-icon notification-button"
                    menu-class="position-absolute notification-dropdown"
                    no-caret>
                    <template slot="button-content">
                      <div class="d-flex">
                        <div class="text-white" style="font-size: 16px">
                          Products
                        </div>
                        <div class="ml-2">
                          <img src="~assets/img/dropdown-icon.svg" class="img-fluid" alt="">
                        </div>
                      </div>
                    </template>
                    <div class="dropdown_ mt-3">
                      <b-dropdown-item to="/secure-crypto-cards">
                        <div class="d-flex">
                          <div>
                            <img src="~assets/img/coin-swap-img.svg" alt="">
                          </div>
                          <div class="ml-3 mt-n1">
                            <div style="font-size: 17px">Secure Crypto Cards</div>
                            <span style="color: #000000; opacity: 0.8; font-size: 13px">Recieve payments from anywhere and <br>
                          convert to cryptocurrencies or stable coins</span>
                          </div>
                        </div>
                      </b-dropdown-item>

                      <b-dropdown-item to="/coin-swap">
                        <div class="d-flex mt-3">
                          <div>
                            <img src="~assets/img/crypto-card-icon.svg" alt="">
                          </div>
                          <div class="ml-3 mt-n1">
                            <div style="font-size: 17px">Currency swap</div>
                            <span style="color: #000000; opacity: 0.8; font-size: 13px">Make exclusive payments online with your virtual <br> crypto cards</span>
                          </div>
                        </div>
                      </b-dropdown-item>

                      <b-dropdown-item to="/transfer-money">
                        <div class="d-flex mt-3 mb-3">
                          <div>
                            <img src="~assets/img/transfer-money-icon.svg" alt="">
                          </div>
                          <div class="ml-3 mt-n1">
                            <div style="font-size: 17px">Money Transfer</div>
                            <span style="color: #000000; opacity: 0.8; font-size: 13px"> Send money globally using crypto.</span>
                          </div>
                        </div>
                      </b-dropdown-item>

                      <b-dropdown-item to="/otc-potal">
                        <div class="d-flex mt-3 mb-3">
                          <div>
                            <img src="~assets/img/otc-trading.svg" alt="">
                          </div>
                          <div class="ml-3 mt-n1">
                            <div style="font-size: 17px">OTC Trading</div>
                            <span style="color: #000000; opacity: 0.8; font-size: 13px">Trade in large blocks at competitive rate</span>
                          </div>
                        </div>
                      </b-dropdown-item>

                    </div>
                  </b-dropdown>
                </div>
              </div>
<!--            <div class="d-flex">-->
<!--                <nuxt-link to="/our-token" class="ml-1 cool-link">Our token</nuxt-link>-->
<!--              </div>-->
            <div class="d-flex">
                <a href="https://press.boundlesspay.com/" target="https://press.boundlesspay.com/" class="ml-1 cool-link">Blog</a>
              </div>
            <div class="d-flex">
                <nuxt-link to="/how-to" class="ml-1 cool-link">How to</nuxt-link>
              </div>

          </b-navbar-nav>

          <b-navbar-nav class="ml-auto  my-lg-0 order-0 top">
            <div class="mt-n3  d-flex align-items-center justify-content-between mt-lg-0">
                          <a href="https://app.boundlesspay.com/login" target="https://app.boundlesspay.com/login"  class="mr-4 pt-n5 text-white">
                            Log in
                          </a>
              <div>

                <div>
                  <a href="https://app.boundlesspay.com/get-started" target="https://app.boundlesspay.com/get-started"  class="mr-4 pt-n5 text-white">
                    <button class="button  py-2 w-100 mb-2 mt-1" style="border: 0.5px solid #FFFFFF; border-radius: 4px;">Sign up</button>
                  </a>
                  <!--                <a href="https://apps.apple.com/ng/app/boundlesspay/id1598547096" target="https://apps.apple.com/ng/app/boundlesspay/id1598547096">-->
                  <!--                  <button class="button btn-1 py-2 w-100 mb-2 mt-1" style="border-radius: 20px;">Download on iOS</button>-->
                  <!--                </a>-->
                </div>
              </div>
            </div>

          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>


  </div>
</template>

<script>
import schools from "@/components/schools.vue"
export default {
  name: "Header",

  components:  { schools },
  data() {
    return {

    }
  },

  mounted() {
    if (process.client) {
      window.onscroll = function () {
        OffSetTop();
      };
    }

    function OffSetTop() {
      let ctx = this
      if (process.client) {
        let header = document.querySelector(".navbar");
        let sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          ctx.logoUrl = require('~/assets/img/logo.svg')
        } else {
          header.classList.remove("sticky");
          ctx.logoUrl = require('~/assets/img/logo.svg')
        }
      }
    }
  },

  methods:{
    async logout() {
      await this.$auth.logout();
      await this.$router.push('/login');
    }
  }

}
</script>

<style scoped>
.cart-count {
  width: 10px;
  height: 10px;
  font-size: 12px;
  border-radius: 50px;
  background-color: #004dff;
  color: #fff;
  font-weight: 300;
  top: 0;
  right: -2px;
}

button {
  transition: 0.5s;
  border: 0.5px solid #FFFFFF;
  border-radius: 4px;
  padding: 0px 25px 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  height: 42px;
  background: none;
  display: block;
  position: relative;
  color: white;
}

button,
button::after {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

/*button {*/
/* */
/*  border: 3px solid #fff;*/
/*  border-radius: 5px;*/
/*  color: #fff;*/
/*  display: block;*/
/*  font-size: 1.6em;*/
/*  font-weight: bold;*/
/*  margin: 1em auto;*/
/*  padding: 2em 6em;*/
/*  position: relative;*/
/*  text-transform: uppercase;*/
/*}*/

button::before,
button::after {
  background: #fff;
  content: '';
  border-radius: 20px;
  position: absolute;
  z-index: -1;
}

button:hover {
  color: #000000;
}

/* BUTTON 1 */
.btn-1::after {
  height: 0;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-1:hover:after {
  height: 100%;
}

a {
  display: inline-block;
}

.cool-link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #fff;
  transition: width .3s;
}

.cool-link:hover::after {
  width: 100%;
  transition: width .3s;
}

.dropdown_ a {
  line-height: 34px;
}


@media screen and (max-width: 750px) {
  .navbar{
    background-color: white;
  }
}

.entry-name {
  font-size: 16px;
  font-weight: 500;
}

.navbar-light .navbar-nav .nav-link {
  color: #fff;
  font-size: 16px;
  font-weight: 550;
}



/*.nuxt-link-exact-active {*/
/*  font-weight: bold;*/
/*  color: #7450FE!important;*/
/*}*/


.navbar {
  position: fixed;
  -webkit-transition: all .5s ease-in-out;
  -o-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  width: 100%;
  padding-bottom: 0;
  top: 0;
  background: #121212;
  z-index: 1000;
  /*overflow-x: hidden!Important;*/
  /*width: 100%;*/
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  overflow-x: hidden!Important;
}

.sticky {
  position: fixed;
  top: 0;
  background-color: #000000!important;
  /*background: #F9F9F9!important;*/
  color: #ffff;
  width: 100%;
  -webkit-transition: all .5s ease-in-out;
  -o-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
}

.sticky + .content {
  padding-top: 102px;
  -webkit-transition: all .5s ease-in-out;
  -o-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
}

a {
  text-decoration: none;
}

@media screen and (min-width: 800px) {
  .nav-center {
    position:relative;
    left: 30px;
    top: 4px
  }

  .center_ a {
    color: #fff;
    padding: 0px 28px 0px;
    font-size: 16px;
  }

  .top {
    margin-top: 20px;
  }
}

@media screen and (max-width: 790px) {
  .top {
    margin-top: 21px;
  }

  .product {
    position: relative;
    left: -6px;
  }
}


.center_ a {
  color: #fff;
  font-size: 16px;
}
</style>
