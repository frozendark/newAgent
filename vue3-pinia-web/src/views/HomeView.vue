<template>
  <section>
    <h2>{{ app.title }}</h2>
    <p>Welcome to the Vue 3 + Pinia starter project.</p>

    <p>
      Current loading state: <strong>{{ app.loading ? 'Loading' : 'Idle' }}</strong>
    </p>
    <button @click="toggleLoading">Toggle loading state</button>

    <ExampleApiComponent />
  </section>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores';
import ExampleApiComponent from '@/components/ExampleApiComponent.vue';

const app = useAppStore();

const toggleLoading = () => {
  app.setLoading(!app.loading);
};
</script>

<style scoped>
section {
  padding: 1rem;
  border-radius: 8px;
  background-color: #f9fafb;
}

button {
  margin-top: 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
}
</style>
