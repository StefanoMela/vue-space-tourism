<script>
export default {
  data() {
    return {
      hoveredLink: null,
      activeLink: null,

      routes: this.$router.options.routes,
    };
  },

  methods: {
    activateLink(index) {
      this.activeLink = index;
    },
  },
};
</script>

<template>
  <div class="navbar nav">
    <div class="nav_logo_container">
      <img src="/src/assets/img/shared/logo.svg" class="nav_logo" alt="" />
    </div>
    <div class="nav_link_container">
      <ul class="nav_link_list barlow-condensed-regular">
        <RouterLink
          v-for="(route, index) in routes"
          :key="index"
          :to="route.path"
          class="link-item"
          :class="{
            active: activeLink === index,
            hover: hoveredLink === index,
          }"
          @mouseover="hoveredLink = index"
          @mouseout="hoveredLink = null"
          @click="activateLink(index)"
          >{{ route.link }}</RouterLink
        >
        <!-- <li
          :key="index"
          class="link-item"
          :class="{
            active: activeLink === index,
            hover: hoveredLink === index,
          }"
          @mouseover="hoveredLink = index"
          @mouseout="hoveredLink = null"
          @click="activateLink(index)"
        >
          {{ link }}
        </li> -->
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  text-transform: uppercase;
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem 0;

  gap: 5rem;
}
.nav_link_container {
  display: flex;
  align-items: center;
}

.nav_link_container::before {
  clear: both;
  content: "";
  display: block;
  width: 30rem;
  height: 1px;
  background-color: #9797975f;
  z-index: 1;
  margin-right: -20px;
}

.nav_link_list {
  background-color: rgba(188, 186, 186, 0.125);
  backdrop-filter: blur(4px);

  padding: 2.5rem;

  display: flex;
  align-items: center;

  gap: 6rem;

  cursor: pointer;
}

.link-item {
  font-size: 18px;
  letter-spacing: 2.7px;
  line-height: 19px;
  position: relative;

  color: inherit;
}

.link-item::after {
  clear: both;
  content: "";
  position: absolute;
  bottom: -40px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.link-item.active::after {
  background-color: #ffff;
  opacity: 1;
}

.link-item.hover::after {
  background-color: #979797;
  opacity: 1;
}
</style>
