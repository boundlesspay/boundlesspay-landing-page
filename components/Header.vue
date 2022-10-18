<template>
  <div>
    <b-navbar toggleable="lg" class="pt-2">
      <div class="container-fluid">
        <b-navbar-brand to="/" class="ml-n2">
          <img loading="lazy" src="~/assets/img/logo.svg" width="230px" class="img-fluid d-none d-md-inline mt-n2 pb-2" alt="">
          <img loading="lazy" src="~/assets/img/logo.svg" width="200px" class="img-fluid d-md-none" alt="">

        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto text-white center" style="position:relative; left: 30px; top: 4px">
              <div class="d-flex">
                <nuxt-link to="/about-us" class="ml-1 cool-link">About</nuxt-link>
              </div>
              <div class="d-flex ml-3">
                <div  class="d-flex top-btn mt-n2">
                  <b-dropdown
                    variant="empty"
                    size="sm"
                    right
                    toggle-class="header-icon notification-button"
                    menu-class="position-absolute notification-dropdown"
                    no-caret>
                    <template slot="button-content">
                      <div class="d-flex ">
                        <div class="text-white" style="font-size: 16px">
                          Products
                        </div>
                        <div class="ml-2">
                          <img src="~assets/img/dropdown-icon.svg" class="img-fluid" alt="">
                        </div>
                      </div>
                    </template>
                    <div class="dropdown_">
                      <b-dropdown-item to="/coin-swap">
                        <div class="d-flex">
                          <div>
                            <img src="~assets/img/coin-swap-img.svg" alt="">
                          </div>
                          <div class="ml-3 mt-n1">
                            <div style="font-size: 19px">Coin swap</div>
                            <span>Recieve payments from anywhere and <br>
                          convert to cryptocurrencies or stable coins</span>
                          </div>
                        </div>
                      </b-dropdown-item>

                      <b-dropdown-item to="crypto-cards">
                        <div class="d-flex mt-3">
                          <div>
                            <img src="~assets/img/crypto-card-icon.svg" alt="">
                          </div>
                          <div class="ml-3 mt-n1">
                            <div style="font-size: 19px">Crypto Cards</div>
                            <span>Make exclusive payments online with your virtual <br> crypto cards</span>
                          </div>
                        </div>
                      </b-dropdown-item>

                      <b-dropdown-item to="/transfer-money">
                        <div class="d-flex mt-3 mb-3">
                          <div>
                            <img src="~assets/img/transfer-money-icon.svg" alt="">
                          </div>
                          <div class="ml-3 mt-n1">
                            <div style="font-size: 19px">Money Transfer</div>
                            <span>Send money globally using crypto.</span>
                          </div>
                        </div>
                      </b-dropdown-item>

                    </div>
                  </b-dropdown>
                </div>
              </div>
            <div class="d-flex">
                <nuxt-link to="#" class="ml-1 cool-link">Our token</nuxt-link>
              </div>
            <div class="d-flex">
                <nuxt-link to="#" class="ml-1 cool-link">Blog</nuxt-link>
              </div>
            <div class="d-flex">
                <nuxt-link to="#" class="ml-1 cool-link">How to</nuxt-link>
              </div>



          </b-navbar-nav>

          <b-navbar-nav class="ml-auto  my-lg-0 order-0">
            <div class="mt-n3  d-flex align-items-center justify-content-between mt-lg-0">
                          <a href="#"  class="mr-4 pt-n5 text-white">
                            Log in
                          </a>
              <div>
                <nuxt-link to="#" >
                  <button class="button btn-1 w-100 mb-2 mt-1">Sign up</button>
                </nuxt-link>
              </div>
            </div>

          </b-navbar-nav>
        </b-collapse>
        <!--      <div class="ml-4 pb-2 d-lg-none">-->
        <!--             <img loading="lazy" src="~/assets/images/og-logo.png" width="60px" class="img-fluid " alt="oxford buildbay logo">-->
        <!--           </div>-->
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
  font-family: Poppins;
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

.center a {
  color: #fff;
  padding: 0px 28px 0px;
  font-size: 16px;
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
</style>
