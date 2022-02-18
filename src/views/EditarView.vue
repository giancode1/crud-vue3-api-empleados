<template>
<!-- <button @click="obtenerInformacionId">info</button> -->
    <div class="card mt-4">
      <h5 class="card-header text-center text-dark">Editar empleado</h5>
      <div class="card-body">

        <form @submit.prevent="actualizarEmpleado">
          <div class="form-group">
            <label class="text-dark" for="id">Id = {{empleado.id}}</label>
            
          </div>
          <div class="form-group">
            <label class="text-dark" for="nombre">Nombre</label>
            <input type="text" required class="form-control" id="nombre" v-model="empleado.nombre" placeholder="Nombre">
          </div>
          <div class="form-group mt-2">
            <label class="text-dark" for="correo">Correo</label>
            <input type="email" required class="form-control" id="correo" v-model="empleado.correo" placeholder="Correo">
          </div>
          <div class="btn-group mt-2" role="group" aria-label="">
              <button type="submit" class="btn btn-success">Modificar</button>
              <router-link :to="{name: 'listar'}" class="btn btn-danger">Cancelar</router-link>
          </div>
          
        </form>
      </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from "vue";

const empleado = ref({});
const route = useRoute();
const router = useRouter();

const actualizarEmpleado = () => {
    empleado.value.id = route.params.id;
    // console.log(empleado.value);

    fetch(`http://localhost/Develoteca/empleados-main/?actualizar=${route.params.id}`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(empleado.value)
    })
        .then(response => response.json())
        .then(data => {
            console.log('exito');
            // window.location.href = "../listar";
            router.push('/');
        })
        .catch(error => console.log(error));
}

const obtenerInformacionId = () => {
    fetch(`http://localhost/Develoteca/empleados-main/?consultar=${route.params.id}`)
        .then(response => response.json())
        .then(data => {
            empleado.value = data[0];
        })
        .catch(error => {
          alert('No existe ese empleado');
          router.push('/');
          // console.log(error)
        });
}
obtenerInformacionId()
</script>


<style lang="scss" scoped>

</style>