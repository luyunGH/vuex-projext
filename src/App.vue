<template>
  <div id="app">
    <div>
      <Input placeholder="请输入有效值" @on-enter="handleKeyup" style="width:300px"/>
    </div>
    <router-link to="/All" class="isActiveClass" tag="li">所有</router-link>
    <router-link to="/Active" tag="li">未完成</router-link>
    <router-link to="/Completed" tag="li">已完成</router-link>
    <router-view style="margin-top:20px;font-size:24px;"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods:{
    handleKeyup(ev){
      console.log(ev.target.value);//提交类型为add,会在vuex-index.js中定义，提交数据为ev.target.value
      // this.$store.commit("add",ev.target.value)//数据结构不够完整，需要存入是否选中的状态
      this.$store.commit("add",{text:ev.target.value,isChecked:false});
      ev.target.value = '';
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li{
  display:inline-block;
  width: 100px;
  height:40px;
  line-height:40px;
  border-bottom:2px solid #ff0000;
}
</style>
