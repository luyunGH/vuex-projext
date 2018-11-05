<template>
<div>
    all组件
    <ul>
        <li v-for = "data in todoList" :title ="title">
            <input type="checkbox" v-model="data.isChecked">
            <span :class="{delActive:data.isChecked}">{{data.text}}</span>
        </li>
    </ul>
    <test-components></test-components>
</div>
</template>

<script>
import {mapState} from "vuex";
import testComponents from "./testComponents";
export default {

    components: {testComponents},
    data () {
        return {
            title: '鼠标移入显示内容'
        };
    },
    // 计算属性
    computed: {
        ...mapState(["todoList"])

    },

    mounted () {},

    methods: {}
}

</script>
<style scoped>
    .delActive{
        text-decoration: line-through;
        color:gray;
    }
</style>