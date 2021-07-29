<template>
  <h2 :class="{ 'active': navBarId===navBarNo,'resp-accordion':true }">
    <i class='icon_menu'>
      <font-awesome-icon :icon="[cHeaders[navBarId][1], cHeaders[navBarId][2]]"/>
    </i>
    <span class="tite-list-resp">{{cHeaders[navBarId][0]}}</span>
    <i class="arrow-tabs"
      ><font-awesome-icon :icon="['fas', 'chevron-down']"
    /></i>
  </h2>
</template>

<script>
export default {
  props: ['navBarId', 'navBarNo'],
  data () {
    return {
      cHeaders: [
        ['profile', 'fas', 'user'],
        ['resume', 'fas', 'tasks'],
        ['portfolio', 'fas', 'briefcase'],
        ['blog', 'fab', 'microblog'],
        ['contact', 'fas', 'envelope']
      ]
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
.active {
  background: rgba(59, 89, 152, 0.8) !important;
}
h2.resp-accordion {
  font-size: 17px;
  text-transform: uppercase;
  color: #fff;
  padding: 0.32em 0em 0.32em 0.7em;
  margin: 0;
  list-style: none;
  cursor: pointer;
  background: #3b5998;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  line-height: 0px;
  cursor: pointer;
  padding: 5px;
  display: none;
  padding: 10px 15px;
}
h2.resp-accordion:hover {
  background: rgba(59, 89, 152, 0.8) ;
  .icon_menu {
    border: 1px solid #3b5998;
  }
}
h2.resp-accordion:first-child {
  border-top: 1px solid rgba(255, 255, 255, 0.1) ;
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
  background: #fff ;
  color: #3b5998 ;
}

.tite-list-resp {
  position: relative;
  top: -3px;
  left: 10px;
}
.arrow-tabs {
  float: right;
  margin-top: 13px;
  font-size: 12px !important;
}
@media only screen and (max-width: 767px) {
  h2.resp-accordion {
    display: block;
  }
}
@media only screen and (min-width: 768px) {
  h2.resp-accordion {
    display: none;
  }
}
</style>
