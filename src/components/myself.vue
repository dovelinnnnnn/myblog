<template>
  <div class="widget-profile">
    <div class="row">
      <!-- Profile Image -->
      <div class="col-lg-12 col-md-12 col-sm-3 col-xs-12" style="padding-top:20px">
        <div class="image-holder one" id="pic_prof_1" style="display: block">
          <img
            :class="'head-image ' + position + ' circle'"
            :src="'images/photos/' + position + '.png'"
            width="150"
            height="150"
            alt=""
          />
        </div>

        <!-- style for simple image profile -->
        <div class="circle-img" id="pic_prof_2" style="display: none"></div>
      </div>
      <!-- End Profile Image -->

      <div class="col-lg-12 col-md-12 col-sm-9 col-xs-12">
        <!-- Profile info -->
        <div id="profile_info">
          <h1 id="name" class="transition-02">张 浩</h1>
          <h4 class="line">前端工程师</h4>
          <h6><span class="fa fa-map-marker"></span> 浙江,杭州</h6>
        </div>
        <!-- End Profile info -->

        <!-- Profile Description -->
        <div id="profile_desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            risus nibh. Donec adipiscing luctus tur
          </p>
        </div>
        <!-- End Profile Description -->

        <!-- Name -->
        <div id="profile_social" class="col-xs-0">
          <h6>My Social Profiles</h6>
          <div >
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa fa-dribbble"></i></a>
            <a href="#" style="margin-right:0"><i class="fa fa-foursquare" ></i></a>
            <div class="clear"></div>
          </div>
        </div>
        <!-- End Name -->
      </div>
    </div>
  </div>
</template>

<script>
// import Clipboard from 'clipboard';
import "assets/js/HeadImage.js";
export default {
  data() {
    return {
      photos: {
        up: "up.png",
        front: "front.png",
        down: "down.png",
        left: "left.png",
        right: "right.png",
        upright: "upright.png",
        upleft: "upleft.png",
        downleft: "downleft.png",
        downright: "downright.png",
      },
    };
  },
  computed: {
    position() {
      let a = "up";
      return a;
    },
  },
  methods: {
    showDetails(val) {
      console.log(val);
    },
    copyMsg(i) {
      if (i == 0) {
        this.goTel();
      } else if (i == 1) {
        this.goQQ();
      } else if (i == 2) {
        this.$copyText("13396551377@163.com").then(function () {
          alert("邮箱复制成功！");
        });
      } else if (i == 3) {
        this.$copyText("Luoye2333").then(function () {
          alert("微信号复制成功！");
        });
        this.goWeChat();
      }
    },
    goWeChat() {
      window.location.href = "weixin://";
    },
    goQQ() {
      window.location.href =
        "tencent://message/?uin=823548797&Site=Sambow&Menu=yes";
    },
    goTel() {
      window.location.href = "tel:13396551377";
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/css/colors/color.scss";
.row {
  margin: 0;
}
.widget-profile {
  background-color: $maincolor;
  color: $fontcolor;
}

#profile_social >div> a {
  display: block;
  text-align: center;
  background-color: $maincolor;
  border: solid 1px white;
  margin-right: 13px;
  padding: 0;
  float: left;
  box-sizing: border-box;
  transition: all 0.3s ease-in;
  i {
    font-size: inherit;
    color: #fff;
  }
}
#profile_social >div> a:hover {
  background-color: white;
  i {
    color: $maincolor;
  }
}
@media only screen and (min-width: 1200px) {
  #profile_social >div> a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 22px;
  }
}
@media only screen and (max-width: 1199px) {
  .widget-profil #profile_social >div> a {
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 10px;
  }
}
.head-image {
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  border: 10px solid $fontcolor;
  z-index: 0;
}
.circle {
  display: block;
  width: 150px;
  height: 150px;
  margin: 1em auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-border-radius: 99em;
  -moz-border-radius: 99em;
  border-radius: 99em;
}
.widget-profile {
  h1 {
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    font-weight: 400;
  }
  h4 {
    text-align: center;
    font-size: 15px;
    margin-top: 0px;
  }
  h6 {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
  }
}

#profile_info {
  border-bottom: 1px solid $fontcolor;
  padding-bottom: 15px;
}

#profile_desc {
  border-bottom: 1px solid $fontcolor;
  padding: 15px 0;
}
#profile_social {
  padding-top: 15px;
}

@media only screen and (min-width: 1200px) {
  .widget-profile h1 {
    font-size: 25px;
    line-height: 60px;
  }
  #profile_social >div> a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 22px;
  }
}
</style>