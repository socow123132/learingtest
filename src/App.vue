<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->




  </header>
  <nav>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/my">TodoItem</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  height: 50px;
  background-color: aquamarine;
}

main {
  width: 85%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #ccc;
  min-height: 70vh;
  border-radius: 4px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: rgb(65, 111, 194);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 20px;
  text-decoration: none;
  color: #bbb;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>
