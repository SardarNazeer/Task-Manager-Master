import {createStore} from 'vuex'

const store = createStore({
  state: {
    users : [],
    tasks: []
  },
  mutations: {
    initUsers (state, users) {
      state.users = [...users]
    },
    initTasks(state, tasks){
        state.tasks = [...tasks]
    },

    addTask(state, task){
      state.tasks.push(task)
    },

    deleteTask(state, id){
      state.tasks = state.tasks.filter(task =>
        task.id != id
      )
    },

    editTask(state, data){
      state.tasks.find((task)=>{
        if(task.id == data.id){
          task.title = data.title;
          task.description = data.description;
          return task
        }
      })
    }
  },
  getters:{
    users(state){
        return state.users
    },
    tasks(state){
        return state.tasks
    }
  }
})

export default store