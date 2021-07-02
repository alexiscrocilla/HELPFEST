<template>
  <div id="">
    <nav class="navbar sticky-top navbar-expand-lg navbar-light shadow p-3" style="background-color: #EF7745">
      <div class="container">

        <button class="position-relative btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="position-relative navbar-brand" href="#">
          <img src="@/assets/logos/new-era-text.png" alt="Logo" width="70" class="d-inline-block align-text-top"/>
        </a>

        <button class="position-relative btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <img src="@/assets/icons/account.svg" alt="Account">
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  <!-- OFF CANVA -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <a href="/#/about"><button id="offcanvasRightLabel" type="button" class="btn btn-secondary text-light AVenirCard">
          <h3>Staff</h3>
        </button></a>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">

        <div class="p-4 shadow p-3 bg-white AVenirCard text-dark">
          <div class="shadow p-3 mb-3 bg-info AVenirCard2">
            <p>Continuer sur Facebook</p>
          </div>
          <div class="shadow p-3 mb-3 bg-danger AVenirCard2">
            <p>Continuer sur Google</p>
          </div>

          <div class="shadow p-3 mb-3 bg-secondary AVenirCard text-dark">
            <img class="d-flex justify-content-end mb-4" src="@/assets/icons/email_1.png" alt="Email">
            <div class="shadow p-3 mb-3 bg-light text-secondary AVenirCard2">
              <p>Adresse mail</p>
            </div>
            <div class="shadow p-3 mb-3 bg-light text-secondary AVenirCard2">
              <p>Mot de passe</p>
            </div>
            <button type="button" class="btn btn-light AVenirCard">
              Connexion
            </button>
            <p class="mt-3 fs-6 text-decoration-underline">Première connexion ?</p>

          </div>
          <div class="shadow p-3 mb-3 bg-secondary AVenirCard text-dark">
            <h4 class="m-3">Je scanne mon billet</h4>
            <svg class="m-4" xmlns="http://www.w3.org/2000/svg" width="77.666" height="77.666" viewBox="0 0 77.666 77.666">
              <path id="Icon_metro-qrcode" data-name="Icon metro-qrcode" d="M26.841,6.782H7.425V26.2H26.841ZM31.7,1.928V31.053H2.571V1.928ZM12.279,11.636h9.708v9.708H12.279Zm63.1-4.854H55.966V26.2H75.383V6.782Zm4.854-4.854V31.053H51.112V1.928H80.237ZM60.82,11.636h9.708v9.708H60.82ZM26.841,55.324H7.425V74.74H26.841ZM31.7,50.469V79.594H2.571V50.469ZM12.279,60.178h9.708v9.708H12.279ZM36.55,1.928H41.4V6.782H36.55ZM41.4,6.782h4.854v4.854H41.4ZM36.55,11.636H41.4V16.49H36.55ZM41.4,16.49h4.854v4.854H41.4ZM36.55,21.345H41.4V26.2H36.55ZM41.4,26.2h4.854v4.854H41.4ZM36.55,31.053H41.4v4.854H36.55Zm0,9.708H41.4v4.854H36.55ZM41.4,45.615h4.854v4.854H41.4ZM36.55,50.469H41.4v4.854H36.55ZM41.4,55.324h4.854v4.854H41.4ZM36.55,60.178H41.4v4.854H36.55ZM41.4,65.032h4.854v4.854H41.4ZM36.55,69.886H41.4V74.74H36.55ZM41.4,74.74h4.854v4.854H41.4ZM75.383,40.761h4.854v4.854H75.383Zm-67.958,0h4.854v4.854H7.425Zm4.854-4.854h4.854v4.854H12.279Zm-9.708,0H7.425v4.854H2.571Zm19.417,0h4.854v4.854H21.987Zm4.854,4.854H31.7v4.854H26.841ZM31.7,35.907H36.55v4.854H31.7Zm14.562,4.854h4.854v4.854H46.258Zm4.854-4.854h4.854v4.854H51.112Zm4.854,4.854H60.82v4.854H55.966Zm4.854-4.854h4.854v4.854H60.82Zm4.854,4.854h4.854v4.854H65.675Zm4.854-4.854h4.854v4.854H70.529Zm4.854,14.562h4.854v4.854H75.383Zm-29.125,0h4.854v4.854H46.258Zm4.854-4.854h4.854v4.854H51.112Zm4.854,4.854H60.82v4.854H55.966Zm9.708,0h4.854v4.854H65.675Zm4.854-4.854h4.854v4.854H70.529Zm4.854,14.562h4.854v4.854H75.383Zm-29.125,0h4.854v4.854H46.258Zm4.854-4.854h4.854v4.854H51.112Zm9.708,0h4.854v4.854H60.82Zm4.854,4.854h4.854v4.854H65.675Zm4.854-4.854h4.854v4.854H70.529Zm4.854,14.562h4.854V74.74H75.383ZM51.112,65.032h4.854v4.854H51.112Zm4.854,4.854H60.82V74.74H55.966Zm4.854-4.854h4.854v4.854H60.82Zm4.854,4.854h4.854V74.74H65.675ZM51.112,74.74h4.854v4.854H51.112Zm9.708,0h4.854v4.854H60.82Zm9.708,0h4.854v4.854H70.529Z" transform="translate(-2.571 -1.928)"/>
            </svg>

          </div>
        </div>

      </div>
    </div>
  <router-view/>
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.AVenirCard {
  border-radius: 2vh;
}

.AVenirCard2 {
  height: 5vh;
  border-radius: 3vh;
}

.AVenirCard3 {
  height: 12vh;
  border-radius: 2vh;
}

.map {
  width: 40vh;
}
</style>
