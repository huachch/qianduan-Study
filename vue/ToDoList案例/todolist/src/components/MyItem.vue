<template>
    <li>
      <label for="">
        <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"> 
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo,$event)"
          ref="inputTitle"
          @keyup.enter="handleBlur(todo,$event)"
          >
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
  export default {
    name:'MyItem',
    props:['todo'],
    methods:{
      handleCheck(id){
        // console.log(id);
        // this.checkTodo(id)
        this.$bus.$emit('checkTodo',id)
      },
      handleDelete(id){
        if(confirm('确认删除吗？'))  this.$bus.$emit('deleteTodo',id)
      },
      handleEdit(todo){
        if(todo.hasOwnProperty.call('isEdit')){
          todo.isEdit = true
        }else{
          this.$set(todo,'isEdit',true)
        }
        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
      },
      handleBlur(todo,e){
        todo.isEdit = false
        this.$bus.$emit('updateTodo',todo.id,e.target.value)
      }
    } 
}
</script>

<style scoped>
  li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label{
    float:left;
    cursor:pointer;
  }
  li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top:-1px
  }
  li button{
    float:right;
    display: none;
    margin-top: 3px;
  }
  li:before{
    content:initial;
  }
  li:last-child{
    border-bottom: none;
  }
  li:hover{
    background-color: #ddd;
  }
  li:hover button{
    display: block;
  }

</style>