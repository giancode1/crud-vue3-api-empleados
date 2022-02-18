<template>
<div class="container">
  <div class="card mt-4">
    <h5 class="card-header text-center text-dark">Agregar nuevo empleado</h5>
    <div class="card-body">
      <form @submit.prevent="agregarEmpleado">
        <div class="form-group">
          <label class="text-dark" for="nombre">Nombre</label>
          <input type="text" required class="form-control" id="nombre" v-model="empleado.nombre" placeholder="Nombre">
        </div>
        <div class="form-group mt-2">
          <label class="text-dark" for="correo">Correo</label>
          <input type="email" required class="form-control" id="correo" v-model="empleado.correo" placeholder="Correo">
        </div>
        <div class="btn-group mt-2" role="group" aria-label="">
            <button type="submit" class="btn btn-primary">Agregar</button>
            <router-link :to="{name: 'listar'}" class="btn btn-danger">Cancelar</router-link>
        </div>
        
      </form>
    </div>
  </div>
</div>

</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'

const empleado = ref({});
const router = useRouter()


const agregarEmpleado = () => {
    console.log(empleado.value);

    fetch("http://localhost/Develoteca/empleados-main/?insertar=1", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(empleado.value)
    })
        .then(response => response.json())
        .then(data => {
            console.log('exito');
            // window.location.href = "listar";
            router.push('/');

        })
        .catch(error => console.log(error));
}


</script>

<style lang="scss" scoped></style>
