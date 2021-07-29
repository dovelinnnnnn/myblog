import { createStore } from 'vuex'
export default createStore({
  state: {
    navBarNo: 0,
    myProfile: {
      myInfo: {},
      myIntroduce: {}
    }
  },
  mutations: {
    changeNavBarId (state, id) {
      state.navBarNo = id
      // console.log(state.navBarId)
    }
  },
  actions: {
    dlProfileMsg () {
      this.$axios()
    }
  },
  modules: {
  }
})
