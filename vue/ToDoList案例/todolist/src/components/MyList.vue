<template>
  <ul class="todo-main">
      <MyItem 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo="todoObj"
      />
  </ul>
</template>

<script>
  import MyItem from './MyItem'
  export default {
    name:'MyList',
    components:{MyItem},
    props:['todos']
}
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}


.todo-enter-active{
    animation: atguigu 1s linear;
  }

  .todo-leave-active{
    animation: atguigu 1s reverse;
  }

  @keyframes atguigu {
    from{
      transform: translateX(100%);
    }to{
      transform: translateX(0px);

    }
  }
</style>