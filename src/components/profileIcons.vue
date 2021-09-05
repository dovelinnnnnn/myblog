<template>
    <span @click="copyMsg(0)"
      ><font-awesome-icon :icon="['fas', 'phone']"
    /></span>
    <span @click="copyMsg(1)"><font-awesome-icon :icon="['fab', 'qq']" /></span>
    <span @click="copyMsg(2)"
      ><font-awesome-icon :icon="['fas', 'envelope']"
    /></span>
    <span @click="copyMsg(3)" style="margin-right: 0"
      ><font-awesome-icon :icon="['fab', 'weixin']"
    /></span>
</template>

<script>
export default {
  methods: {
    showDetails (val) {
      console.log(val)
    },
    copyMsg (i) {
      console.log(this)
      if (i === 0) {
        this.goTel()
      } else if (i === 1) {
        this.goQQ()
      } else if (i === 2) {
        this.copyText('13396551377@163.com')
        alert('邮箱复制成功！')
      } else if (i === 3) {
        this.copyText('Luoye2333')
        alert('微信号复制成功！')
        this.goWeChat()
      }
    },
    goWeChat () {
      window.location.href = 'weixin://'
    },
    goQQ () {
      window.location.href =
        'tencent://message/?uin=823548797&Site=Sambow&Menu=yes'
    },
    goTel () {
      window.location.href = 'tel:13396551377'
    },
    copyText (text) {
      const cInput = document.createElement('input')
      cInput.value = text
      document.body.appendChild(cInput)
      cInput.select()
      document.execCommand('copy')
      document.body.removeChild(cInput)
    }
  }
}
</script>

<style scoped>
span {
    width: 45px;
    height: 45px;
    line-height: 45px;
    margin: 0px 0px 0px 5px;
    padding: 0;
    border-width: 1px;
    border-style: solid;
    text-align: center;
    font-size: 24px;
    float: left;
    display: block;
    color: #fff;
    -webkit-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    -o-transition: all .3s ease-in;
    transition: all .3s ease-in;
    background-color:#3b5998;

}
span:hover {
  color: #3b5998;
  background-color:#fff;
}
@media only screen and (max-width: 1199px) {
  span {
    width: 34px;
    height: 34px;
    line-height: 34px;
    font-size: 20px;
    margin-left: 15px;
  }
}
@media only screen and (min-width: 1200px) {
  span {
    width: 45px;
    height: 45px;
    line-height: 45px;
    font-size: 24px;
    margin-left: 17px;
  }
}
</style>
