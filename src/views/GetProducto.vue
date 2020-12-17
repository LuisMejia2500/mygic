<template>
  <div id="create">
    <h2 align="center">Consultar producto </h2>

    
    
    <div class="formulario">
      
      <table>
        
          <div class="titulo">

                      <tr>
          <td ></td>
        </tr>
          </div>

        <tr>
          <td>
            <div class="izquierda">
              <form>
              <ul>
                <li><input type="text" v-model="codigo" placeholder="Codigo Producto"></li>
                <li><button v-on:click="consultarProducto">CONSULTAR PRODUCTO</button></li>
                
              </ul>
            </form>
            </div>
            
          </td>

          
          <td>
            <div class="derecha">          
                <h2>Informacion</h2>
                <p v-if="!condatos"><span>Nombre: </span>{{products.nombre}}</p>
                <p v-if="!condatos"><sp>Cantidad disponible:</sp>{{products.cantidad_disponible}}</p>
                <p v-if="!condatos"><span>Costo de adquisicion:</span>{{products.costo_adquisicion}}</p>
                <p v-if="!condatos"><span>Precio venta:</span>{{products.precio_venta}}</p>
                
               
</div>

          </td>

        </tr>
      </table>
    </div>

  </div>
</template>
<script>
import axios from 'axios';
export default {
  data:function(){
    return{
      codigo:"",
      condatos:true,
      products:{
       
        nombre:"",
        cantidad_disponible:"",
        costo_adquisicion:"",
        precio_venta:"",
      }
    }

  },
  methods:{
    consultarProducto: function(){
      let self = this
      axios.get("https:/mygic-api.herokuapp.com/product/"+self.codigo)
        .then((result)=>{
          self.products.nombre=result.data.nombre,
          self.products.cantidad_disponible=result.data.cantidad_disponible,
          self.products.costo_adquisicion=result.data.costo_adquisicion,
          self.products.precio_venta=result.data.precio_venta,
          self.condatos=true

         
        })
        .catch((error=>{
          alert("ERROR"+ error)
        }))

    }


  }
  
}
</script>


<style scoped>
div{
  text-align: center;
}
ul{
  list-style: none
}
li{
  margin: 0.5%;
  padding: 2pt;
}
 h2{
   margin-left: 4%;
 }
 input{
   width: 150px;
   border-radius: 20px;
   font-size:15px ;
   height: 20px;
  
 }
 button{
   font-family: Arial;
  color: #ffffff;
  font-size: 11px;
  padding: 10px;
  text-decoration: none;
  -webkit-border-radius: 28px;
  -moz-border-radius: 28px;
  border-radius: 28px;
  -webkit-box-shadow: 0px 1px 3px #666666;
  -moz-box-shadow: 0px 1px 3px #666666;
  box-shadow: 0px 1px 3px #666666;
  text-shadow: 1px 1px 3px #666666;
  border: solid #2a5c28 2px;
  background: #2a5c28;
  
 
 }
.button:hover {
  background: #000000;
}

h2{
  font-size: 40px;

 
}

.formulario{
    
    border-radius:15px;
    border:solid 3px rgb(0, 0, 0);
    height: 50%;
    width: 95%;
    margin-left: 60px;
    margin-top: 0px;
    background: #ffff80;

    display: flex;


}
.derecha{
  margin-left: 500px;
}

.izquierda{
  margin-left: 80px;
}
 .titulo{
   margin-left:30px;
   height: 100%;
 }




</style>


