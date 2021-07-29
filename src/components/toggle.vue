<template>
  <div>
      <c-head
        :navBarId='navBarId'
        @click="changeId(navBarId)"
      ></c-head>
      <transition name="fade" v-show="navBarNo==navBarId">
        <c-scrollbar height="580px">
            <slot></slot>
        </c-scrollbar>
      </transition>
    </div>
</template>

<script>
import cHead from 'components/c-head.vue'
export default {
  props: ['navBarId'],
  components: {
    cHead
  },
  data () {
    return {
      No: ['One', 'Two', 'Three', 'Four', 'Five'],
      clientWidth: document.body.clientWidth
    }
  },
  computed: {
    navBarNo () {
      return this.$store.state.navBarNo
    }
  },
  methods: {
    changeId (id) {
      if (this.navBarNo !== id) {
        this.$store.commit('changeNavBarId', id)
      } else {
        this.$store.commit('changeNavBarId', -1)
      }
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.clientWidth = document.body.clientWidth
        that.clientWidth = window.clientWidth + 17
      })()
    }
  },
  watch: {
    // elint-disable-next-line
    clientWidth (newVal, oldVal) {
      // console.log(newVal)
      if (newVal > 767 && this.navBarNo === -1) {
        this.$store.commit('changeNavBarId', 0)
      }
    }
  }
}
</script>

<style lang='scss' >
@media only screen and(max-width:767px){
.c-scrollbar{
  height: 100% !important;
}
}
.c-scrollbar-content {
  margin-right: 25px;
  padding: 15px;
}

</style>
