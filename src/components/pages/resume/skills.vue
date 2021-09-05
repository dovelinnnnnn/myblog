<template>
  <div>
    <!-- .title_content -->
    <div v-for="(items, index) in skills" :key="index">
      <div class="title_content" style="float: none">
        <div class="text_content">{{ items.title }} skills</div>
        <div class="clear"></div>
      </div>
      <!-- /.title_content -->

      <div class="skills" v-for="(val, key, no) in items.contains" :key="no">
        <!-- .skillbar -->
        <div
          class="progress"
        >
        <p class="skillValue"> {{val+'%'}}</p>
          <div class="progress-bar" role="progressbar" :style="'width: '+val+'%'" :aria-valuenow="val" aria-valuemin="0" aria-valuemax="100">
            <span>{{ key }}</span>
          </div>
        </div>
        <!-- /.skillbar -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    skills () {
      return this.$store.state.skills
    }
  }
}
</script>

<style lang='scss'>
.progress {
    position: relative;
    margin-bottom: 15px;
    height: 22px !important;
    border-radius: unset !important;
    -webkit-transition: 0.4s linear;
    -moz-transition: 0.4s linear;
    -ms-transition: 0.4s linear;
    -o-transition: 0.4s linear;
    transition: 0.4s linear;
    -webkit-transition-property: width, background-color;
    -moz-transition-property: width, background-color;
    -ms-transition-property: width, background-color;
    -o-transition-property: width, background-color;
    transition-property: width, background-color;
}
.progress > .progress-bar {
    background: rgba(59, 89, 152, 0.8);
    text-align: left;
    span{
      background: rgba(0, 0, 0, 0.1);
      padding: 0 20px;
      height: 100%;
      line-height: 22px;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 11px;
      color: #fff;
      text-transform: capitalize;
    }
}
.skills .skillValue{
  position: absolute;
  right: 0 !important;
  line-height: 22px;
  font-size: 11px;
}
</style>
