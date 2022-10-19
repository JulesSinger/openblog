<template>
    <div>
        <Header v-if="routePath !='/register' && routePath !='/login'" />
        <div class="router">
            <RouterView name="default" class="router-view" />
        </div>
    </div>
   
</template>
  
<script setup>

import Header from './components/header/Header.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

// route
const route = useRoute()

/**
 * get url
 */
const routePath = computed(() => route.path)

</script>