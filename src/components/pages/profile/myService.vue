<template>
  <div class="col-lg-12">
    <div class="title_content">
      <div class="text_content">My Services 1</div>
      <div class="clear"></div>
    </div>
    <div class="col-lg-4 pack-service" v-for="(val,key,index) in services" :key=index>
          <div class="service">
            <div class="service-icon">
              <i><font-awesome-icon :icon="['fas', 'tag']" /></i>
            </div>
            <div class="service-detail">
              <h6>{{key}}</h6>
              <p>
                {{val}}
              </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: [
    'services'
  ],
  created () {
    console.log(this.services)
  }
}
</script>

<style lang='scss'>
#services .pack-service {
  position: relative;
  min-height: 1px;
  float: left;
  width: 32%;
  margin: 1% 1% 0 0;
  padding: 2%;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  -webkit-transition: all 0.5s ease 0s;
  -o-transition: all 0.5s ease 0s;
  outline: transparent solid 3px;
  // width: 33%;
}
#services .service-icon {
  width: 92px;
  margin: 0 auto;
}
#services .pack-service .service-icon i {
  border: 3px solid #3b5998;
  color: #3b5998;
  background: #fff;
}
#services .service-icon i {
  display: block;
  width: 86px;
  height: 86px;
  border-radius: 50%;
  font-size: 40px;
  line-height: 80px;
  text-align: center;
  transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  -webkit-transition: all 0.5s ease 0s;
  -o-transition: all 0.5s ease 0s;
}
#services .pack-service:hover {
  background: #fff;
  outline: #e8e8e8 solid 3px;
  .service-icon i {
    background: #3b5998;
    border: 3px solid #cccccc;
    color: #fff;
    transform: rotate(360deg);
  }
}
#services .service-detail h6 {
  text-transform: uppercase;
  font-weight: 400;
  margin: 10px 0 3px 0;
  text-align: center;
  font-size: 15px !important;
}
#services .service-detail p {
  text-align: center;
  border-left: 0;
}
</style>
