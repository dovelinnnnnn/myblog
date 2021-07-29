<template>
  <div>
    <ul class="nav-list">
      <li
        :class="($store.state.navbarId == 1 || '') && 'icon_menu_active'"
        @click="changebar(1)"
      >
        <span class="title-list">profile</span>
        <i class="fa fa-user icon_menu"></i>
      </li>

      <li
        :class="($store.state.navbarId == 2 || '') && 'icon_menu_active'"
        @click="changebar(2)"
      >
        <span class="title-list">resume</span>
        <i class="fa fa-tasks icon_menu"></i>
      </li>

      <li
        :class="($store.state.navbarId == 3 || '') && 'icon_menu_active'"
        @click="changebar(3)"
      >
        <span class="title-list">portfolio</span>
        <i class="fa fa-briefcase icon_menu"></i>
      </li>

      <li
        :class="($store.state.navbarId == 4 || '') && 'icon_menu_active'"
        @click="changebar(4)"
      >
        <span class="title-list">blog</span>
        <i class="fa fa-bullhorn icon_menu"></i>
      </li>

      <li
        :class="($store.state.navbarId == 5 || '') && 'icon_menu_active'"
        @click="changebar(5)"
        style="margin-bottom: 48px !important"
      >
        <span class="title-list">contact</span>
        <i class="fa fa-envelope icon_menu"></i>
      </li>

      <a href="#" id="print"><i class="fa fa-print icon_print"></i> </a>
      <a href="#" id="download"><i class="fa fa-download icon_print"></i> </a>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
    };
  },
  methods: {
    changebar(i) {
      this.$store.commit("changeBarId", i);
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/css/colors/color.scss";
.icon_menu_active {
  background-color: white;
  i {
    background-color: $maincolor;
    color: white;
  }
}

ul {
  float: left;
  width: 9%;
  margin-bottom: 0;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  > li {
    background-color: $maincolor;
    font-size: 13px;
    display: inline-block;
    padding: 17px !important;
    border-collapse: collapse;
    list-style: none;
    cursor: pointer;
    float: left;
    transition: 0.5s;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
    i {
      background-color: white;
      color: $maincolor;
    }
  }
  li:hover {
    background-color: white;
    i {
      background-color: $maincolor;
      color: white;
    }
  }
  #print,
  #download {
    display: block;
    padding: 17px !important;
    margin: 0;
    cursor: pointer;
    float: left;
    text-align: center;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
  }
  #print,
  #download {
    background: rgba(45, 57, 63, 0.8);
  }
  #print:hover,
  #downlowd:hover {
    background: rgba(45, 57, 63, 1);
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
  }
}
.title-list {
  display: none;
}

/*图标样式 */
.icon_menu {
  font-size: 22px;
  -webkit-transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  -moz-transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  display: inline-block;
  cursor: pointer;
  float: left;
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

@media only screen and (max-width: 800px) {
  .title-list {
    display: inline-block;
  }
}
</style>