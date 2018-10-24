import { setToken } from '@/utils/auth'

const user = {
  state: {
    name: ''
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    }
  },
  actions: {
    getUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_NAME', 'admin')
        setToken('admin')
        resolve()
      })
    }
  }
}
export default user
