<template>
  <div id="app">
    <header>
      <h1>Vue 3 + Pinia Project</h1>
      <nav>
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#app {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

header {
  margin-bottom: 2rem;
}

nav a {
  color: #42b983;
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>
