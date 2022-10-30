<template>
  <div>
    <div class="container pt-4 home">
      <h2 class="heading mt-5 pt-5 text-center " style="font-size: 38px;">(FAQ) </h2>
      <p class="pt-4 text-center">Here are 4 frequently asked questions. <br>
        You can also chat with our live support if your questions are not covered here.</p>
      <div class="row">
        <div class=" mt-5">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What is BoundlessPay?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Boundlesspay is a secure application that turns your cell-phone into a mobile bank. Its pre-installed digital wallet and debit card enables storing and spending of digital currencies across merchants globally. In addition, you can access crypto loans, pay utilities,
                  invest in digital currencies and have access to other amazing decentralised finance features in one single app.
                </div>
              </div>
            </div>
            <div class="accordion-item ">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What are the key features of BoundlessPay
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  The key features of boundlesspay
                  includes crypto wallet, crypto savings, crypto staking, crypto loan, global remittance and utility bill payments.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  How can I download BoundlessPay?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Boundlesspay is available on google playstore and will soon be available on iOS app store.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  How much is the Loan Interest?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Our crypto loan feature doesn’t charge any interest, rather,
                  you will stop earning interest on your crypto savings and investments while your loan is stilla ctive.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "faq",


  head: {
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' }
    ],

    title: 'Companines',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  },
}
</script>

<style scoped>

</style>
