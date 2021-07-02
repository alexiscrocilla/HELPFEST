<template>
    <div>
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
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>