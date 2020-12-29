<template>
  <div id="app">
      <home />
  </div>
</template>
<script>
import home from "components/home";
export default {
  components: { home },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}

ul,li{
  list-style: none;
}
img{vertical-align:top;border:none}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app {
  position: fixed;
  z-index: -1;
  background-image: url(assets/images/background.png);
  background-repeat: repeat;
  height: 100%;
  width: 100%;
  overflow: auto;
}
body{
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: #333333;
    overflow-x: hidden;
    /* background-image: url(../images/bg/bg5.png); */
    padding: 0;
}

.clearfix:before, .clearfix:after, .row:before, .row:after {
    content: '\0020';
    display: block;
    overflow: hidden;
    visibility: hidden;
    width: 0;
    height: 0;
}
.row, .clearfix {
    zoom: 1;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
ul, li, nav {
    font: inherit;
    vertical-align: baseline;
    margin: 0;
    padding: 0;
    list-style: none;
}
*, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
</style>
