<template>
    <div class="container">
        
        <div class="card mt-4">
          <h5 class="card-header text-center text-dark">
            Empleados
          </h5>
          <div class="card-body">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="empleado in empleados" :key="empleado.id">
                  <td>{{empleado.id}}</td>
                  <td>{{empleado.nombre}}</td>
                  <td>{{empleado.correo}}</td>
                  <td>
                    <!-- <button type="button" class="btn btn-success me-2">Editar</button> -->
                    <router-link :to="{name: 'editar', params:{id:empleado.id}}" class="btn btn-info me-2">Editar</router-link>
                    <!-- <button @click="borrarEmpleado(empleado.id)" type="button" class="btn btn-danger" >Borrar</button> -->
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop' + empleado.id" >
                      Borrar
                    </button>
                    <Modal  :empleado="empleado" @borrar="borrarEmpleado" />
                  </td>
                </tr>

              </tbody>
            </table>
            
          </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, RouterLink } from 'vue-router';
import Modal from '@/components/Modal.vue';

const empleados = ref([]);
// const router = useRouter();

onMounted(async () => {
    console.log("onMounted")
    try {
      const response = await fetch("http://localhost/Develoteca/empleados-main/");
      const data = await response.json();
      empleados.value = data;
    } catch (error) {
      console.log(error);
    }
});


// const consultarEmpleados = () =>{
//   fetch('http://localhost/Develoteca/empleados-main/')
//   .then(response => response.json())
//   .then(data => {  
//     console.log("data:", data);
//     empleados.value = data;
//   })
//   .catch(error => console.log(error));
// }
// consultarEmpleados();

const borrarEmpleado = (id) => {

  fetch(`http://localhost/Develoteca/empleados-main/?borrar=${id}`)
  .then(response => response.json())
  .then(rpa => {
    console.log("rpa:", rpa);
    // window.location.href = "listar";
    //actualizar la lista de empleados
    consultarEmpleados();
  })
  .catch(error => console.log("error:",error));
}
</script>

<style lang="scss" scoped>

</style>