<template>
  <div class="col-lg-9 flexy_content">
    <div id="verticalTab" class="resp-vtabs">
      <div class="resp-tabs-container" >
          <navbar />
          <toggle :navBarId=0><profile /></toggle>
          <toggle :navBarId=1><resume /></toggle>
          <toggle :navBarId=2 ><portfolio /></toggle>
          <toggle :navBarId=3 ><blog /></toggle>
          <toggle :navBarId=4 ><contact /></toggle>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from 'components/navbar.vue'
import profile from 'components/pages/profile.vue'
import resume from 'components/pages/resume.vue'
import portfolio from 'components/pages/portfolio.vue'
import blog from 'components/pages/blog.vue'
import contact from 'components/pages/contact.vue'
import toggle from 'components/toggle.vue'
export default {
  components: {
    navbar, toggle, profile, resume, portfolio, blog, contact
  },
  methods: {
    changeId (id) {
      this.$store.commit('changeNavBarId', id)
      // console.log(this.navBarNo)
    }
  },
  computed: {
    navBarNo () {
      return this.$store.state.navBarNo
    }
  }
}
</script>

<style lang='scss'>

#verticalTab {
  z-index: 1;
  height: 100%;
  display: block;
  width: 100%;
  margin: 0px;
}
.resp-tabs-container {
    padding: 0;
    background-color: #fff;
    clear: left;
}
.resp-tabs-container {
    padding: 0;
    background-color: #f4f4f4;
    float: left;
    width: 89%;
    height: 580px;
    clear: none;
    position: relative;
    margin-left: 80px;
}
.accordion{
  height: 100%;
}
@media only screen and (max-width:768px){
.resp-vtabs .resp-tabs-container {
    margin-left: 0px !important;
    float: none;
    width: 100%;
    min-height: initial;
    clear: none;
}
}
@media only screen and (min-width:768px)and (max-width:800px){
.resp-vtabs .resp-tabs-container {
    margin-left: 80px !important;
    border: none;
    float: left;
    width: 89%;
    min-height: initial;
    clear: none;
}
}
@media only screen and (max-width: 767px){
.widget-profil, .flexy_content {
    // margin-left: 10px;
    // margin-right: 10px;
    height: 100%;
}
.resp-tabs-container{
  height: 100%;
}
}
@media only screen and (min-width:768px){
  .flexy_content{
  padding-left:0 !important;
  padding-right:0 !important;
  }
}
@media only screen and (min-width: 992px)and (max-width:1199px){
  .flexy_content {
    padding-left: 3px !important;
  }
}
@media only screen and (min-width: 850px) and (max-width: 1199px){
.resp-tabs-container {
    margin-left: 79px;
}}
@media only screen and (min-width: 1200px)and (max-width: 1399px){
  .resp-tabs-container {
    margin-left:85px;
}
}

@media only screen and (min-width: 1400px){
  .resp-tabs-container {
    width: 90%;
    margin-left:86px;
}
}
</style>
