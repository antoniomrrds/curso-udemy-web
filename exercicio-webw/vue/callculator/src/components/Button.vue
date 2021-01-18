<template>
  <button class="button"
   @click="$emit('onClick',label)"
   :class="{ double, triple, operation }"> 
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {},
    operation: { type: Boolean },
    double: { type: Boolean },
    triple: { type: Boolean },
  },
};
</script>

<style>
:root {
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
}
.button {
  font-size: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none; /*Quando clica fica uma sombra (removido)*/
}
.button:active {
  background-color: #ccc;
}
.button.double {
  grid-column: span 2;
}
.button.triple {
  grid-column: span 3;
}
.button.operation {
  background-color: #ff0000;
  color: #000000;
}
.button.operation:active {
  background-color: rgb(175, 3, 3);
}
</style>