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
  }
}).mount('#app')