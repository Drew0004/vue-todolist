const { createApp } = Vue

createApp({
  data() {
    return {
      newtodo: '',
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
    manageDoneTasksClass(index){
      return this.todo[index].done == true ? 'task-done' : 'task-undone';
    },
    deleteTasks(index){
      return this.todo.splice(index, 1);
    },
    createNewTask(newTask){
      if (newTask.trim().length > 3){
        let newObject = {
          task: newTask.trim(),
          done: false
        }
        this.todo.push(newObject);
        console.log(this.todo)
        this.newtodo = '';
      }
    },
    manageDoneTasks(index){
      if (this.todo[index].done === false){
        this.todo[index].done = true;
      }else{
        this.todo[index].done = false;
      };
    }
  }
}).mount('#app')

      