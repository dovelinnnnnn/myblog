<template>
  <div
    class="offcanvas offcanvas-scale"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-body">
      <img class="imgstyle" :src="projInfo.targetUrl"
      v-if="projInfo.type=='img'"
      alt="Visual Infography" />
      <iframe
      v-if="projInfo.type=='video'"
      src="https://player.bilibili.com/player.html?aid=459072622&bvid=BV1b541177dc&cid=295139855&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" />
    </div>
    <div class="offcanvas-title">{{projInfo.description}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: true
    }
  },
  computed: {
    projInfo () {
      return this.$store.state.projInfo
    }
  }
}
</script>

<style>
</style>
