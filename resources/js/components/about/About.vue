<template>
  <div>
    <Flag title="A PROPOS DE L'OPENBLOG" subtitle=""/>

    <div id="about-page">
      <div class="about-container container">
        <div class="about-section">
          <h2>Dans quel but à été créé L'OpenBlog ?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto necessitatibus reprehenderit quaerat debitis excepturi, saepe alias itaque ad ut eaque dicta autem quae magnam nam odio expedita numquam consectetur?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero suscipit ut corporis itaque dolores quasi delectus voluptas illum dignissimos autem sunt aut nesciunt, odio inventore ullam repellat laborum sed!</p>
        </div>

        <div class="about-section">
          <h2>L'OpenBlog, une double signification</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nisi esse aut officiis inventore quaerat ratione sint quae vitae qui non adipisci, quam quas porro neque recusandae, at dolorum nesciunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam alias doloremque ea est aut praesentium molestias, impedit, dolorum nostrum quisquam numquam reprehenderit placeat ex consequuntur veritatis aliquid sequi quasi suscipit!</p>
        </div>

        <div class="about-actions">
          <div class="action container" id="first-action">
            <p>Vous souhaitez publier un article ?</p>
            <router-link :to="{name: 'Participate' }" class="btn btn-markup">J'y vais</router-link>
          </div>

          <div class="action container">
            <p>Vous souhaitez lire nos articles ?</p>
            <router-link :to="{name: 'Home'}" class="btn btn-markup">C'est parti</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Flag from '../helpers/Flag.vue'
</script>