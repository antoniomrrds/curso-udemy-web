<template>
  <div id="app">
    <h1>Calculadora com Vue !!! </h1>
    <Callculator/>
  </div>
</template>

<script>
import Callculator from "./main/Callculator"

export default {
  components: { Callculator },
  
};
</script>

<style>

@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-Thin.ttf");
}
*{
    font-family:"RobotoMono",monospace;

}
body{
    margin:0
}
#app{
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content:center;
    align-items: center;
    text-align: center;
    color: aqua;
    background: linear-gradient(to right, rgb(0, 90, 167), rgb(255, 253, 228));

}
</style>