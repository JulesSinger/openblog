<template>
  <div>
    <div id="article-page">

      <Flag title="DESIGN" subtitle="COMPREND LA DIFFERENCE UI/UX"/>
      
      <div class="container article-container">
        <div class="article-header">
          <h2 id="article-category">DESIGN</h2>
          <div>
            <img src="/images/icons/favicon_full.svg" alt="fav">
            <a href="#comment-title" id="comments-number">9 commentaires</a>
          </div>
        </div>

        <div class="article-main-content">
          <h2 id="article-title">COMPRENDRE LA SELECTION NATURELLE</h2>
          <p id="article-infos">07/12/2020 | 9 mins | Singer Jules </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in quia inventore, ab recusandae, odit a eaque mollitia obcaecati maiores corrupti ullam fuga. Earum labore reiciendis praesentium. Ut, libero consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet adipisci vel! Suscipit libero officiis natus nam in ab, dicta, voluptas fuga asperiores modi similique odit consectetur sint minima blanditiis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit eum tenetur natus at commodi impedit ipsum reprehenderit quia totam unde, soluta perspiciatis nihil vero ratione cumque! Nam hic dolor soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur numquam magnam necessitatibus mollitia et fuga alias? Modi, veritatis est. Voluptatem id atque excepturi nobis quas quibusdam porro illo ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, labore voluptatibus, voluptas eaque deleniti animi aliquam odit quibusdam saepe totam est? Tenetur unde velit non recusandae commodi dolor itaque nihil!Lorem</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores quod itaque reiciendis blanditiis, rem inventore autem molestiae eos unde architecto. Corrupti doloribus numquam accusamus quis dolores? Vitae, nihil magni!Lorem</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam vitae rem quam! Vero magnam inventore quasi. Quas culpa, corrupti ipsam facilis deserunt quia accusantium sint fugiat? Voluptatum quas voluptatibus voluptas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae inventore saepe earum quia quibusdam molestiae porro quisquam blanditiis amet, dolore dolores libero odit assumenda pariatur quo officia fugiat laborum nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores consequatur quod illum odit cum consectetur eaque qui! Pariatur a quos qui magnam blanditiis et eius nesciunt sint, accusamus ut.</p>
          <h2 id="comment-title">COMMENTAIRES</h2>
        </div>

      
        <div class="comments-wrapper">
          <div class="comment-post">

            <label for="content">Votre commentaire :</label>
            <textarea placeholder="Ecrivez votre commentaire ici" name="content" id="content" rows="5"></textarea>
            <div>
              <button class="btn btn-markup">POSTER LE COMMENTAIRE</button>
            </div>
          </div>

          <div class="comments">
            <Comment :comment="comment" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Comment from './Comment.vue'
import Flag from '../../helpers/components/Flag.vue'
export default {
  name: 'Article',

  components: {
    Comment,
    Flag
  },

  data () {
    return {
      comment: {
        title: "Un commentaire",
        author : "Singer Jules",
        date: "07/12/2020",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cum optio maiores excepturi iusto similique nam, provident hic nobis commodi, voluptatum dolorem aut inventore non labore quod, error perferendis maxime."
      }
    }
  }
}
</script>