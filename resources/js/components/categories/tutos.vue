<template>
    <div id="tutos-page">
        <Flag title="Tutoriels Informatique" subtitle="Vous trouverez ici des tutoriels informatique en tout genre : GIT, Design, Web ..." />
        <div class="tutos-container">
            <CategoryPreview v-for="tuto in tutos" :category="tuto" :key="tuto" />
        </div>
    </div>
</template>

<script>
import CategoryPreview from './CategoryPreview.vue'
import Flag from '../helpers/Flag.vue'
import { useCategories } from '../../api/categories'
export default {
    name: 'Tutos',
    
    components: {
        CategoryPreview,
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