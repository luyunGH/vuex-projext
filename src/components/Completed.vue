<template>
<div>
    已完成的
    <ul>
        <li v-for="data in todoList" v-if="data.isChecked">
            <input type="checkbox" v-model="data.isChecked">
            {{data.text}}{{data.isChecked}}
        </li>
    </ul>
</div>
</template>

<script>
import {mapState} from 'vuex'
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
<style scoped>
</style>