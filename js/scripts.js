const { createApp } = Vue

createApp({
  data() {
    return {
      todo:[
        {
          task: 'Creare Milestone 1',
          done: false
        },        {
          task: 'Creare Milestone 2',
          done: false
        },        {
          task: 'Creare Milestone 3',
          done: false
        },
      ]
    }
  },
  methods:{
    manageDoneTasks(index){
      return this.todo[index].done == true ? 'task-done' : '';
    },
    deleteTasks(index){
      return this.todo.splice(index, 1);
    },
  }
}).mount('#app')