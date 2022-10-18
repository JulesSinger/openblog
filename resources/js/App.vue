<template>
    <div>
        <Header v-if="routePath !='/register' && routePath !='/login'" />
        <div class="router">
            <RouterView name="default" class="router-view" />
        </div>
    </div>
   
  </template>
  
  <script>
  import Header from './components/header/Header.vue'
  export default {
    name: 'App',
  
    components: {
        Header
    },
  
    computed: {
        routePath() {
            return this.$route.path
        }
    },
  }
  </script>