import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    title: 'Vue 3 + Pinia Web',
    loading: false,
    error: '',
  }),
  getters: {
    hasError: state => !!state.error,
  },
  actions: {
    setLoading(value: boolean) {
      this.loading = value;
    },
    setError(message: string) {
      this.error = message;
    },
    clearError() {
      this.error = '';
    },
  },
});
