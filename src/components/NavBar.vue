<script setup>
import TransfeeraLogo from './icons/TransfeeraLogo.vue'
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <TransfeeraLogo />
    </div>
    <div class="router-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </nav>
</template>
