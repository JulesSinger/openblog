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
import store from './store'
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

    mounted() {
        //Read the status data locally and write it to vuex when loading the page
        if (sessionStorage.getItem("store")) {
            store.replaceState(
                Object.assign(
                    {},
                    store.state,
                    JSON.parse(sessionStorage.getItem("store"))
                )
            );    
        }

        //Save the status data in vuex to sessionStorage before page refresh
        window.addEventListener(
            "beforeunload",()=>{
            sessionStorage.setItem("store",JSON.stringify(store.state));
        });
    }
}
</script>