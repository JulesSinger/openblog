<template>
    <div id="tutos-page">
        <Flag title="Tutoriels Informatique" subtitle="Vous trouverez ici des tutoriels informatique en tout genre : GIT, Design, Web ..." />
        <div class="tutos-container">
            <Category v-for="tuto in tutos" :category="tuto" :key="tuto" />
        </div>
    </div>
</template>

<script>
import Category from './Category.vue'
import Flag from '../helpers/Flag.vue'
import { useCategories } from '../../api/categories'
export default {
    name: 'Tutos',
    
    components: {
        Category,
        Flag
    },

  setup() {
    let tutos = useCategories()

    return {
      tutos
    }
  }
}
</script>