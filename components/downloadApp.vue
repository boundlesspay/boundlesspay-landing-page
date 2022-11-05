<template>
  <div class="container frame" style=" margin-top: 60px">
    <div class="row ">
      <div class="col-md-6 px-5 pt-5">
        <span class="text-white">Ready to get started?</span>
        <h2 class="text-white pt-3">Download the App to start exploring</h2>
        <p class="pt-3" style=" font-size: 16px; color: #FFFFFF;">Explore a world of boundless opportunities with BoundlessPay. Get unlimited
          access to better financial services designed to get you to where you need to be.</p>
        <div class="d-flex mt-4 mb-5">
          <a href="https://play.google.com/store/apps/details?id=com.bitfxt.boundlesspay" target="https://play.google.com/store/apps/details?id=com.bitfxt.boundlesspay"><img src="~assets/img/Mobile-app-store.svg" class="img-fluid" alt=""> </a>
          <a href="https://apps.apple.com/ng/app/boundlesspay/id1598547096" class="ml-2"><img src="~assets/img/app-store.svg" class="img-fluid" alt=""> </a>
        </div>
      </div>
      <div class="col-md-5 pb-5 justify-content-end ml-auto" data-aos="fade-left" data-aos-easing="ease-in-back"
           data-aos-offset="0">
        <img src="~assets/img/Dark-mode.png" alt="" width="390" class="img-fluid img-top mt-n5 ">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "download-app"
}
</script>

<style scoped>
.frame {
  background-image: url("~assets/img/Frame 2896.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0px 20px 20px 20px!important;
  height: 450px;
  padding-top: 29px;
  /*padding-bottom: 50px;*/
}

@media screen and (max-width: 780px) {
  .frame {
    background-image: url("~assets/img/Frame 2896.png");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0px 20px 20px 20px!important;
    height: 900px!important;
    padding-top: 40px;
    margin-top: 90px!important;
    /*padding-bottom: 50px;*/
  }
}
</style>
