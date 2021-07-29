<template>
    <ul class="resp-tabs-list">
      <li class="resp-tab-item resp-tab-active" @click="changeId(0)">
        <span class="tite-list">profile</span>
        <i class="icon_menu"><font-awesome-icon :icon="['fas', 'user']" /></i>
      </li>

      <li class="resp-tab-item" @click="changeId(1)">
        <span class="tite-list">resume</span>
        <i class="icon_menu"><font-awesome-icon :icon="['fas', 'tasks']"/></i>
      </li>

      <li class="resp-tab-item" @click="changeId(2)">
        <span class="tite-list">portfolio</span>
        <i class="icon_menu"><font-awesome-icon :icon="['fas','briefcase']"/></i>
      </li>

      <li class="resp-tab-item" @click="changeId(3)">
        <span class="tite-list">blog</span>
        <i class="f icon_menu"><font-awesome-icon :icon="['fab','microblog']"/></i>
      </li>

      <li class="resp-tab-item" style="margin-bottom: 48px !important" @click="changeId(4)">
        <span class="tite-list">contact</span>
        <i class="icon_menu"><font-awesome-icon :icon="['fas','envelope']"/></i>
      </li>

      <a href="#" id="print"><i class="icon_print"><font-awesome-icon :icon="['fas','print']"/></i> </a>
      <a href="#" id="downlowd"><i class="icon_print"><font-awesome-icon :icon="['fas','download']"/></i> </a>
    </ul>
</template>

<script>
export default {
  methods: {
    changeId (id) {
      this.$store.commit('changeNavBarId', id)
      // console.log(this.$store.state.navBarNo)
    }
  }
}
</script>

<style lang='scss' scoped>

.resp-vtabs .resp-tabs-list li {
  display: block;
  padding: 17px !important;
  margin: 0;
  cursor: pointer;
  float: left;
  text-align: center;
  box-shadow: 0 0 0 1px rgb(255 255 255 / 20%);
}
.tite-list {
  padding-left: 5px !important;
  font-size: 13px;
  position: relative;
  top: -6px;
  display: none;
}
/* .resp-vtabs .resp-tabs-list li:first-child {
  border-top: none;
} */
.resp-tabs-list{
    margin-left:-80px !important;
  }
.resp-tabs-list li {
  background: #3b5998;
  color: #fff;
}
.resp-tabs-list li {
  font-size: 13px;
  display: inline-block;
  padding: 13px 15px;
  margin: 0;
  list-style: none;
  cursor: pointer;
  // float: left;
}
.icon_menu {
  font-size: 22px;
  -webkit-transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  -moz-transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  display: inline-block;
  cursor: pointer;
  margin: 0;
  width: 42px !important;
  height: 42px !important;
  text-align: center;
  position: relative;
  z-index: 2;
  border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  line-height: 43px;
  background: #fff !important;
  color: #3b5998;
}
.resp-tab-item:hover {
  background: #fff;
  .icon_menu{
  background: #3b5998 !important;
  color: #fff;}
}
.resp-tab-active {
  border-bottom: none;
  background-color: #fff;
}
ul,
li,
nav {
  font: inherit;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
  list-style: none;
}
.resp-vtabs ul.resp-tabs-list {
  float: left;
  width: 0%;
}
#print, #downlowd {
    display: block;
    padding: 17px !important;
    margin: 0;
    cursor: pointer;
    float: left;
    text-align: center;
    box-shadow: 0 0 0 1px rgb(255 255 255 / 20%);
}
#print, #downlowd {
    background: rgba(45, 57, 63, 0.8);
}
.icon_print {
    font-size: 22px;
    display: inline-block;
    cursor: pointer;
    margin: 0;
    width: 42px !important;
    height: 42px !important;
    text-align: center;
    position: relative;
    z-index: 2;
    border-radius: 50%;
    -o-border-radius: 50%;
    -ms-border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    line-height: 43px;
    color: #fff;
}
@media only screen and (max-width: 767px) {
  ul.resp-tabs-list {
    display: none;
  }
}
// @media only screen and(min-width: 1200px)and (max-width: 1399px) {
//   .resp-tabs-list{
//     margin-left:9px;
//   }
// }
// @media only screen and (min-width: 1400px) {
//   .resp-tabs-list{
//     margin-left:11px;
//   }
// }
// @media only screen and (min-width: 1400px) {
//   .resp-tabs-list{
//     margin-left: 8px;
//     margin-right: 8px;
//   }
// }
</style>
