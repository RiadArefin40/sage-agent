<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()


</script>

<template>

<h1>{{ auth.count }}</h1>

<button @click="auth.increment">Add</button>

</template>

<style scoped></style>
