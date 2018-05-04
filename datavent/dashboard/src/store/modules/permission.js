import { constantRouterMap } from '@/router'

const permission = {
  state: {
    routers: constantRouterMap
  },
  mutations: {
    SET_ROUTERS: (state) => {
      state.routers = constantRouterMap
    }
  },
  actions: {
    SetRoutes({ commit }, data) {
      return new Promise(resolve => {
        commit('SET_ROUTERS')
        resolve()
      })
    }
  }
}

export default permission
