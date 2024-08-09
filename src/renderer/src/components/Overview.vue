<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToReparatur = () => {
  router.push('/reparatur/1')
}
</script>

<template>
  <div class="actions">
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="goToReparatur">Go to Reparatur</a>
    </div>
  </div>
</template>
