<template>
  <div class="todo-footer" v-show="todos.length">
    <label for="">
      <input type="checkbox" :checked="isAll" @change="checkAll"/>
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span>/全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name:'MyFooter',
    props:['todos','changeAll','deleteAll'],
    computed:{
      doneTotal(){
        return this.todos.reduce((pre,todo)=>{
          return pre + (todo.done ? 1 : 0)
        },0)
      },
      isAll(){
        return this.doneTotal === this.todos.length && this.todos.length>0
      },
    },
    methods: {
      checkAll(e){
        // console.log(e.target.checked);\
        this.changeAll(e.target.checked)
      },
      clearAll(){
        this.deleteAll()
      }
    }
}
</script>

<style scoped>
  .todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .todo-footer label input{
    position: relative;
    top:-1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .todo-footer button{
    float: right;
    margin-top: 5px;
  }
</style>