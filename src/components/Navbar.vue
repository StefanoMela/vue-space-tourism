<script>
export default {
  data(){
    return {
      isActive: false,
    }
  },
};
</script>

<template>
  <div class="navbar nav">
    <div class="nav_logo_container">
      <img src="/src/assets/img/shared/logo.svg" class="nav_logo" alt="" />
    </div>
    <div class="nav_link_container ">
      <ul class="nav_link_list barlow-condensed-regular">
        <li class="link-item" :class="{active: isActive}">
          <span class="barlow-condensed-bold">00</span> Home
        </li>
        <li class="link-item" :class="{active: isActive}">
          <span class="barlow-condensed-bold">01</span> Destination
        </li>
        <li class="link-item" :class="{active: isActive}">
          <span class="barlow-condensed-bold">02</span> Crew
        </li>
        <li class="link-item" :class="{active: isActive}">
          <span class="barlow-condensed-bold">03</span> Technology
        </li>
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
  content: "";
  display: block;
  width: 40rem;
  height: 1px;
  background-color: #9797975f;
}

.nav_link_list {
  display: flex;
  background-color: rgba(188, 186, 186, 0.125);
  backdrop-filter: blur(4px);

  padding: 2.5rem;

  span {
    margin-right: 0.5rem;
  }

  .link-item {
    margin: 0rem 3rem;
    font-size: 18px;
    letter-spacing: 2.7px;
    line-height: 19px;
    filter: none;
  }
  .link-item:hover{
   border-bottom: 1px solid white;
  }

  .active{
    border-bottom: 1px solid red;
  }

}
</style>
