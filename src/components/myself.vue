<template>
  <div class="col-lg-3 widget-profile">
    <div class="row">
      <!-- Profile Image -->
      <div class="col-xl-12 col-lg-12 col-md-3 col-sm-12">
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

      <div class="col-xl-12 col-lg-12 col-md-9 col-sm-12">
        <!-- Profile info -->
        <div id="profile_info">
          <h1 id="name" class="transition-02">张 浩</h1>
          <h4 class="line">前端工程师</h4>
          <h6><font-awesome-icon icon="map-marker-alt" /> 浙江,杭州</h6>
        </div>
        <!-- End Profile info -->

        <!-- Profile Description -->
        <div id="profile_desc">
          <p>
            有人夸我是个好朋友,因为我待人友善为人着想；
            有人夸我是个好同事,因为我团结友爱互帮互助；
            有人夸我是个好员工,因为我尽心尽力勤奋认真；
            我觉得我是个人生赢家,因为我有好多'对象'。
          </p>
        </div>
        <!-- End Profile Description -->

        <!-- Name -->
        <div id="profile_social" class="col-sm-0">
          <h6>My Social Profiles</h6>
            <profile-icons />
            <div class="clear"></div>
        </div>
        <!-- End Name -->
      </div>
    </div>
  </div>
</template>

<script>
import profileIcons from 'components/profileIcons'
export default {
  components: { profileIcons },
  data () {
    return {
      photos: {
        up: 'up.png',
        front: 'front.png',
        down: 'down.png',
        left: 'left.png',
        right: 'right.png',
        upright: 'upright.png',
        upleft: 'upleft.png',
        downleft: 'downleft.png',
        downright: 'downright.png'
      }
    }
  },
  computed: {
    position () {
      const a = 'up'
      return a
    }
  },
  methods: {
    showDetails (val) {
      console.log(val)
    },
    copyMsg (i) {
      console.log(this)
      if (i === 0) {
        this.goTel()
      } else if (i === 1) {
        this.goQQ()
      } else if (i === 2) {
        this.copyText('13396551377@163.com')
        alert('邮箱复制成功！')
      } else if (i === 3) {
        this.copyText('Luoye2333')
        alert('微信号复制成功！')
        this.goWeChat()
      }
    },
    goWeChat () {
      window.location.href = 'weixin://'
    },
    goQQ () {
      window.location.href =
        'tencent://message/?uin=823548797&Site=Sambow&Menu=yes'
    },
    goTel () {
      window.location.href = 'tel:13396551377'
    },
    copyText (text) {
      const cInput = document.createElement('input')
      cInput.value = text
      document.body.appendChild(cInput)
      cInput.select()
      document.execCommand('copy')
      document.body.removeChild(cInput)
    }
  }
}
</script>

<style scoped lang='scss'>
.widget-profile {
  background: #3b5998;
  height: 580px;
  float: right;
}
#profile_desc p {
  margin-bottom: 0;
  // text-align: center;
}
.head-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  border: 10px solid #4c70ba;
}
.widget-profile .image-holder {
  position: relative;
  margin: 15px auto;
  width: 150px;
  height: 150px;
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

.widget-profile #profile_info {
  padding-bottom: 15px;
}
.widget-profile h1,
h4,
h6 {
  color: #839ccf;
}
.widget-profile h1 {
  font-size: 40px;
  line-height: 60px;
  text-align: center;
  font-weight: 400;
}
.widget-profile h4 {
  text-align: center;
  font-size: 15px;
  margin-top: 0px;
}
.widget-profile h6 {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
}
.widget-profile p {
    color: #839ccf !important;
    border-left: 0px;
}
.widget-profile #profile_desc {
  padding-top: 15px;
  padding-bottom: 15px;
}
.widget-profile #profile_desc {
  border-bottom: 1px solid #839ccf;
  border-top: 1px solid #839ccf;
}
.widget-profile #profile_social {
    padding-top: 15px;
}

@media only screen and(max-width:767px) {
  .widget-profile {
    height: 285px !important;
    margin-bottom: 20px;
    float: none;
  }
  .widget-profile h1 {
    font-size: 22px !important;
    line-height: 39px !important;
  }
  .widget-profile h4 {
    font-size: 13px !important;
  }

  .widget-profile,
  .flexy_content {
    margin-left: 12px;
    margin-right: 12px;
  }
  #profile_desc {
    display: none;
  }
  #profile_social {
    display: none;
  }
}

@media only screen and (min-width: 768px)and (max-width: 991px) {
  .widget-profile{
    height: 210px !important;
  }
  .widget-profile #profile_desc {
    border-bottom: 0 !important;
    padding-top: 5px;
  }

  #profile_social {
    display: none;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .widget-profile h1 {
    font-size: 24px;
    line-height: 50px;
  }
}
@media only screen and (min-width: 1200px) {
  .widget-profile h1 {
    font-size: 25px;
    line-height: 60px;
  }
}
</style>
