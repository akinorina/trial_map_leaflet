<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useMapStore } from '@/stores/map'

const mapStore = useMapStore()
const { map } = storeToRefs(mapStore)

onMounted(() => {
  mapStore.initialize()
  map.value.setView([35.5, 139.5], 9)
})
</script>

<template>
  <main>
    <div id="map"></div>
  </main>
</template>

<style scoped lang="scss">
#map {
  width: 100vw;
  height: 100vh;
}
</style>
