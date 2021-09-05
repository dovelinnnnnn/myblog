<template>
  <div id="portfolio" aria-labelledby="tab_item-2" style="height: 100%">
    <!-- .title -->
    <h1 class="h-bloc">Portfolio - My Works</h1>

    <!-- .container-portfolio -->
    <div class="container-portfolio">
      <!-- #filters -->
      <ul id="filters" class="clearfix">
        <li>
          <span
            class="filter active"
            data-filter="catWeb catGraphic catMotion logo"
            >All</span
          >
        </li>
        <li><span class="filter" data-filter="catWeb">Web Design</span></li>
        <li>
          <span class="filter" data-filter="catGraphic">Graphic Design</span>
        </li>
        <li>
          <span class="filter" data-filter="catMotion">Motion Graphic</span>
        </li>
        <li><span class="filter" data-filter="logo">Logo</span></li>
      </ul>
      <!-- /#filters -->

      <!-- #portfoliolist -->
      <div id="portfoliolist">
        <!-- .portfolio -->
        <div
          :class="['portfolio', data.portfoliotype ,'mix_all']"
          data-cat="catWeb"
          style="display: inline-block; opacity: 1"
          v-for='(data,index) in projectList'
          :key='index'
        >
          <div class="portfolio-wrapper">
            <a
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <img :src="data.coverUrl" :alt="data.projInfo.description" @click="showImg(data.projInfo)" />
            </a>
            <div class="label">
              <!-- <a
                href="images/portfolio/1.jpg"
                rel="portfolio"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing Vivamus sit amet ligula non lectus.consectetur adipiscingVivamus sit amet"
              >
              </a> -->
              <div class="label-text">
                <a class="text-title">{{data.projectName}}</a>
                <span class="text-category">{{data.projectType}}</span>
              </div>
              <div class="label-bg"></div>
            </div>
          </div>
        </div>
        <div
          class="portfolio addProject"
          style="display: inline-block; opacity: 1; position: relative;"
        >
        <div class='row'>
            <font-awesome-icon class="col-12" :icon="['fas', 'plus-circle']"></font-awesome-icon>
            <span class='col-12' style='font-size: 14px'>添加新的项目</span>
        </div>
        </div>
        <!-- /.portfolio -->
      </div>
      <div class="clear"></div>

      <!-- #portfoliolist -->
    </div>
    <!-- /.container-portfolio -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      projectList: [
        {
          portfoliotype: 'logo',
          coverUrl: 'images/portfolio/1.jpg',
          projInfo: { type: 'img', targetUrl: 'images/portfolio/1.jpg', description: 'Visual Infography' },
          projectName: 'Project Name',
          projectType: 'logo'
        },
        {
          portfoliotype: 'catweb',
          coverUrl: 'images/portfolio/2.jpg',
          projInfo: { type: 'video', targetUrl: 'https://www.bilibili.com/video/BV1b541177dc', description: 'Visual Infography' },
          projectName: 'Project Name',
          projectType: 'Web Design'
        },
        {
          portfoliotype: 'catweb',
          coverUrl: 'images/portfolio/3.jpg',
          projInfo: { type: 'img', targetUrl: 'images/portfolio/3.jpg', description: 'Visual Infography' },
          projectName: 'Project Name',
          projectType: 'logo'
        },
        {
          portfoliotype: 'catweb',
          coverUrl: 'images/portfolio/4.jpg',
          projInfo: { type: 'img', targetUrl: 'images/portfolio/4.jpg', description: 'Visual Infography' },
          projectName: 'Project Name',
          projectType: 'logo'
        }
      ]
    }
  },
  methods: {
    showImg (info) {
      this.$store.commit('changeProjInfo', info)
    }
  }
}
</script>

<style lang='scss'>
.container-portfolio {
  position: relative;
  width: 100%;
  margin: 0 auto;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
#filters li span {
  display: block;
  padding: 5px 20px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  background: #577285;
  margin: 2px;
}
#filters li {
  float: left;
  text-align: center;
}
#filters li span:hover {
  background: #3b5998;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
#portfoliolist{
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

}
#portfoliolist .portfolio {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  width: 31%;
  margin: 1%;
  display: none;
  float: left;
  overflow: hidden;
}
.addProject{
  border: #ccc dashed 1px;
  text-align: center;
  font-size: 100px;
  position: relative;
  color: rgba($color: #000000, $alpha: 0.2);
  & .row svg{
    margin: 35% auto 0;
  }
}
.portfolio-wrapper {
  overflow: hidden;
  position: relative !important;
  background: #666;
  cursor: pointer;
  & img {
    transition: top 0.4s ease-out;
  }
  & > .label {
    transition: bottom 0.2s linear;
  }
}
.portfolio-wrapper:hover {
  & img {
    top: -40px;
  }
  & > .label {
    bottom: 0;
  }
}
.portfolio img {
  max-width: 100%;
  position: relative;
  top: 0px;
}
.portfolio .label-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.portfolio .label {
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: -40px;
  display: block !important;
}
.portfolio .label-bg,
#filters li span:hover {
  background: #3b5998;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
.portfolio .text-title {
  display: block;
  font-size: 13px;
  margin: 1px;
  color: #fff;
  text-transform: capitalize;
}
.portfolio .label-text {
  color: #fff;
  position: relative;
  z-index: 500;
  padding: 5px 8px;
  font-weight: 300;
}
.label {
  display: inline;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
}

</style>
