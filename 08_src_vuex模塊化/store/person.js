import axios from "axios";
import { nanoid } from "nanoid";

export default{
    namespaced:true,
    state: {
      personList:[{id:'001',name:'Mandy'},{id:'002',name:'Eric'}]
    },
    getters: {
      firstPersonName(state){
        return state.personList[0].name
      }
    },
    mutations: {
      ADD_PERSON(state,value){
        console.log('mutations ADD_PERSON 被調用',state,value);
        state.personList.unshift(value)
      }
    },
    actions: {
      addPersonWang(context,value){
        if(value.name.indexOf('王') === 0){
          context.commit('ADD_PERSON',value)
        }else{
          alert('不符合規定')
        }
      },
      addPersonServer(context){
        axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
          res =>{
            context.commit('ADD_PERSON',{id:nanoid(),name:res.data})
          },
          err =>{
            alert(err.msg)
          }
        )
      }
    },
  }