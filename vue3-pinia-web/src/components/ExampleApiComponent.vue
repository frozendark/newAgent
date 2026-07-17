<template>
  <section class="example-card">
    <h3>API Example</h3>
    <button :disabled="loading" @click="fetchData">
      {{ loading ? 'Loading...' : 'Fetch Example Data' }}
    </button>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="data" class="data">{{ data }}</div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getExample } from '@/api/service';

const loading = ref(false);
const error = ref('');
const data = ref<string | null>(null);

const fetchData = async () => {
  loading.value = true;
  error.value = '';
  data.value = null;

  try {
    const result = await getExample<{ message: string }>('/example');
    data.value = result.message;
  } catch (err) {
    error.value = (err as Error).message || 'Failed to fetch example data.';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.example-card {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f3f6fb;
  border-radius: 0.75rem;
}

button {
  background: #42b983;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error {
  margin-top: 0.75rem;
  color: #d64545;
}

.data {
  margin-top: 0.75rem;
  color: #333;
}
</style>
