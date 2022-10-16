<template>
  <div>
    <div class="nav-list " style="cursor: pointer;">
      <div class="d-flex">
        <div class="">
          <div class="">
              <span>
              <span>Schools <svg class="ml-1 mt-n1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                                 width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                                 viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round"
                                                           stroke-linejoin="round" stroke-width="2"
                                                           d="m4 9l8 8l8-8"/></svg> </span> <br>
            </span>
          </div>

        </div>
      </div>

      <div class="cart sub-menu">
        <div class="cart_box">
          <ul class="cart_list">
            <li>
              <div class="d-flex"></div>
            </li>
          </ul>
          <div class="">
            <div class="row px-2 pl-4 pt-3" style="border-bottom: 1px solid #e5e0e0">
              <nuxt-link to="" class="text-dark text-left_ text-decoration-none">
                <p class="pl-2 d-flex rubik"> name</p>
              </nuxt-link>
            </div>

<!--            <div class="row px-2 pl-4">-->
<!--              <nuxt-link to="/school-of-programming" class="text-dark text-left_ text-decoration-none">-->
<!--                <p class="pl-2 d-flex rubik"> School of Programming and Development</p>-->
<!--              </nuxt-link>-->
<!--            </div>-->

<!--            <div class="row px-2 pl-4">-->
<!--              <nuxt-link to="/course-page" class="font-weight-bold text-dark text-left_ text-decoration-none">-->
<!--                <p class="pl-2 d-flex">Course Page</p>-->
<!--              </nuxt-link>-->
<!--            </div>-->


          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "ImageDropdown",

  data() {
    return {

    }
  },

}
</script>

<style scoped>
.email {
  position: relative;
  bottom: 10px;
  left: -38px;
}




.cart_buttons_madesoft {
  margin: 0;
  padding: 10px 0;
  text-align: start;
  position: relative;
  left: 10px;
}

.cart_buttons_madesoft span {
  font-size: 15px;
}

.cart_buttons_madesoft .view-cart_madesoft,
.cart_buttons_madesoft .checkout_madesoft {
  background-color: #e57718;
  color: #fff;
  margin: 0 5px !important;
  padding: 0.375rem 0.75rem !important;
  float: none !important;
}

.cart_buttons_madesoft .view-cart_madesoft:hover,
.cart_buttons_madesoft .checkout_madesoft:hover {
  background-color: #4fbfa3;
}


.nav-fixed .cart_count {
  top: 8px;
}

.cart_box {
  background-color: white;
  width: 240px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 13px 42px 11px rgba(0, 0, 0, 0.1);

  /*left: -80px;*/
  max-height: 80vh;
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 1000;
}

@media screen and (min-width: 800px) {
  .cart_box {
    position: absolute;
  }
}

.cart_list li {
  border-bottom: 1px solid rgba(119, 119, 119, 0.05);
  /*padding: 4px 14px;*/
  width: 100%;
  line-height: 40px;
  font-weight: bold;
  list-style: none;
}

.cart_list li:hover {
  background-color: rgba(255, 255, 255, 0.3);
}


.cart_list {
  font-size: 14px;
}

.cart_box p:hover {
  color: #7450FE!important;
  transform: translate(x);
  transition: 0s;
}


.cart_total strong {
  float: left;
}


.sub-menu {
  /*width: 270px;*/
  display: block;
  position: absolute;
  border-top: 2px solid #4fbfa3;
  background-color: #fefefe;
  z-index: 250;
  opacity: 0;
  visibility: hidden;
  top: 20px;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
  0 30px 60px -30px rgba(0, 0, 0, 0.3), 0 -18px 60px -10px rgba(0, 0, 0, 0.025);
  transition: all 650ms ease;
}

.nav-list:hover > .sub-menu {
  top: 80px;
  opacity: 1;
  visibility: visible;
}

@media screen and (max-width: 750px) {
  .sub-menu {
    margin-top: 80px;
  }

  .notification_ {
    margin-right: -35px !important;
  }
}
</style>
