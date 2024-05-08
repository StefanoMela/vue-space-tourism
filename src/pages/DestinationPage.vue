<script>
import jsonData from "/src/assets/data/data.json";

export default {
  data() {
    return {
      destinations: [],
      crew: [],
      tech: []
    };
  },
  mounted() {
    this.destinations = jsonData.destinations;
    this.crew = jsonData.crew;
    this.tech = jsonData.tech;
  }
};
</script>

<template>
  <section class="destination-main">
    <h5 class="barlow-condensed-regular destination-title">
      pick your destination
    </h5>
    <div class="planet-container">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.destination-main {
  height: 100vh;
  background-image: url("src/assets/img/destination/background-destination-desktop.jpg");

  color: white;
}
</style>
