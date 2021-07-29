<template>
  <div ref="contentBox" class="container">
    <div style="position:relative" v-resize='resize'>
      <slot ></slot>
    </div>
    <div :style="{'height': barHeight+'px','background-color': color}" class="bar"></div>
  </div>
</template>

<script>
export default {
  props: ['No'],
  data () {
    return {
      // 内部元素的高度
      scrollHeight: NaN,
      color: '#000',
      // 内容框的高度
      // barHeight: NaN
      // navBarNo: this.$store.state.navBarNo
      clientHeight: NaN
    }
  },
  computed: {
    barHeight () {
      // return null
      return this.clientHeight * this.clientHeight / this.scrollHeight
    }

  },
  methods: {
    resize () { // 当宽高变化时就会执行
      this.clientHeight = this.$refs.contentBox.clientHeight
      console.log(1)
      // 执行某些操作
    }
  },
  mounted () {
    const that = this
    // that.resize()
    if (that.$refs.contentBox.clientHeight) {
      that.scrollHeight = that.$refs.contentBox.scrollHeight
      that.clientHeight = that.$refs.contentBox.clientHeight
    }
  },
  watch: {
    clientHeight (val) {
      this.clientHeight = val
    }
  },
  directives: { // 使用局部注册指令的方式
    resize: { // 指令的名称
      bind (el, binding) { // el为绑定的元素，binding为绑定给指令的对象
        let width = ''
        let height = ''
        function isReize () {
          const style = document.defaultView.getComputedStyle(el)
          if (width !== style.width || height !== style.height) {
            binding.value() // 关键
          }
          width = style.width
          height = style.height
          console.log(height)
        }
        el.__vueSetInterval__ = setInterval(isReize, 300)
      },
      unbind (el) {
        clearInterval(el.__vueSetInterval__)
      }
    }
  }
}
</script>

<style lang='scss'>
.container{
  height: 100%;
}
.bar{
  position: absolute;
  right: 0px;
  width: 10px;
  top: 0px;
  float: left;
  cursor:pointer;
  /* overflow: hidden; */
}
@media only screen and(max-width:767px) {
  .bar{
    display: none !important;
  }
}
</style>
