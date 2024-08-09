<script setup>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goToOverview = () => {
  router.push('/')
}

window.api.getReparaturById(route.params.id, (err, row) => console.log(row))

</script>

<template>
  <h1>Animals!</h1>
  <h2>{{ $route.params.id }}</h2>
  <p>I want to learn about at least one new animal every year.</p>
  <a target="_blank" rel="noreferrer" @click="goToOverview">Go to Reparatur</a>
</template>
