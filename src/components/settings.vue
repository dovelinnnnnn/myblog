<template>
  <div id="custumize-style" style="display: block; left: -270px;" :class="{'open':open}" @click="switcher">
        <h2>Style Selector<div  class="icon-switcher"><font-awesome-icon :icon="['fas', 'cogs']" class="svg"/></div></h2>
        <div>
            <h3>Theme Color</h3>
            <ul class="colors-style" id="color1">
                <li><a href="#" class="gray"></a></li>
                <li><a href="#" class="green"></a></li>
                <li><a href="#" class="blue"></a></li>
                <li><a href="#" class="red"></a></li>
                <li><a href="#" class="yellow"></a></li>
                <li><a href="#" class="DarkBlue"></a></li>
                <li><a href="#" class="orange"></a></li>
                <li><a href="#" class="rose"></a></li>
                <li><a href="#" class="lightseagreen"></a></li>
                <li><a href="#" class="darkolivegreen"></a></li>
            </ul>
        </div>
        <div>

            <h3 class="layouts">Profile Image</h3>
            <div id="show">

                <div class="clean-check">

                    <input type="radio" id="r1" name="style_profile" value="style_profile_1" checked="checked">
                    <label for="r1"><span></span>Rotating image</label>

                    <input type="radio" id="r2" name="style_profile" value="style_profile_2">
                    <label for="r2"><span></span>Fixed image</label>

                </div>
            </div>

            <h3 class="layouts">Page Builder</h3>
            <div id="show">
                <div class="clean-check" style="padding-left: 30px;">

                    <input type="radio" id="pb1" name="page_builder" value="http://demo.flexy-codes.com/FlexyVcard" checked="">
                    <label for="pb1"><span :style="'background:url('+radio[0]+') '+radio[1]+' top no-repeat;'"></span>Style 1</label>

                    <input type="radio" id="pb2" name="page_builder" value="page-builder-2.html">
                    <label for="pb2"><span></span>Style 2</label>

                    <input type="radio" id="pb3" name="page_builder" value="page-builder-3.html">
                    <label for="pb3"><span></span>Style 3</label>

                    <input type="radio" id="pb4" name="page_builder" value="page-builder-4.html">
                    <label for="pb4"><span></span>Style 4</label>
                </div>
            </div>

            <h3 class="layouts">Page Animation</h3>
            <div id="show">

                <select name="one" class="dropdown-select">
                    <optgroup label="Bouncing Entrances">
                        <option value="bounceIn" selected="">bounceIn</option>
                        <option value="bounceInDown">bounceInDown</option>
                        <option value="bounceInLeft">bounceInLeft</option>
                        <option value="bounceInRight">bounceInRight</option>
                        <option value="bounceInUp">bounceInUp</option>
                    </optgroup>

                    <optgroup label="Fading Entrances">
                        <option value="fadeIn">fadeIn</option>
                        <option value="fadeInDown">fadeInDown</option>
                        <option value="fadeInLeft">fadeInLeft</option>
                        <option value="fadeInRight">fadeInRight</option>
                        <option value="fadeInUp">fadeInUp</option>
                    </optgroup>
                </select>

            </div>

            <h3 class="layouts" style="padding-top:5px">Background Style</h3>
            <div id="show">

                <div class="clean-check">

                    <input type="radio" id="s1" name="layout" value="bg_color" checked="checked">
                    <label for="s1"><span></span>Color</label>

                    <input type="radio" id="s2" name="layout" value="bg_slider">
                    <label for="s2"><span></span>Slider</label>

                </div>

            </div>

        </div>

        <div>
            <h3>Background Color</h3>
            <ul class="colors-style bgsolid" id="bgsolid">
                <li><a href="#" class="gray-bg"></a></li>
                <li><a href="#" class="green-bg"></a></li>
                <li><a href="#" class="blue-bg"></a></li>
                <li><a href="#" class="red-bg"></a></li>
                <li><a href="#" class="yellow-bg"></a></li>
            </ul>
        </div>

        <div>
            <h3>Background Image</h3>
            <ul class="colors-style bg" id="bg">
                <li><a href="#" class="bg1"></a></li>
                <li><a href="#" class="bg2"></a></li>
                <li><a href="#" class="bg3"></a></li>
                <li><a href="#" class="bg4"></a></li>
                <li><a href="#" class="bg5"></a></li>
            </ul>
        </div>

        <div id="button-reset"><a href="#" class="button color blue boxed">Reset</a></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  computed: {
    radio () {
      return [require('assets/images/check_radio_sheet.png'), '-57px']
    }
  },
  methods: {
    switcher () {
      this.open = !this.open
    }
  }
}
</script>

<style lang='scss'>
#custumize-style {
    background-color: #505656;
    width: 270px;
    position: fixed;
    top: 10px;
    z-index: 9999;
    left: 0px;
    border-radius: 0 0 3px 0;
    transition: all ease 0.3s;
}
.open{
    left: 0px !important;
}
#custumize-style div:not(.open) {
    padding: 0px 8px;
    padding-bottom: 5px;
}
.svg{
    margin: auto;
}
.clean-check input[type="radio"] {
    display: none;
}
input[type="radio"], input[type="checkbox"] {
    margin: 4px 0 0;
    margin-top: 1px \9;
    line-height: normal;
}
input[type="checkbox"], input[type="radio"] {
    padding: 0;
    box-sizing: border-box;
}
.clean-check #r1 + label, .clean-check #r2 + label, .clean-check #r3 + label {
    margin-left: 22px;
}

.clean-check input[type="radio"] + label span {
    display: inline-block;
    width: 19px;
    height: 19px;
    margin: -1px 4px 0 0;
    vertical-align: middle;
    /* background: url(../images/check_radio_sheet.png) -38px top no-repeat; */
    cursor: pointer;
}
label {
    font-weight: 400 !important;
}
.clean-check input[type="radio"] + label {
    font-size: 13px;
    color: #999;
    display: inline-block;
    margin-right: 30px;
}
#custumize-style h2 {
    font-size: 23px;
    color: #fff;
    margin-top: 0px;
    padding-bottom: 12px;
    padding-left: 30px;
    padding-top: 11px;
    background: #727777;
    text-transform: capitalize;
    font-weight: 400;
    text-align: left;
}
#custumize-style h2 div {
    height: 50px;
    position: absolute;
    right: -50px;
    top: 5px;
    width: 50px;
    border-radius: 0 3px 3px 0;
}
#custumize-style h3 {
    color: #fff;
    font-size: 12px;
    text-transform: capitalize;
    padding-left: 25px;
    font-size: 13px;
    font-weight: bold;
    margin: 0;
    text-align: left;
}
.icon-switcher {
    background: #F9F7F6;
    margin-left: 0px;
    margin-top: -5px;
    padding: 12px 12px;
    font-size: 22px;
    color: #3B5998 !important;
}
.colors-style {
    list-style: none;
    margin: 0px 0px 10px 20px;
    overflow: hidden;
}
.colors-style li {
    float: left;
    margin: 2px;
    display: block;
    width: 42px;
    height: 25px;
    cursor: pointer;
}

</style>
