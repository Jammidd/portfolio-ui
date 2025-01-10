const AppState = {
    namespaced: true,
  
    state: {
      locale: null
    },
    mutations: {
      SET_LOCALE (state, locale) {
        state.locale = locale
      }
    },
    getters: {
      locale: state => {
        return state.locale
      }
    }
  }
  
  export default AppState
  