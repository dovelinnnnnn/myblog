<template>
<div class="wrapper">
  <section class="tab-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <myself />
            <content-box />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<settings />

</template>

<script>
import myself from './components/myself.vue'
import settings from './components/settings.vue'
import contentBox from './components/contentBox.vue'
export default {
  name: 'App',
  components: {
    myself, settings, contentBox
  }

}
</script>

<style lang='scss'>
@import url('assets/css/main.scss');

</style>
