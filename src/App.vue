
<template>
  <div class="container">
    <h1>CALCULADORA</h1>
    <div class="calculator">
      <input :value="text_operation !== '' ? text_operation : 0" class="calculator__display" :readonly="isReadonly"> 
      <div class="calculator__buttons">
        <button class="button" @click="select_number('7')">7</button>
        <button class="button" @click="select_number('8')">8</button>
        <button class="button" @click="select_number('9')">9</button>
        <button class="button" @click="select_number('/')">/</button>
        <button class="button" @click="select_number('4')">4</button>
        <button class="button" @click="select_number('5')">5</button>
        <button class="button" @click="select_number('6')">6</button>
        <button class="button" @click="select_number('*')">x</button>
        <button class="button" @click="select_number('1')">1</button>
        <button class="button" @click="select_number('2')">2</button>
        <button class="button" @click="select_number('3')">3</button>
        <button class="button" @click="select_number('-')">-</button>
        <button class="button" @click="select_number('0')">0</button>
        <button class="button" @click="calcOperation">=</button>
        <button class="button" @click="select_number('+')">+</button>
        <button class="button" @click="text_operation = ''" >C</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Importa la función ref del módulo Vue
import { ref } from "vue"; 

// Importa la función calculate del archivo operations.js en la carpeta utils
import { calculate } from './utils/operations'; 

// Crea una referencia reactiva llamada text_operation con un valor inicial de una cadena vacía. Esta referencia se puede actualizar y se puede usar para actualizar dinámicamente el contenido de la página web.

const text_operation = ref('') 

//coloca el numero seleccionado
const select_number = (number_selected : string ) => {
  text_operation.value += number_selected
}

//Calcula las operaciones
const calcOperation = () =>{
  text_operation.value = calculate(text_operation.value)
}

//Bloquea el input 
const isReadonly = true

</script>
