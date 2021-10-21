<template>
    <div>
        <Header />
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
    }
}
</script>