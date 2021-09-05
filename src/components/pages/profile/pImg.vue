<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel"  data-bs-interval='3000'>
    <div class="carousel-inner">
      <div v-for='(imgNo,index) in pImg' :key=index :class="{'carousel-item':true, active:index==0}">
        <img :src="'images/img-profile/'+imgNo" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // pic name
      pImg: ['about_1.jpg', 'about_2.png', 'about_3.png']
    }
  }
}
</script>

<style>

</style>
