<template>
        <!--About me-->
        <div class="title_content">
          <div class="text_content">张 浩</div>
          <div class="clear"></div>
        </div>

        <ul class="about">
          <li>
            <i class="glyphicon glyphicon-user"
              ><font-awesome-icon :icon="['fas', 'user']"
            /></i>
            <label>姓名</label>
            <span class="value">张 浩</span>
            <div class="clear"></div>
          </li>

          <li>
            <i class="glyphicon glyphicon-calendar"
              ><font-awesome-icon :icon="['fas', 'calendar-alt']"
            /></i>
            <label>生日</label>
            <span class="value">12月17日 1996</span>
            <div class="clear"></div>
          </li>

          <li>
            <i class="glyphicon glyphicon-map-marker"
              ><font-awesome-icon :icon="['fas', 'map-marker-alt']"
            /></i>
            <label>地址</label>
            <span class="value">浙江，杭州</span>
            <div class="clear"></div>
          </li>

          <li>
            <i class="glyphicon glyphicon-envelope"
              ><font-awesome-icon :icon="['fas', 'envelope']"
            /></i>
            <label>邮箱</label>
            <span class="value">zhanghaowang96@gmail.com</span>
            <div class="clear"></div>
          </li>

          <li>
            <i class="glyphicon glyphicon-phone"
              ><font-awesome-icon :icon="['fas', 'phone']"
            /></i>
            <label>电话</label>
            <span class="value">13396551377</span>
            <div class="clear"></div>
          </li>

          <li>
            <i class="glyphicon glyphicon-globe"
              ><font-awesome-icon :icon="['fas', 'globe-asia']"
            /></i>
            <label>个人网站</label>
            <span class="value"
              ><a href="http://dovelin.cn" target="_blank">dovelin.cn</a></span
            >
            <div class="clear"></div>
          </li>
        </ul>

        <p style="margin-bottom: 20px">
          <i><font-awesome-icon :icon="['fas', 'quote-left']" /></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam necnulla sagittis, scelerisque mi vitae, congue turpis. Lorem ipsum dolorsit amet, consectetur adipiscing elit. Etiam nec nulla sagittis,scelerisque mi vitae, congue turpis.
        </p>

        <p style="margin-bottom: 20px">
          <i><font-awesome-icon :icon="['fas', 'quote-left']" /></i>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam necnulla sagittis, scelerisque mi vitae, congue turpis.
        </p>
      <!-- End left-wrap -->
</template>

<script>
export default {

}
</script>

<style>
.profile-l {
  position: relative;
}
/*--About me--*/
.title_content {
  display: inline-block;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  position: relative;
}
.title_content::after {
  content: "";
  bottom: -1px;
  width: 30px;
  height: 1px;
  background: #3b5998;
  position: absolute;
  left: 0;
}
.text_content {
  display: block;
  float: left;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  margin-top: 10px;
  text-transform: uppercase;
  padding-top: 2px;
  margin-bottom: 5px;
}
.text_content {
  color: #3b5998;
}
</style>
