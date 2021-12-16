<template>
  <div>
    <div id="post-page">

      <Flag title="DESIGN" subtitle="COMPREND LA DIFFERENCE UI/UX"/>
      
      <div class="container post-container">
        <div class="post-header">
          <h2 id="post-category">DESIGN</h2>
          <div>
            <img src="/images/icons/favicon_full.svg" alt="fav">
            <a href="#comment-title" id="comments-number">9 commentaires</a>
          </div>
        </div>

        <div class="post-main-content">
          <h2 id="post-title">COMPRENDRE LA SELECTION NATURELLE</h2>
          <p id="post-infos">07/12/2020 | 9 mins | Singer Jules </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in quia inventore, ab recusandae, odit a eaque mollitia obcaecati maiores corrupti ullam fuga. Earum labore reiciendis praesentium. Ut, libero consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet adipisci vel! Suscipit libero officiis natus nam in ab, dicta, voluptas fuga asperiores modi similique odit consectetur sint minima blanditiis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit eum tenetur natus at commodi impedit ipsum reprehenderit quia totam unde, soluta perspiciatis nihil vero ratione cumque! Nam hic dolor soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur numquam magnam necessitatibus mollitia et fuga alias? Modi, veritatis est. Voluptatem id atque excepturi nobis quas quibusdam porro illo ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, labore voluptatibus, voluptas eaque deleniti animi aliquam odit quibusdam saepe totam est? Tenetur unde velit non recusandae commodi dolor itaque nihil!Lorem</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores quod itaque reiciendis blanditiis, rem inventore autem molestiae eos unde architecto. Corrupti doloribus numquam accusamus quis dolores? Vitae, nihil magni!Lorem</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam vitae rem quam! Vero magnam inventore quasi. Quas culpa, corrupti ipsam facilis deserunt quia accusantium sint fugiat? Voluptatum quas voluptatibus voluptas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae inventore saepe earum quia quibusdam molestiae porro quisquam blanditiis amet, dolore dolores libero odit assumenda pariatur quo officia fugiat laborum nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores consequatur quod illum odit cum consectetur eaque qui! Pariatur a quos qui magnam blanditiis et eius nesciunt sint, accusamus ut.</p>
          <h2 id="comment-title">COMMENTAIRES</h2>
        </div>

      
        <div class="comments-wrapper">
          <CommentCreate />
          <Comments />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Comments from '../comments/Comments.vue'
import CommentCreate from '../comments/CommentCreate.vue'
import Flag from '../helpers/Flag.vue'
export default {
  name: 'Post',

  components: {
    CommentCreate,
    Comments,
    Flag
  },
}
</script>