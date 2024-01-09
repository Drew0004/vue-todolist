const { createApp } = Vue

createApp({
  data() {
    return {
      newtodo: '',
      todo:[
        {
          task: 'Creare Milestone 1',
          done: true
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
      return this.todo[index].done == true ? 'task-done' : 'task-undone';
    },
    deleteTasks(index){
      return this.todo.splice(index, 1);
    },
    createNewTask(newTask){
      if (newTask.trim().length > 3){
        let newObject = {
          task: newTask,
          done: false
        }
        this.todo.push(newObject);
        console.log(this.todo)
        this.newtodo = '';
      }
    }
  }
}).mount('#app')

      