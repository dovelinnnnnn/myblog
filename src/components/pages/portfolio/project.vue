<template>
  <div></div>
</template>

<script>
import projectIframeVue from './projectIframe.vue'
export default {
  data () {
    return {
      ifshow: false
    }
  },
  components: [projectIframeVue],
  methods: {
    change () {
      this.ifshow = true
    }
  }
}
</script>

<style>
</style>
