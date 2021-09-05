import { createStore } from 'vuex'
import axios from 'axios'
const baseUrl = 'http://127.0.0.1:5000/'
axios.defaults.baseURL = baseUrl
export default createStore({
  state: {
    // 菜单栏
    navBarNo: 0,
    // 简介页面数据
    myProfile: {
      myDetails: {
        myInfo: {
          bilibili: {},
          github: {}
        },
        myIntroduce: ''
      },
      serviceInfo: {}
    },
    // 介绍页面数据
    skills: [
      {
        title: '',
        contains: {
        }
      }
    ],
    myEvent: [
      {
        title: '',
        atteibutes: [
          {
            title: '', data: ''
          }
        ]
      }
    ],

    // 工作成果界面
    projInfo: {
      type: '',
      targetUrl: '',
      description: ''
    }
  },
  getters: {
  },
  mutations: {
    // 菜单栏控制
    changeNavBarId (state, id) {
      state.navBarNo = id
    },
    // 保存简介页面数据
    changeProfileMsg (state, data) {
      state.myProfile.myDetails.myInfo = data.myInfo
      state.myProfile.myDetails.myIntroduce = data.myIntroduce
      state.myProfile.serviceInfo = data.serviceInfo
    },
    // 介绍页面数据保存
    changeResumeMsg (state, data) {
      state.skills = data.skills
      state.myEvent = data.myEvent
    },
    // 项目页面项目显示切换
    changeProjInfo (state, info) {
      state.projInfo = info
    }
  },
  actions: {
    // 下载简介页面数据
    dlProfileMsg () {
      axios({ method: 'get', url: '/profileMsg' }).then(res => {
        // console.log(res, 'success')
        // console.log(res.data)
        this.commit('changeProfileMsg', res.data)
      }).catch(error => {
        console.log(error, 'false')
      })
    },
    // 下载简介页面数据
    dlResumeMsg () {
      axios({ method: 'get', url: '/resumeMsg' }).then(res => {
        // console.log(res, 'success')
        // console.log(res.data)
        this.commit('changeResumeMsg', res.data)
      }).catch(error => {
        console.log(error, 'false')
      })
    }
  },
  modules: {
  }
})
