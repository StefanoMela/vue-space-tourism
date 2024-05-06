<script>
import { RouterView } from 'vue-router';
import Navbar from "./components/Navbar.vue";

export default {
  data() {
    return {}
  },
components: {
  Navbar,
  RouterView
},
};
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style lang="scss" scoped></style>