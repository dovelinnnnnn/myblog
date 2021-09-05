<template>
  <div
    id="resume"
  >
    <!-- .title -->
    <h1 class="h-bloc">介绍 - 个人信息</h1>

    <div class="row">
      <!-- 左边栏 -->
      <div class="col-lg-6">
        <!-- 个人技能熟练表 -->
        <skills />

        <!-- 下载个人简历 -->
        <div class="title_content" style="">
          <div class="text_content">My Resume</div>
          <div class="clear"></div>
        </div>
        <a class="download" style="margin: 0; float: left" href="#">
          <span data-hover="Download My Resume"
            ><i class="glyphicon glyphicon-download-alt"></i> Download My
            Resume</span
          >
        </a>
        <!-- 下载个人简历 -->
      </div>
      <!-- 左边栏结束 -->

      <!-- 右边栏 -->
        <div class="col-lg-6 resume-left">
          <!-- 工作经验/教育经历/获奖情况 -->
          <eventCard />
        </div>
      </div>

      <!-- 右边栏结束 -->
    </div>

    <div style="clear: both"></div>

    <!-- client reference -->
    <div class="row">
      <div class="col-md-12">
        <client-perference />
      </div>
      <div style="clear: both"></div>
  </div>
</template>

<script>
import skills from 'components/pages/resume/skills.vue'
import eventCard from 'components/pages/resume/eventCard.vue'
import clientPerference from 'components/pages/resume/clientPerference.vue'
import { useStore } from 'vuex'
export default {
  components: { skills, eventCard, clientPerference },
  setup () {
    const store = useStore()
    store.dispatch('dlResumeMsg')
  }
}
</script>

<style lang='scss'>
#profile .col-lg-5 h2, #profile .col-lg-5 h4, #resume .col-lg-6 p, #resume .col-lg-6 span.duration {
    color: #3B5998;
}
</style>
