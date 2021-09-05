<template>
  <div class="reference clearfix">
    <!-- .title_content -->
    <div class="title_content" style="margin-bottom: 5px">
      <div class="text_content">Client reference
        <i :click='a'>
          <font-awesome-icon :icon='["fas", "plus-square"]' />
        </i>
      </div>

      <div class="clear"></div>
    </div>
    <div :class='{}'></div>
    <!-- /.title_content -->

    <ul>
      <li class="clearfix" v-for='(val,index) in perference' :key='index'>
        <img
          :src="val.imgUrl"
          class="img_reference"
          width="100"
          height="100"
          alt=""
        />
        <p>
          {{val.impression}}
        </p>
        <span>{{val.namecard}}</span>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      perference: [
        {
          imgUrl: 'http://placehold.it/100x100',
          impression: "“Many desktop publishing packages and web page editors now use LoremIpsum as their default will model text, and a search for 'lorem ipsum'hope is uncover many web sites still”",
          namecard: 'John Doe, UX Designer'
        },
        {
          imgUrl: 'http://placehold.it/100x100',
          impression: '“very nice colleague she always helped me out if i didnt know something editors now use Lorem Ipsum as their default',
          namecard: 'Leia Calvi, UX Designer'
        },
        {
          imgUrl: 'http://placehold.it/100x100',
          impression: '“old colleague and now close friend, she is really sweet and helpfull packages and web page editors now use Lorem Ipsum as their default will model text”',
          namecard: 'Maria Callas, UX Designer'
        }
      ]
    }
  },
  methods: {
    a () {}
  },
  mounted () {
  }
}
</script>

<style lang='scss'>
.reference ul li {
    margin-top: 15px;
}
ul, li, nav {
    font: inherit;
    vertical-align: baseline;
    margin: 0;
    padding: 0;
    list-style: none;
}
.img_reference {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin-right: 15px;
    float: left;
    border-radius: 50px;
}
.reference p {
    padding-top: 15px;
}
.reference span {
    color: #3B5998;
    font-size: 14px!important;
}
.text_content i{
  margin-left: 10px
}
</style>
