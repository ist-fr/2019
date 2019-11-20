<template>
  <div class="jumbotron-container">
    <div class="header-jumbotron text-center text-white">
      <div class="container-logo text-center">
        <div>
          <img
            class="img-logo"
            src="../../assets/ist-fr-2019-logo-yellow.svg"
            alt="Logo"
          />
        </div>
        <!-- <div class="row mt-5">
          <div class="col-md-12">
          </div>
        </div> -->
        <div>
          <img class="img-separator mt-4" src="../../assets/separator.svg" />
        </div>
        <div class="row">
          <div class="col-md-12">
            <p>
              <i
                >Symposium on Frontier Research in Information Science and
                Technology</i
              >
            </p>
            <i>Gateway to Informatics Research at EECi</i>
          </div>
        </div>
      </div>
      <div class="div-scroll-down"></div>
    </div>
  </div>
</template>

<style scoped>
.header-jumbotron {
  padding: 80px 8% 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  height: 100vh;
  font-size: 1.25rem;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.637) 0%,
    rgba(0, 0, 0, 0.2497373949579832) 100%
  );
}

.jumbotron-container {
  background: url("../../assets/background.jpg") center center no-repeat;
  background-size: cover;
}

@media (min-width: 992px) {
  .header-jumbotron {
    padding: 120px 20% 30px;
  }
}

.container-logo {
  width: 100%;
  padding-bottom: 10%;
}

.img-logo {
  margin-bottom: 0.75vh;
  max-height: 30vh;
}

.img-separator {
  margin: 2vh 0;
  max-height: 5vh;
  max-width: 10vh;
}

.img-hero-bg {
  position: absolute;
  width: 100%;
  bottom: -7.5vh;
  opacity: 0.75;
}
</style>
