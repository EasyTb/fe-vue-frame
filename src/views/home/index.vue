<template>
  <div class="hello">
    <template  v-for="item in msg">
      <subitem :itemtype='item.type' :ref="item.name+'123'" :selecttype='stype'>{{item.name}}</subitem>
    </template>
      
      
  </div>
</template>

<script>
import subitem from './subitem'
export default {
  name: 'HelloWorld',
  components : {subitem},
  data () {
    return {
      stype : 'v',
      msg: [
         {
           type : "n",
           name : "我"
         },
         {
           type : "n",
           name : "我1"
         },
         {
           type : "n",
           name : "我2"
         },
         {
           type : "n",
           name : "我3"
         },
         {
           type : "v",
           name : "我4"
         },
         {
           type : "v",
           name : "cc"
         }
      ]
    }
  },
  mounted(){

    console.log(this.$refs.cc123)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
