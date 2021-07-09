<template>
<div class="container">

  <div class="wrapper row justify-content-center">


    <div class="switch_box box_1 m-1 col">
      <div class="col">
        <label for="Heineken">
          <img src="../assets/logos/Produits/cocacola.png"
             alt="Heineken" class="card-img" style="margin:6px ; height: 120px; width: auto;">
          <input id="Heineken" name="Heineken" type="checkbox" class="switch_1">
        </label>
      </div>
    </div>

    <div class="switch_box box_1 m-1 col">
      <div class="col">
        <label for="Leffe-Ruby">
          <img src="../assets/logos/Produits/coca-cherry.png"
               alt="Leffe-Ruby" class="card-img" style="margin:6px ; height: 120px; width: auto;">
          <input id="Leffe-Ruby" name="Leffe-Ruby" type="checkbox" class="switch_1">
        </label>
      </div>
    </div>

    <div class="switch_box box_1 m-1 col">
      <div class="col">
        <label for="Grimbergen">
          <img src="../assets/logos/Produits/sprite.png"
               alt="Grimbergen" class="card-img" style="margin:6px ; height: 120px; width: auto;">
          <input id="Grimbergen" name="Grimbergen" type="checkbox" class="switch_1">
        </label>
      </div>
    </div>

    <div class="switch_box box_1 m-1">
      <div class="col">
        <label for="Desperados">
          <img src="../assets/logos/Produits/fanta.png"
               alt="Desperados" class="card-img" style="margin:6px ; height: 120px; width: auto;">
          <input id="Desperados" name="Desperados" type="checkbox" class="switch_1">
        </label>
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-light mt-2">Soumettre</button>
    </div>


  </div>
</div>
</template>

<script>
export default {
  name: "AjoutBieres"
}
</script>

<style scoped>

.wrapper{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 27vh auto 0px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.switch_box{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 180px;
  min-width: 130px;
  height: 200px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

/* Switch 1 Specific Styles Start */

.box_1{
  border-radius: 3em;
  background: #eee;
}

input[type="checkbox"].switch_1{
  font-size: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 3em;
  height: 1.5em;
  background: #EDA486;
  border-radius: 3em;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

input[type="checkbox"].switch_1:checked{
  background: #1dc64e;
}

input[type="checkbox"].switch_1:after{
  position: absolute;
  content: "";
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0 0 .25em rgba(0,0,0,.3);
  box-shadow: 0 0 .25em rgba(0,0,0,.3);
  -webkit-transform: scale(.7);
  transform: scale(.7);
  left: 0;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

input[type="checkbox"].switch_1:checked:after{
  left: calc(100% - 1.5em);
}

/* Switch 1 Specific Style End */
</style>
