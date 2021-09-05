<template>
  <div id="contact" aria-labelledby="tab_item-4" style="height: 100%">
    <h1 class="h-bloc">联系 - 联系我</h1>

    <div class="row">

      <div class="col-lg-12">
      <div id="container" ></div>

        <div class="row" id="contact-user">
          <div class="col-md-5">
            <div class="contact-info">

              <div class="title_content" style="float: none">
                <div class="text_content">联系方式</div>
                <div class="clear"></div>
              </div>

              <ul>
                <li>
                  <span class="span-info"
                    ><font-awesome-icon :icon="['fas','map-marker-alt']"/> 地址:</span
                  >
                  {{myInfo.address}}<br />
                </li>
                <li>
                  <span class="span-info"
                    ><font-awesome-icon :icon="['fas','envelope']"/> 邮箱:</span
                  >
                  {{myInfo.email}}
                </li>
                <li>
                  <span class="span-info"
                    ><font-awesome-icon :icon="['fas','phone']"/> 电话:</span
                  >
                  {{myInfo.phone}}
                </li>
                <li>
                  <span class="span-info"
                    ><font-awesome-icon :icon="['fas', 'globe-asia']"/> 个人网站:</span
                  >
                  <a :href="'http://'+myInfo.website">{{myInfo.website}}</a>
                </li>
                <li>
                  <span class="span-info"
                    ><font-awesome-icon :icon="['fab','skype']"/> Skype:</span
                  >
                  {{myInfo.skype}}
                </li>
                <li>
                  <span class="span-info"
                    ><font-awesome-icon :icon="['fab','weibo']"/>
                    GitHub:</span
                  >
                  <a :href='myInfo.github.site'>{{myInfo.github.name}}</a>
                </li>
                <li>
                  <span class="span-info"
                    ><font-awesome-icon :icon="['fab','google-drive']"/>
                    bilibili:</span
                  >
                  <a :href="myInfo.bilibili.site">{{myInfo.bilibili.name}}</a>
                </li>
              </ul>
            </div>

            <!-- /Contact Info -->
            <div class="clear"></div>

            <div class="title_content tiltle_contacts" style="float: none">
              <div class="text_content">关注我</div>
              <div class="clear"></div>
            </div>

              <!-- 个人社交软件 -->
            <div id="profile_social">
              <profile-icons />
            </div>
            <div class="clear"></div>
          </div>

          <div class="col-md-7">
            <!-- Contact Form -->
            <div class="title_content" style="float: none">
              <div class="text_content">有兴趣的可以留下联系方式和我讨论!</div>
              <div class="clear"></div>
            </div>

            <div class="contact-form">

              <div id="contact-status"></div>

              <form action="#" id="contactform" target="frameName">
                <p class="form-group" id="contact-name">
                  <label for="name">姓名</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control name-contact"
                    id="inputSuccess"
                    placeholder="Name..."
                    v-model="questName"
                  />
                </p>
                <p class="form-group" id="contact-email">
                  <label for="email">邮箱</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control email-contact"
                    id="inputSuccess"
                    placeholder="Email..."
                    v-model="questMail"
                    required
                  />
                </p>

                <p class="form-group" id="contact-message">
                  <label for="message">留言</label>
                  <textarea
                    name="message"
                    cols="88"
                    rows="6"
                    class="form-control message-contact"
                    id="inputError"
                    placeholder="Message..."
                    v-model="questMsg"
                  ></textarea>
                </p>
                <input type="reset" name="reset" value="清除" class="reset" />
                <!-- <input type="submit" name="submit" value="SEND MESSAGE" class="submit">-->

                <section class="button-demo" style="display: inline-block">
                  <button
                    class="ladda-button submit send_email"
                    name="submit"
                    data-color="green"
                    data-style="expand-left"
                    formaction='http://127.0.0.1:5000/contact'
                    formmethod='post'
                    @click.prevent='contactMe(questName,questMail,questMsg)'
                  >
                    发送
                  </button>
                </section>
              </form>
            </div>
            <!-- /Contact Form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
import profileIcons from '../profileIcons.vue'
import axios from 'axios'
import qs from 'qs'
export default {
  components: { profileIcons },
  data () {
    return {
      questName: '',
      questMail: '',
      questMsg: ''
    }
  },
  computed: {
    myInfo () {
      return this.$store.state.myProfile.myDetails.myInfo
    }
  },
  methods: {
    contactMe (name, mail, msg) {
      axios({
        method: 'post',
        // url: 'http://data.dovelin.cn/contact',
        url: 'http://127.0.0.1:5000/contact',
        data: {
          name: name,
          mail: mail,
          msg: msg
        },
        transformRequest: [
          function (data) {
          // 将请求数据转换成功 formdata 接收格式
            return qs.stringify(data)
          }
        ],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (req) {
        // console.log(req.data)
        alert(req.data)
      })
    }
  },
  setup () {
    AMapLoader.load({
      key: 'c0c6e86a15067065d61ffb5d309f8308', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      AMapUI: {
        // 是否加载 AMapUI，缺省不加载
        version: '1.1', // AMapUI 缺省 1.1
        plugins: ['overlay/SimpleMarker'] // 需要加载的 AMapUI ui插件
      },
      Loca: {
        // 是否加载 Loca， 缺省不加载
        version: '1.3.2' // Loca 版本，缺省 1.3.2
      }
    })
      .then((AMap) => {
        var map = new AMap.Map('container', {
          zoom: 11, // 级别
          center: [119.97618, 30.37714], // 中心点坐标
          viewMode: '3D' // 使用3D视图
        })
        var marker = new AMap.Marker({
          position: new AMap.LngLat(119.97618, 30.37714),
          title: 'address'
        })
        map.add(marker)
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>

<style>
#container {
    display: block;
    width: 100% !important;
    height: 300px !important;
    margin: 0 auto;
    -moz-box-shadow: 0 5px 20px #ccc;
    -webkit-box-shadow: 0 5px 20px #ccc;
    box-shadow: 0 5px 20px #ccc;
    border-bottom: 1px solid #CCC;
    border-top: 1px solid #CCC;
}
.contact-info ul li {
    font-size: 13px;
    line-height: 20px;
    color: #666;
    overflow: hidden;
    width: 267px;
}
.contact-info span{
  color: #3b5998;
}
.span-info svg{
  width: 1em !important;
}
#contactform .reset, #comment_form .reset {
    background-color: #999999;
    width: 120px;
}
#contactform .submit, #contactform .reset, #comment_form .submit, #comment_form .reset {
    color: #fff;
    padding: 8px;
    border: none;
    cursor: pointer;
    font-size: 13px;
    margin-left: 23px;
}
#contactform .submit, #comment_form .submit {
    background-color: #3B5998;
    width: 120px;
}

</style>
