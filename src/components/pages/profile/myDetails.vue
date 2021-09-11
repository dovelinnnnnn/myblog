<template>
  <!-- 标题 -->
  <div class="title_content">
    <div class="text_content">{{ myInfo.name }}</div>
    <div class="clear"></div>
  </div>
  <!-- 个人信息 -->
  <ul class="about">
    <li>
      <i class="glyphicon">
        <font-awesome-icon :icon="['fas', 'user']" />
        <label>姓名</label>
      </i>
      <span class="value">{{ myInfo.name }}</span>
    </li>

    <li>
      <i class="glyphicon">
        <font-awesome-icon :icon="['fas', 'calendar-alt']" />
        <label>生日</label>
      </i>
      <span class="value">{{ myInfo.birthday }}</span>
    </li>

    <li>
      <i class="glyphicon">
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        <label>地址</label>
      </i>
      <span class="value">{{ myInfo.address }}</span>
    </li>

    <li>
      <i class="glyphicon">
        <font-awesome-icon :icon="['fas', 'envelope']" />
        <label>邮箱</label>
      </i>
      <span class="value">{{ myInfo.email }}</span>
    </li>

    <li>
      <i class="glyphicon">
        <font-awesome-icon :icon="['fas', 'phone']" />
        <label>电话</label>
      </i>
      <span class="value">{{ myInfo.phone }}</span>
    </li>

    <li>
      <i class="glyphicon">
        <font-awesome-icon :icon="['fas', 'globe-asia']" />
        <label>博客</label>
      </i>
      <span class="value">
        <a href="http://dovelin.cn" target="_blank">
          {{ myInfo.website }}
        </a>
      </span>
    </li>
  </ul>
  <!-- 我想说的话 -->
  <p
    style="margin-bottom: 20px"
    v-for="(val, index) in info.myIntroduce"
    :key="index"
  >
    <i><font-awesome-icon :icon="['fas', 'quote-left']" /></i>{{ val }}
  </p>
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
ul.about li i svg {
  font-size: 10px !important;
  width: 0.85em !important;
}
@media only screen and (max-width: 768px) {
}
#profile .about li i {
  margin-right: 3px;
  display: block;
}
/*--About me--*/
.about {
  margin-bottom: 30px !important;
}
ul.about li {
  margin: 0;
  color: #717171;
  display: block;
  font-size: 13px;
  border-bottom: 1px solid #e6e6e6;
}
ul.about li span{overflow: hidden;}
ul.about li i{
  display: inline-block;
}
ul.about li i svg {
  margin-right: 8px;
  color: #3b5998;
}
label {
  color: #3b5998;
  margin-bottom: 5px;
}
ul.about li i svg:empty {
  width: 1em;
}
ul.about li span.value {
  text-align: left;
  float: right;
}
</style>
