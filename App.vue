<script>
  export default{
  data(){
    return {
      pessoas:[
        {nome: 'Hugo', idade: 20},
        {nome: 'Heitor', idade: 30},
        {nome: 'Luiz', idade: 40},
        {nome: 'Pablo', idade: 50},
      ]
    };
  },
};

</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="pessoa in pessoas">
        <th>{{ pessoa.nome }}</th>
        <th>{{ pessoa.idade }}</th>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
