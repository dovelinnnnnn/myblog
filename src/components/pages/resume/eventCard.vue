<template>
<ul>
  <li v-for="(data, index) in myEvent" :key='index'>
    <!-- title -->
    <div class="title_content" style="margin-bottom: 5px">
      <div class="text_content">{{data.title}}</div>
      <div class="clear"></div>
    </div>
    <ul class="attributes">
      <li class="first" v-for='(val, key, no) in data.attributes' :key='no'>
        <h5>
          {{val.title}}
          <span class="duration"
            ><font-awesome-icon :icon="['fas','calendar-alt']" class="color" />{{val.data[0]}}</span
          >
        </h5>
        <h6><font-awesome-icon :icon="['fas', (data.title=='获奖与证书'?'trophy':(data.title=='工作经验'?'briefcase':'university'))]" class="color" /> {{val.data[1]}}</h6>
        <p>
          {{val.data[2]}}
        </p>
      </li>
    </ul>
    <!-- /.attributes -->
    <br />
  </li>
  </ul>
</template>

<script>
export default {
  computed: {
    myEvent () {
      return this.$store.state.myEvent
    }
  }
}
</script>

<style lang='scss'>
.resume-left ul li h5 {
    padding-bottom: 10px;
    font-size: inherit;
}
.resume-left ul li h5 {
    border-bottom: 1px solid #3B5998;
}
#resume h5, #resume h6 {
    font-weight: 400 !important;
    font-size: 14px;
}
#resume .col-lg-6 span.duration {
    float: right;
    svg{
      margin-right: 5px!important;
    }
}
.attributes span.glyphicon, .attributes h6 {
    color: #3B5998;
}
li h6 {
    font-size: 13px !important;
}
</style>
