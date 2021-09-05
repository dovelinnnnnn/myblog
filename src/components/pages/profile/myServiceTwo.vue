<template>
  <div class="col-lg-12">
    <div class="bottom-p">
      <div class="title_content">
        <div class="text_content">My Services 2</div>
        <div class="clear"></div>
      </div>
      <div class="accordion" id="accordionService">
        <div class="accordion-item" v-for='(val,key,index) in services' :key=index>
          <h2 class="accordion-header" :id="'headingService'+index">
            <button
              :class="{'accordion-button':true, 'collapsed':index!==0}"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapseService'+index"
              aria-expanded=false
              :aria-controls="'collapseService'+index"
            >
              {{key}}
              <i style="float: right"
                ><font-awesome-icon :icon="['fas', 'chevron-down']"
              /></i>
            </button>
          </h2>
          <div
            :id="'collapseService'+index"
            :class="{'accordion-collapse':true, 'collapse':true, 'show':index==0}"
            :aria-labelledby="'headingService'+index"
            data-bs-parent="#accordionService"
          >
            <div class="accordion-body">
              <p v-html='val'>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['services'],
  data () {
    return {
    }
  }
}
</script>

<style lang='scss'>
.accordion .accordion-item{
  margin-bottom: 5px;
  font-size: 15px;
  height: 100%;
}
.accordion .accordion-button{
  display: block;
  i{
    transition:transform .3s ease;
  }
}
.accordion .collapsed{
  i{
    transform: rotate(180deg);
  }
}
.accordion .accordion-item {
    background-color: #ccc;
    border: none;
    height: 100%;
}
.accordion .accordion-body {
    background-color: #fff;
    width: 100%;
}
.accordion .accordion-button, .accordion-button:not(.collapsed), .accordion-button:focus {
    color: #fff !important;
    background-color: #3b5998 !important;
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
    padding: 10px 15px;
    border:none !important;
    box-shadow: none !important;
}

.accordion .accordion-item:first-of-type .accordion-button, .accordion-button:focus,.accordion-item:last-of-type .accordion-button.collapsed {
    border-radius: 0 !important;
}
.accordion-button::after {
  display: none;
}
</style>
