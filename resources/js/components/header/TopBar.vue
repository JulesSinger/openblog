<template>
  <div class="top-bar">
    <img v-if="darkMode" class="logo" src="/images/others/logo_openblog_dark.svg" alt="L'OpenBlog">
    <img v-else class="logo" src="/images/others/logo_openblog.svg" alt="L'OpenBlog">
    <div class="top-bar-actions">
      
      <DarkMode @toggleTheme="darkMode = !darkMode" />
      
      <div id="auth-actions" v-if="!isLogged">
        <router-link :to="{name: 'Register'}" class="btn btn-light">Inscription</router-link>
        <router-link :to="{name: 'Login'}" class="btn btn-markup">Connexion</router-link>
      </div>

      <div id="account-actions" v-else>
        <router-link v-if="loggedUser.role =='admin'" :to="{name: 'AdminPanel'}" class="btn btn-markup">Panel Admin</router-link>
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
import { ref } from 'vue'
import { useAuth } from '../../api/auth.js'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
export default {
  name: 'TopBar',

  components: {
    DarkMode
  },

  setup() {
    // router & store
    const router = useRouter()
    const store = useStore()

    // dark/light mode
    const darkMode = ref(true)
    if (!localStorage.getItem('preferredDarkMode') || localStorage.getItem('preferredDarkMode') == 'false') 
      darkMode.value = false

    // logout request
    const { logout_user } = useAuth()

    return {
      isLogged: computed(() => store.state.auth.authenticated),
      loggedUser: computed(() => store.state.auth.user),
      logout: () => {
        logout_user((response) => {
          store.dispatch('auth/logout_store')
          router.push({ name: 'Home' })
        })
      },
      darkMode,
    }
  },
}
</script>