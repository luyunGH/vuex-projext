<template>
    <div>
        未完成的
        <ul> 
            <li v-for="item in todoList" v-if="!item.isChecked">
                <input type="checkbox" v-model="item.isChecked">
                <span>{{item.text}}{{item.isChecked}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {

// components: {},
data () {
return {
};
},

computed: {
    ...mapState(["todoList"])
},

mounted () {},

methods: {}
}

</script>
<style>
</style>