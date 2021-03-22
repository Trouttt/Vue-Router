<template>
  <div class="about">
    <input type="text" name="email" id="email" placeholder="E-mail"><br>
    <input type="text" name="nome" id="nome" placeholder="Nome"><br>
    <h4>{{params}}</h4>
    <button>Teste!</button>
  </div>
</template>

<script>
export default {
  created(){
    this.params = this.$route.params.id;
  },
  data(){
    return {
      params: "Nothin"
    }
  }
}
</script>
