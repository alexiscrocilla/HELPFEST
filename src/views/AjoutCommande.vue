<template>
  <div class="container">

    <div class="wrapper row justify-content-center">

      <div class="switch_box box_1 m-1 col">
        <div class="col">

          <form>
            <div class="form-group" style="height: 100%; width: 100%;">
              <textarea style="text-align: center" placeholder="Enter your name" class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>

            <div class="form-group mt-3">

              <select class="me-2" style="height: 100%; width: 40%;">
                <option value="" disabled selected>Produit</option>
                <option value="Produit1">Produit1</option>
                <option value="Produit2">Produit2</option>
                <option value="Produit3">Produit3</option>
              </select>

              <select class="ms-2" style="height: 100%; width: 40%;">
                <option value="" disabled selected>Nombre</option>
                <option value="Nombre1">1</option>
                <option value="Nombre2">2</option>
                <option value="Nombre3">3</option>
              </select>

            </div>

            <div class="mt-3">
                <button class="button">Ajouter</button>
            </div>

          </form>

        </div>
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
  margin: 40% auto 0px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.switch_box{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  max-width: 80%;
  max-height: 80%;

  padding: 10%;
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

.box_1{
  border-radius: 3em;
  background: #eee;
}

html, body {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #606c88 , #3f4c6b);
  font-family: 'Oswald', sans-serif;
}

.button {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 4px;
  position: relative;
  background-color: #16a085;
  border: none;
  color: #fff;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 5px 15px #193047;
  border-radius: 4px;
}

.button:after {
  content: "";
  background: #1abc9c;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

.button:focus { outline:0; }

</style>

