import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const count = ref(10);
  const name = ref("Eduardo");
  const user = ref({});
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
