import Vuex from 'vuex';
import Vue from 'vue';


Vue.use(Vuex);

const stores = new Vuex.Store({
    state:{
        todoList:[]
    },
    mutations:{
        add:(state, payload)=>{
            console.log(state);
            state.todoList.push(payload);
        }
    }
});
export default stores;