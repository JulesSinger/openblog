<template>
  <div ref="switchRef" @click="switchEvent">
    <transition name="fade" mode="out-in">
      <div v-if="darkMode">
        <img src="/images/icons/sun.svg" alt="sun" style="width:40px">
      </div>
      <div v-else>
        <img src="/images/icons/moon.svg" alt="sun" style="width:30px">
      </div>
    </transition>
  </div>
</template>

<script setup>

import { ref, nextTick } from 'vue'

const darkMode = ref(false)
const switchRef = ref(null)
const switchMode = ref(true)
const emit = defineEmits('toggleTheme')

if (localStorage.getItem('preferredDarkMode')) {
  if (localStorage.getItem('preferredDarkMode') === 'true') {
    nextTick(() => {
      switchMode.value = true
      switchToggle()
    })
  } else {
    nextTick(() => {
      switchMode.value = false
      switchToggle()
    })
  }
}

const darkAttrs = () => {
  if(darkMode.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('preferredDarkMode', 'true')
  } else {
    document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('preferredDarkMode', 'false')
  }
}

const switchToggle = () => {
  if(switchMode.value) {
    darkMode.value = true
    darkAttrs()
    switchMode.value = false
  } else {
    darkMode.value = false
    darkAttrs()
    switchMode.value = true
  }
}

const switchEvent = () => {
  nextTick(() => {
    switchToggle()
  })
  emit('toggleTheme')
}
    
</script>