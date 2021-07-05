<template>
<div>
  <div>
    <h4>Orders</h4>

    <!-- Commande 1 -->
    <div>
      <div class="d-flex justify-content-between shadow p-3 m-3 bg-white AVenirCard text-start">
        <div class="flex-row bd-highlight">
          <h4 class="font-weight-bold">N°311</h4>
          <div class="container">
            <div class="row ms-3">
              <p>2 x Produit 1</p>
              <p>1 x Produit 2</p>
              <p>1 x Produit 3</p>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <svg class="m-1 bd-highlight" xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
            <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z" transform="translate(-0.563 -0.563)" fill="#0da71f"/>
          </svg>
          <svg class="m-1 bd-highlight" xmlns="http://www.w3.org/2000/svg" width="14.625" height="14.625" viewBox="0 0 14.625 14.625">
            <path id="Icon_ionic-ios-information-circle" data-name="Icon ionic-ios-information-circle" d="M10.688,3.375A7.313,7.313,0,1,0,18,10.688,7.311,7.311,0,0,0,10.688,3.375Zm.668,10.688H10.012V9h1.343Zm-.671-5.618a.7.7,0,1,1,.728-.7A.7.7,0,0,1,10.684,8.445Z" transform="translate(18 18) rotate(180)" fill="#d32222"/>
          </svg>
        </div>
      </div>
    </div>

<!-- Commande 2 -->
  <div>
    <div class="d-flex justify-content-between shadow p-3 m-3 bg-white AVenirCard text-start">
      <div class="flex-row bd-highlight">
        <h4 class="font-weight-bold">N°312</h4>
        <div class="container">
          <div class="row ms-3">
            <p>3 x Produit 1</p>
            <p>1 x Produit 2</p>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <svg class="m-1 bd-highlight" xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
          <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z" transform="translate(-0.563 -0.563)" fill="#0da71f"/>
        </svg>
        <svg class="m-1 bd-highlight" xmlns="http://www.w3.org/2000/svg" width="14.625" height="14.625" viewBox="0 0 14.625 14.625">
          <path id="Icon_ionic-ios-information-circle" data-name="Icon ionic-ios-information-circle" d="M10.688,3.375A7.313,7.313,0,1,0,18,10.688,7.311,7.311,0,0,0,10.688,3.375Zm.668,10.688H10.012V9h1.343Zm-.671-5.618a.7.7,0,1,1,.728-.7A.7.7,0,0,1,10.684,8.445Z" transform="translate(18 18) rotate(180)" fill="#d32222"/>
        </svg>
      </div>
    </div>
  </div>
  </div>

  <!-- BEERS -->
  <div>
    <h4>Beers</h4>

    <div class="scrolling-wrapper container testimonial-group">
      <div class="shadow p-3 m-3 bg-white BeerCard">
        <p>Beer 1</p>
        <img src="https://www.bierestory.fr/media/reviews/photos/original/a6/88/57/heineken20logo20deco-70-1484240395.png"
             alt="Heineken" class="card-img" style="margin:6px ; height: 120px; width: auto;">
        <div class="progress">
          <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="shadow p-3 m-3 bg-white BeerCard">
        <p>Beer 2</p>
        <img src="https://cdn.shopify.com/s/files/1/0504/6894/6085/products/LEFFE-RUBY_480x480.png?v=1604317819   "
             alt="Leffe Ruby" class="card-img" style="margin:6px ; height: 120px; width: auto;">
        <div class="progress">
          <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="shadow p-3 m-3 bg-white BeerCard">
        <p>Beer 3</p>
        <img src="https://p.ventesprivees-fr.com/grimbergen.png"
             alt="Grimbergen" class="card-img" style="margin:6px ; height: 120px; width: auto;">
        <div class="progress">
          <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="shadow p-3 m-3 bg-white BeerCard">
        <p>Beer 4</p>
        <img src="https://www.artandstick.be/getsupercustomizedimage.php5?objid=5360&colorid1=43&colorid2=4&colorid3=4&colorid4=4&colorid5=4&way=NORMAL&transparent=Y"
             alt="Desperados" class="card-img" style="margin:6px ; height: 120px; width: auto;">
        <div class="progress">
          <div class="progress-bar bg-success" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- SOFTS -->
  <div>
    <h4>Softs</h4>

    <div class="scrolling-wrapper container testimonial-group">
      <div class="shadow p-3 m-3 bg-white BeerCard">
        <p>Soft 1</p>
        <img src="https://www.sushi-lauv.fr/wp-content/uploads/2017/10/cocacola.png"
             alt="Coca-Cola" class="card-img" style="margin:6px ; height: 120px; width: auto;">
        <div class="progress">
          <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="shadow p-3 m-3 bg-white BeerCard">
        <p>Soft 2</p>
        <img src="https://www.cdiscount.com/pdt2/9/5/2/1/700x700/coc3701018002952/rw/coca-cola-coca-cola-cherry-33cl-pack-de-24.jpg"
             alt="Coca-Cola Cherry" class="card-img" style="margin:6px ; height: 120px; width: auto;">
        <div class="progress">
          <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="shadow p-3 m-3 bg-white BeerCard">
        <p>Soft 3</p>
        <img src="https://www.commerces-de-france.fr/wp-content/uploads/2020/12/Restaurant-La-Pajovic-Sprite-33-cl.jpg"
             alt="Sprite" class="card-img" style="margin:6px ; height: 120px; width: auto;">
        <div class="progress">
          <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="shadow p-3 m-3 bg-white BeerCard">
        <p>Soft 4</p>
        <img src="https://cdn.mcommerce.franprix.fr/product-images/5449000011527_A1C1_s01"
             alt="Fanta" class="card-img" style="margin:6px ; height: 120px; width: auto;">
        <div class="progress">
          <div class="progress-bar bg-success" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Staff"
}
</script>

<style scoped>
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.BeerCard {
  display: inline-block;
}

/* The heart of the matter */
.testimonial-group > .row {
  overflow-x: auto;
  white-space: nowrap;
}
.testimonial-group > .row > .col-xs-4 {
  display: inline-block;
  float: none;
}

/* Decorations */
.col-xs-4 { color: #fff; font-size: 48px; padding-bottom: 20px; padding-top: 18px; }
.col-xs-4:nth-child(3n+1) { background: #c69; }
.col-xs-4:nth-child(3n+2) { background: #9c6; }
.col-xs-4:nth-child(3n+3) { background: #69c; }
</style>
