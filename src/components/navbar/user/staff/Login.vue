<template>
      <div class="offcanvas-header">
          <span class="Staffbtn" id="offcanvasRightLabel" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <a class="register" href="#/Staff">
                </a>
              </span>

        <!-- Form -->
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <form>

                <div class="mb-3  ">
                  <label name="email" for="exampleInputEmail1" class="form-label">Email address</label>
                  <input placeholder="service@newera.fr" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                  <div id="emailHelp" class="form-text">If you're NOT from staff, select LOG IN.</div>
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1">
                </div>

                <button type="submit" class="btn btn-secondary">Connect</button>

              </form>
            </div>
          </div>

      </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style>
.Staffbtn{
  height: 35px;
}
.Staffbtn a{
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
  font-family: 'Montserrat', sans-serif;

}
.Staffbtn .register:before,
.Staffbtn .register:after{
  position: absolute;
  content: "STAFF";
  height: 35px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #989898;
  box-sizing: border-box;
  border-radius: 5px;
}
.Staffbtn a:before{
  color: #fff;
  background: #989898;
  transform: rotateY(0deg) translateZ(25px);
}
.Staffbtn a:after{
  color: #989898;
  transform: rotateX(90deg) translateZ(25px);
}
.Staffbtn a:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}
</style>
