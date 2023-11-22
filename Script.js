new Vue({
    el: '#app',
    data: {
      newTask: '',
      tasks: [],
      currentDateTime: new Date().toLocaleString() // Inicializa com a data e hora atuais
    },
    methods: {
      addTask: function() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ name: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      toggleTask: function(task) {
        task.completed = !task.completed;
      },
      deleteTask: function(index) {
        this.tasks.splice(index, 1);
      },
      markAllComplete: function() {
        this.tasks.forEach(function(task) {
          task.completed = true;
        });
      },
      updateDateTime: function() { 
        this.currentDateTime = new Date().toLocaleString();
      }
    },
    mounted: function() {
      this.addTask();
      setInterval(this.updateDateTime, 1000); // Atualiza a data e hora a cada segundo
    }
  });
  
