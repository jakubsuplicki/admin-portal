import { createStore } from 'vuex'
import { VueCookieNext } from 'vue-cookie-next'

export default createStore({
  state: {
    token: localStorage.getItem('dashboardaccess') || null
  },
  getters: {
    isAuthenticated(state) {
      //added base validation for expiring cookie for additional security
      //could also add db sessions with expiring tokens on the backend for extra level of security
      const cookieToken = VueCookieNext.getCookie('dashboardaccess')
      return state.token && cookieToken ? true : false
    },
    getToken: state => state.token
  },
  mutations: {
    authenticate(state, payload) {
      //set cookie and local storage
      payload.cookie.setCookie('dashboardaccess', {token: payload.token});
      localStorage.setItem('dashboardaccess', payload.token)
      state.token = payload.token
    },
    deauthenticate(state, payload) {
      //remove token from cookies and local storage
      payload.removeCookie('dashboardaccess');
      localStorage.removeItem('dashboardaccess')
      state.token = null
    }
  },
  actions: {
  },
  modules: {
  }
})
