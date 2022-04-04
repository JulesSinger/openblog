<template>
  <div class="top-bar">
    <img v-if="darkMode" class="logo" src="/images/others/logo_openblog_dark.svg" alt="L'OpenBlog">
    <img v-else class="logo" src="/images/others/logo_openblog.svg" alt="L'OpenBlog">
    <div class="top-bar-actions">
      <div v-if="token && user">
        {{user}}
      </div>
      
      <DarkMode @toggleTheme="darkMode = !darkMode" />
      
      <div id="auth-actions" v-if="!token">
        <router-link :to="{name: 'Register'}" class="btn btn-light">Inscription</router-link>
        <router-link :to="{name: 'Login'}" class="btn btn-markup">Connexion</router-link>
      </div>

      <div id="account-actions" v-else>
        <router-link :to="{name: 'Account'}" class="btn btn-link"><img src="/images/icons/man-user.svg" alt="user"></router-link>
        <router-link :to="{name: 'Home'}" class="btn btn-link" @click="logout"><img src="/images/icons/logout.png" alt="logout"></router-link>
      </div>

      <div id="networks-links">
        <img src="/images/icons/twitter.svg" alt="twitter">
        <img src="/images/icons/discord.svg" alt="discord">
        <img src="/images/icons/linkedin.svg" alt="linkedin">
        <img src="/images/icons/instagram.svg" alt="instagram">
      </div>

      <div class="mobile-nav">
        <img src="/images/icons/man-user.svg" alt="compte">
        <div class="hamburger">
          <img src="/images/icons/menu.svg" alt="menu">
          <p>MENU</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DarkMode from './DarkMode.vue'
import { ref, computed} from 'vue'
import store from '../../store'
export default {
  name: 'TopBar',

  components: {
    DarkMode
  },

  setup() {
    const darkMode = ref(false)
    if (!localStorage.getItem('preferredDarkMode') || localStorage.getItem('preferredDarkMode') == 'false') {
      darkMode.value = false
    } else {
      darkMode.value = true
    } 

    return {
      darkMode,
      token: computed(() => store.state.user.token),
      user: computed(() => store.state.user.data),
      logout: () => store.dispatch('logout')
    }
  },
}
</script>