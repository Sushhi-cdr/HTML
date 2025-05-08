<script>
  export default{
  data(){
    return {
      nome: "",
      senha: "",
      confsenha: "",
    };
  },
};

</script>

<template>
  <label>Login</label>
  <input v-model="nome"/>

  <label>senha</label>
  <input v-model="senha"/>

  <label>confirmar senha</label>
  <input v-model="confsenha"/>

  <h1 v-if="senha != confsenha">Senha Incorreta</h1>
</template>

<style></style>
