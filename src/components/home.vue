<template>
  <div class="wrapper">
    <section class="tab-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-3 col-sm-0 bgcolor" style="padding-right:0;padding-left:0">
                <myself />
              </div>
              <div
                class="col-md-9 flexy_content"
              >
                <div
                  id="content"
                  class="row"
                  style="display: block; width: 100%; margin: 0px"
                >
                  <navbar class="resp-tabs-list" />
                  <div class="resp-tabs-container" style="height: 580px">
                    <profile v-show="$store.state.navbarId == 1" />
                    <resume v-show="$store.state.navbarId == 2" />
                    <portfolio v-show="$store.state.navbarId == 3" />
                    <blog v-show="$store.state.navbarId == 4" />
                    <contect v-show="$store.state.navbarId == 5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// 引入样式文件

import contect from "components/details/contect";
import blog from "components/details/blog";
import profile from "components/details/profile";
import portfolio from "components/details/portfolio";
import resume from "components/details/resume";
import myself from "components/myself";
import Navbar from "./tools/navbar.vue";
export default {
  components: {
    contect,
    blog,
    portfolio,
    resume,
    myself,
    profile,
    Navbar,
  },
};
</script>

<style lang="scss">
@import "assets/css/colors/color.scss";

.wrapper{
    display: block;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 50%;
    margin: -290.5px auto 0 auto;
}
.bgcolor{
  background-color: $maincolor;
  // color: $fontcolor;
}
@media (min-width: 1200px){
.container {
    width: 1130px !important;
}
}
@media (min-width: 992px){
.container {
    width: 970px;
}
.col-md-9{
  padding: 0;
}
}
@media (min-width: 768px){
.container {
    width: 750px;
}
}

#content {
  z-index: 1;
  height: 100%;
  /* background: #fff; */
}
.resp-tabs-container {
  padding: 0;
  /* background-color: #f4f4f4; */
  float: left;
  width: 88%;
  height: 580px;
  clear: none;
  margin-left: 15px;
}
</style>