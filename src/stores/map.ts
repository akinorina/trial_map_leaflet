import { ref } from 'vue'
import { defineStore } from 'pinia'
import L from 'leaflet'

export const useMapStore = defineStore('map', () => {
  // Map
  const map = ref()

  function initialize() {
    map.value = L.map('map')
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map.value)
  }

  return {
    map,
    initialize
  }
})
