<template>
        <!--About me-->
        <div class="title_content">
          <div class="text_content">{{myInfo.name}}</div>
          <div class="clear"></div>
        </div>

        <ul class="about">
          <li>
            <i class="glyphicon glyphicon-user"
              ><font-awesome-icon :icon="['fas', 'user']"
            /></i>
            <label>姓名</label>
            <span class="value">{{myInfo.name}}</span>
            <div class="clear"></div>
          </li>

          <li>
            <i class="glyphicon glyphicon-calendar"
              ><font-awesome-icon :icon="['fas', 'calendar-alt']"
            /></i>
            <label>生日</label>
            <span class="value">{{myInfo.birthday}}</span>
            <div class="clear"></div>
          </li>

          <li>
            <i class="glyphicon glyphicon-map-marker"
              ><font-awesome-icon :icon="['fas', 'map-marker-alt']"
            /></i>
            <label>地址</label>
            <span class="value">{{myInfo.address}}</span>
            <div class="clear"></div>
          </li>

          <li>
            <i class="glyphicon glyphicon-envelope"
              ><font-awesome-icon :icon="['fas', 'envelope']"
            /></i>
            <label>邮箱</label>
            <span class="value">{{myInfo.email}}</span>
            <div class="clear"></div>
          </li>

          <li>
            <i class="glyphicon glyphicon-phone"
              ><font-awesome-icon :icon="['fas', 'phone']"
            /></i>
            <label>电话</label>
            <span class="value">{{myInfo.phone}}</span>
            <div class="clear"></div>
          </li>

          <li>
            <i class="glyphicon glyphicon-globe"
              ><font-awesome-icon :icon="['fas', 'globe-asia']"
            /></i>
            <label>博客</label>
            <span class="value"
              ><a href="http://dovelin.cn" target="_blank">{{myInfo.website}}</a></span
            >
            <div class="clear"></div>
          </li>
        </ul>

        <p style="margin-bottom: 20px">
          <i><font-awesome-icon :icon="['fas', 'quote-left']" /></i>{{myIntroduce}}
        </p>

        <p style="margin-bottom: 20px">
          <i><font-awesome-icon :icon="['fas', 'quote-left']" /></i>
          {{info.myIntroduce}}
        </p>
      <!-- End left-wrap -->
</template>

<script>
export default {
  props: ['info'],
  computed: {
    myInfo () {
      console.log(this.info)
      return this.info.myInfo
    },
    myIntroduce () {
      return this.info.myIntroduce
    }
  }
}
</script>

<style lang='scss'>
.profile-l {
  position: relative;
}
/*--About me--*/

</style>
