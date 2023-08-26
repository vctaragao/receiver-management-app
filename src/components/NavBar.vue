<script setup>
import TransfeeraLogo from '../components/icons/TransfeeraLogo.vue'
</script>

<template>
  <nav>
    <div class="logo">
      <RouterLink to="/">
        <transfeera-logo /> <span>Transfeera</span>
      </routerlink>
    </div>

    <div class="router-links">
      <RouterLink to="/">
        Home
      </RouterLink>
      <RouterLink to="/about">
        Recebedores
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.logo{
    width: 10%;
}

.logo svg{
    width:100%;
}

.logo a{
    display: flex;
    align-items: center;
}

.logo a span{
    margin-left: .5rem;
}

.logo a:hover{
    cursor:pointer;
    background-color: transparent;
}

.router-links {
    text-align: center;
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    padding-left: .5rem;
}

.router-links a {
    margin-left: 1rem;
    color: var(--vt-back-mute);
}
.router-links a:first-child {
    margin-left: 0rem;
}

.router-link-active{
    color: hsla(160, 100%, 37%, 1) !important;
}
</style>
