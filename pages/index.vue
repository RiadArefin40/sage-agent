<script setup lang="ts">
definePageMeta({
  layout: 'agency'
})
import { useAuthStore } from '@/stores/auth'
const { data, status, getSession } = useAuth()
const authUserData = data
const auth = useAuthStore()

</script>


<template>
    <div>
        {{ authUserData.data }}
    </div>
</template>

<style scoped></style>
