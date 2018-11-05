<template>
<div>
    我是公共部分，哪里需要哪里去组件
    <ul>
        <li v-for="item in listItem">
            {{item.name}}
        </li>
    </ul>
    <button v-on:click="addItem">操作按钮</button>
</div>
</template>

<script>
import Vue from 'vue'
export default {

components: {},

name:'',

props:[''],

data () {
    return {
        listItem:[
            {
                name:'小云云',
                love: '小白菜' 
            },
            {
                name:'米老鼠',
                love: '爱大米' 
            }
        ]
    };
},

computed: {},

mounted () {},

methods: {
    addItem () {
        //用来更改自定义数组中的值
        Vue.set(this.listItem,1,{
            name:'TANGLAOYA',
            love: '爱大米'
        })
    }
}
}

</script>
<style scoped>
</style>