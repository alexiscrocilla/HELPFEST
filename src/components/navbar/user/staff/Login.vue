<template>
      <div class="offcanvas-header AVenirCard">
          <span id="offcanvasRightLabel" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <a class="register" href="#/Staff">
                </a>
              </span>

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
span{
  position: relative;
  display: inline-flex;
  width: 100px;
  height: 55px;
  margin: 25px;
}
span a{
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
  font-family: 'Montserrat', sans-serif;

}
span .register:before,
span .register:after{
  position: absolute;
  content: "STAFF";
  height: 35px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #fccf67;
  box-sizing: border-box;
  border-radius: 5px;
}
span a:before{
  color: #fff;
  background: #989898;
  transform: rotateY(0deg) translateZ(25px);
}
span a:after{
  color: #fff;
  background: #fccf67;
  transform: rotateX(90deg) translateZ(25px);
}
span a:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}
</style>
