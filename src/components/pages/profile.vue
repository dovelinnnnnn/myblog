<template>
  <div class="contentBox">
    <!-- .title -->
    <h1>简介 - 关于我</h1>
    <div class="row top-p">
      <div class="col-lg-6 profile-l">
        <!--About me-->
      <myDetails />
      </div>
      <!-- End left-wrap -->

      <div class="col-lg-6 col-xxl-5 profile-r">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="images/img-profile/about_1.jpg" alt=""/>
            </div>
            <div class="carousel-item">
              <img src="images/img-profile/about_2.png" alt=""/>
            </div>
            <div class="carousel-item">
              <img src="images/img-profile/about_3.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clear"></div>

    <div class="row" id="services">
      <div class="col-lg-12">
        <div class="title_content">
          <div class="text_content">My Services 1</div>
          <div class="clear"></div>
        </div>

        <div class="col-lg-4 pack-service">
          <div class="service">
            <div class="service-icon">
              <i><font-awesome-icon :icon="['fas', 'tag']" /></i>
            </div>
            <div class="service-detail">
              <h6>Making Money</h6>
              <p>
                Fusce quis interdum ipsum.Suspendi suscipit vehicula sapienid
                mattis. Lorem ipsum amet consectetur.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 pack-service">
          <div class="service">
            <div class="service-icon">
              <i><font-awesome-icon :icon="['fas', 'cogs']" /></i>
            </div>
            <div class="service-detail">
              <h6>Easy to Customize</h6>
              <p>
                Fusce quis interdum ipsum.Suspendi suscipit vehicula sapienid
                mattis. Lorem ipsum amet consectetur.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 pack-service">
          <div class="service">
            <div class="service-icon">
              <i class="fa fa-arrows-alt"
                ><font-awesome-icon :icon="['fas', 'expand-arrows-alt']"
              /></i>
            </div>
            <div class="service-detail">
              <h6>Moving Let Us Help</h6>
              <p>
                Fusce quis interdum ipsum.Suspendi suscipit vehicula sapienid
                mattis. Lorem ipsum amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Services -->

    <div class="clear"></div>
    <div class="border-list"></div>

    <div class="row">
      <div class="col-lg-12">
        <div class="bottom-p">
          <div class="title_content">
            <div class="text_content">My Services 2</div>
            <div class="clear"></div>
          </div>
          <div class="accordion" id="accordionService">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingServiceOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseServiceOne"
                  aria-expanded="true"
                  aria-controls="collapseServiceOne"
                >
                  Making Money
                <i style="float:right;"><font-awesome-icon :icon="['fas','chevron-down']" /></i>
                </button>
              </h2>
              <div
                id="collapseServiceOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingServiceOne"
                data-bs-parent="#accordionService"
              >
                <div class="accordion-body">
                  <p>
                    <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingServiceTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseServiceTwo"
                  aria-controls="collapseServiceTwo"
                >
                  Easy to Customize
                <i style="float:right;"><font-awesome-icon :icon="['fas','chevron-down']" /></i>
                </button>
              </h2>
              <div
                id="collapseServiceTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingServiceTwo"
                data-bs-parent="#accordionService"
              >
                <div class="accordion-body">
                  <p><strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingServiceThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseServiceThree"
                  aria-expanded="false"
                  aria-controls="collapseServiceThree"
                >
                  Moving Let Us Help
                <i style="float:right;"><font-awesome-icon :icon="['fas','chevron-down']" /></i>

                </button>
              </h2>
              <div
                id="collapseServiceThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingServiceThree"
                data-bs-parent="#accordionService"
              >
                <div class="accordion-body">
                  <p><strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import myDetails from 'components/pages/profile/myDetails'
export default {
  components: {
    myDetails
  }
}
</script>

<style lang='scss'>
/* title */
// .contentBox{
//   padding: 1rem 1.5rem;
// }

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
.glyphicon {
  margin-right: 8px;
  color: #3b5998;
}
label {
  color: #3b5998;
  margin-bottom: 5px;
}
.glyphicon:empty {
  width: 1em;
}
ul.about li span.value {
  width: 220px;
  text-align: left;
  float: right;
}
.resp-tabs-list,
p {
  margin: 0;
  padding: 0;
}

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
.border-list {
  width: 80%;
  margin: auto;
  margin-top: 30px;
  border: 1px solid #3b5998;
}
div#accordionExample{
  height: 100%;
}
// .accordion .accordion-item{
//   margin-bottom: 5px;
//   font-size: 15px;
//   height: 100%;
// }
// .accordion .accordion-button{
//   display: block;
//   i{
//     transition:transform .3s ease;
//   }
// }
// .accordion .collapsed{
//   i{
//     transform: rotate(180deg);
//   }
// }
// .accordion .accordion-item {
//     background-color: #ccc;
//     border: none;
//     height: 100%;
// }
// .accordion .accordion-body {
//     background-color: #fff;
//     width: 100%;
// }
// .accordion .accordion-button, .accordion-button:not(.collapsed), .accordion-button:focus {
//     color: #fff !important;
//     background-color: #3b5998 !important;
//     box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
//     padding: 10px 15px;
//     border:none !important;
//     box-shadow: none !important;
// }

// .accordion .accordion-item:first-of-type .accordion-button, .accordion-button:focus,.accordion-item:last-of-type .accordion-button.collapsed {
//     border-radius: 0 !important;
// }
// .accordion-button::after {
//   display: none;
// }

@media screen and (max-width: 600px) {
  #services .pack-service {
    width: 100% !important;
  }
}

@media only screen and (max-width: 800px) {
  ul.about li span.value {
    margin-right: 30px;
  }
  .c-scrollbar-content {
    margin-right: 0px;
  }
}

@media screen and (max-width: 1199px) {
  .value {
    width: 196px;
  }
}

@media only screen and(min-width:1400px) {
  .profile-r{
    margin-left: 50px;
  }
}
</style>
