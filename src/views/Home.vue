<template>
  <div class="home">
     <table class ="table">
      <tr>
        <td class= "columna1">
          <p class="parrafo">
             Módulo donde se podrá crear, consultar y modificar los productos de una organizaciónes
          </p>
        </td>        
        <td class="columna2">
          <img src="../assets/producto.jpg"> 
        </td>
      </tr>
    </table>
  </div>
</template>

<script >
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
<style scoped>
.table{
    border-collapse: separate;
    border-spacing: 50px 50px;
  }
  img{
    
    height: 300px;


  }
</style>


