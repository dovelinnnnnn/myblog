<template>
  <div class="contentBox">
    <!-- .title -->
    <h1>简介 - 关于我</h1>
    <div class="row top-p">
      <div class="col-lg-6 profile-l">
        <!--About me-->
      <myDetails :info='myDetails' />
      </div>
      <!-- End left-wrap -->

      <div class="col-lg-6 col-xxl-5 profile-r">
        <pImg />
      </div>
    </div>
    <div class="clear"></div>

    <div class="row" id="services">
      <myService :services=services />
    </div>
    <!-- End Services -->

    <div class="clear"></div>
    <div class="border-list"></div>

    <div class="row">
      <my-service-two :services=services />
    </div>
    <div class="clear"></div>
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
.about {
  margin-bottom: 30px !important;
}
ul.about li {
  margin: 0;
  color: #717171;
  display: block;
  font-size: 13px;
  border-bottom: 1px solid #e6e6e6;
}
.glyphicon {
  margin-right: 8px;
  color: #3b5998;
}
label {
  color: #3b5998;
  margin-bottom: 5px;
}
.glyphicon:empty {
  width: 1em;
}
ul.about li span.value {
  width: 220px;
  text-align: left;
  float: right;
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
