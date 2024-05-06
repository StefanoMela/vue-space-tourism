<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="landing">
    <div class="text_container">
      <h5 class="landing_sub_title barlow-condensed-regular">
        So, you want to travel to
      </h5>
      <h1 class="landing_title bellefair-regular">space</h1>
      <p class="landing_body barlow-condensed-regular">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div class="landing_button">
      <a class="landing_explore_button bellefair-regular">Explore</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 100vh;
  width: 100%;
  background: url("/src/assets/img/home/background-home-desktop.jpg") no-repeat
    bottom;
  background-size: cover;

  color: #ffffff;

  display: flex;

  justify-content: center;
  align-items: center;

  .text_container {

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;

    .landing_sub_title {
      font-size: 28px;
      letter-spacing: 4.75px;
      text-transform: uppercase;
      color: #d0d6f9;
    }

    .landing_title {
      font-size: 150px;
      text-transform: uppercase;
      margin: 2rem 0;
    }

    .landing_body {
      width: 28%;
      font-size: 18px;
      line-height: 32px;
      color: #d0d6f9;
    }
  }

  .landing_button {

    margin-top: 10rem;
    margin-right: 10rem;

    padding: 4.5rem;

    color: black;
    background-color: #ffffff;
    text-align: center;
    align-content: center;
    font-size: 32px;
    text-transform: uppercase;
    aspect-ratio: 1;
    border-radius: 50%;
  }
}
</style>
