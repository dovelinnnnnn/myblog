<template>
  <div class="contentBox">

    <h1>简介 - 关于我</h1>

    <div class="row">
      <!-- 个人信息 -->
      <div class="col-lg-6">
        <myDetails :info='myDetails' />
      </div>

      <div class="col-lg-6 col-xxl-5">
        <!-- 轮播图 -->
        <pImg />
      </div>
    </div>

    <div class="row" id="services">
      <!-- 我的服务1-->
      <myService :services=services />
    </div>

    <div class="border-list"></div>
    <div class="row">
      <!-- 我的服务2 -->
      <my-service-two :services=services />
    </div>
  </div>
</template>

<script>
import myDetails from 'components/pages/profile/myDetails'
import PImg from 'components/pages/profile/pImg'
import myService from 'components/pages/profile/myService'
import myServiceTwo from 'components/pages/profile/myServiceTwo'
export default {
  components: {
    myDetails, PImg, myService, myServiceTwo
  },
  computed: {
    myDetails () {
      // console.log(this.$store.state.myProfile)
      return this.$store.state.myProfile.myDetails
    },
    services () {
      console.log(this.$store.state.myProfile.serviceInfo)
      return this.$store.state.myProfile.serviceInfo
    }
  },
  created () {
    // const that = this
    // console.log(this.serviceInfo)
    this.$store.dispatch('dlProfileMsg')
  }
}
</script>

<style lang='scss'>
/* title */
// .contentBox{
//   padding: 1rem 1.5rem;
// }
.carousel-item{
  text-align: center;
}

.resp-tabs-list,
p {
  margin: 0;
  padding: 0;
}

.border-list {
  width: 80%;
  margin: auto;
  margin-top: 30px;
  border: 1px solid #3b5998;
}
div#accordionExample{
  height: 100%;
}

@media screen and (max-width: 600px) {
  #services .pack-service {
    width: 100% !important;
  }
}

@media only screen and (max-width: 800px) {
  ul.about li span.value {
    margin-right: 30px;
  }
  .c-scrollbar-content {
    margin-right: 0px;
  }
}

@media screen and (max-width: 1199px) {
  .value {
    width: 196px;
  }
}

@media only screen and(max-width:500px) {
  .profile-r{
    display: none;
  }
}
</style>
