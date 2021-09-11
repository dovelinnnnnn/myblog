<template>
  <fade-show></fade-show>
  <div class="wrapper">
    <!-- <section class="tab-content"> -->
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
    <!-- </section> -->
  </div>
  <settings />
</template>

<script>
import myself from './components/myself.vue'
import settings from './components/settings.vue'
import contentBox from './components/contentBox.vue'
import fadeShow from 'components/fadeShow.vue'
export default {
  name: 'App',
  components: {
    myself,
    settings,
    contentBox,
    fadeShow
  },
  setup () {}

}
</script>

<style lang='scss'>
@import url("assets/css/main.scss");
body {
  background-image: url("../public/images/bg/bg5.png");
}

.offcanvas {
  width: 366px;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) scale(0.1);
  bottom: unset !important;
  // position: fixed !important;
}
.offcanvas.show {
  transform: translate(-50%, -50%) scale(1) !important;
}
.offcanvas-body .imgstyle {
  width: 100%;
}
i{font-style:normal;}
</style>
