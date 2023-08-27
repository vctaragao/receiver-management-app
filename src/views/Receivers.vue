<script setup>
import Navbar from '../components/NavBar.vue';
import AddIcon from '../components/icons/Add.vue';
</script>

<template>
  <header>
    <navbar />
    <div class="actions">
      <button> Seus Recebedores <add-icon /></button> 
      <input
        type="text"
        placeholder="Nome, CPF, agência ou conta"
      >
    </div>
    <div class="divider" />
  </header>
  <main />
</template>

<style scoped>
header{
    padding-top: 1rem;
    padding-left: 3rem;
    margin-right: 5rem;
}

.actions{
    display:flex;
    justify-content: space-between;
}

.actions button{
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    color: var(--vt-c-white-mute);
}

.actions button:hover{
    color: var(--vt-c-white);
}


.actions button svg{
    width: 2rem;
    height: 2rem;
    color: white;
    fill: hsla(160, 100%, 25%, 1);
    transition: .5s;
    margin-left: 1rem;
}
.actions button:hover svg{
    fill: hsla(160, 100%, 37%, 1);
}

.actions input{
    padding: .5rem;
    width: 20%;
    border-radius: 8px;

}

.divider{
    margin-top: 2rem;
    width: 100%;
    height: .5rem;
    background-color: var(--vt-c-divider-dark-1);
    border-radius: 8px;
}
</style>
