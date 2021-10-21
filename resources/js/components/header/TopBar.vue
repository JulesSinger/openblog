<template>
  <div class="top-bar">
    <img class="logo" src="/images/others/logo_openblog.svg" alt="L'OpenBlog">
    
    <div class="top-bar-actions">
      
      <div id="theme-action">
        <input class="container_toggle" type="checkbox" id="switch-theme" name="mode">
        <label for="switch-theme">Toggle</label>
      </div>

      <div id="auth-actions">
        <button class="btn btn-light">Inscription</button>
        <button class="btn btn-markup">Connexion</button>
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
export default {
  name: 'TopBar'
}
</script>