<template>
  <div id="app">
        <div class="Header">  
    <nav>
      <h1>MyGIC</h1>
        <button> <router-link to="/inicio">Inicio</router-link></button>
        <button><router-link to="/crearProducto">Crear</router-link></button>
        <button><router-link to="/consultarProducto">Consultar</router-link>  </button>
    </nav>
  </div>
  
    <router-view/>

      <div class="footer">    
     <p>Desarrollado por G2M3Grupo3</p>    
  </div>

    
  </div>
</template>


<style scoped>
 body{
      margin: 0 0 0 0;
      font-family: /*'Josefin Sans', sans-serif,*/ 'Bungee', cursive;
      background-image: linear-gradient(to bottom right, white 0%, rgb(183, 240, 50) 100%);

 }
   nav{
       margin-right: 60px;
       min-height: 100px;
       background: #99FF99;
       justify-content: center;
        margin: 0%;
        margin-top: 0%;
        padding: 0;
        width: 100%;
        height: 10px;
        min-height: 100px;
        left:0%;

        background-color: #99FF99 ;
        color:#0f1011  ;

        display: flex;
        justify-content: space-between;
        align-items: center;
       
   }
   h1{
       margin-left: 60px;
       font-size: 40pt; 
       font-family: 'Bungee';       
   }
   button{
       font-size: 18pt;
       color: black;
       background-color: white;
       border-radius: 20px;
       padding: 5px 20px;
       margin:0px;      
   }
   .button:hover{
       background-color: white;
   } 

   .footer{      
        background-color: #99FF99;
        width: 100%;
        height: 81px;
        position: absolute;
        bottom: 0;
        left: 0; 
        text-align: center;
        align-items: center;

        
    }
    p{
        font-size: 15pt;
        color: black;
        margin-top: 2.5%;    
    }
    nav{
      text-decoration: none;
      text-decoration-style: none;
    }

</style>
