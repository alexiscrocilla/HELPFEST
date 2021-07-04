<template>
      <div class="offcanvas-header">
        <a href="/#/staff">
          <p>
            <button id="offcanvasRightLabel" type="button" class="btn btn-secondary text-light AVenirCard" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Staff
            </button>
          </p>

          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <form>

                <div class="mb-3">
                  <label name="email" for="exampleInputEmail1" class="form-label">Email address</label>
                  <input placeholder="name@example.com" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                  <div id="emailHelp" class="form-text">If you're from the staff, enter your e-mail.</div>
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input placeholder="***********" type="password" class="form-control" id="exampleInputPassword1">
                </div>

                <button type="submit" class="btn btn-secondary">Submit</button>

              </form>
            </div>
          </div>
        </a>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style>
.AVenirCard {
  border-radius: 2vh;
}
</style>
