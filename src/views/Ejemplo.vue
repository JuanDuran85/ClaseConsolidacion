<template>
    <section class="container">
        <h1>Ejemplo Vista: {{titulo3}}</h1>
        <section>
            <h2>Ejemplo 2 vista</h2>
            <p v-text="titulo2"></p>
            <p v-html="titulo3"></p>
            <p v-if="validacion">Se encuentra disponible {{validacion}}</p>
            <p v-else>No se encuentra disponible {{validacion}}</p>
            <ul>
                <li v-for="(personas, index) in personal" :key="index">
                   Nº: {{index}} - Nombre: {{personas.nombre}} - Apellido: {{personas.apellido}}
                </li>
            </ul>
        </section>

<!--         <form @submit.prevent="procesar">
            <label for="nombre">Nombre:</label>
            <input type="text" placeholder="Ingrese su nombre" v-model="nombre">
            <button v-on:click.prevent="procesar">Clic</button>
            <button class="btn btn-primary">Clic</button>
        </form> -->

        <form>
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" v-model="nombre">
                <small class="form-text text-muted">Ingrese su primer nombre.</small>
            </div>
            <button type="submit" @click.prevent="procesar" class="btn btn-primary">Enviar</button>
        </form>
        <h4 v-show="nombre">Nombre ingresado: {{nombre}}</h4>
        <hr>

        <table class="table table-striped">
        <thead>
            <tr>
                <th>Nº</th>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in usuarios" :key="index">
                <th>{{index+1}}</th>
                <td>{{user.id}}</td>
                <td>{{user.title}}</td>
                <td>{{user.completed}}</td>
            </tr>
        </tbody>
        </table>





    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Ejemplo',
    data() {
        return {
            titulo: 'Titulo desde la data de la vista',
            titulo2: 'Titulo 2 de la vista',
            titulo3: '<strong>Titulo <em>tres</em></strong>',
            validacion: true,
            personal: [
                {nombre: 'Giovanni', apellido: 'patrañaz'},
                {nombre: 'Tatiana', apellido: 'Castillo'},
                {nombre: 'Mariax', apellido: 'patrañaz2'},
                {nombre: 'Migual', apellido: 'tranceCode'},

            ],
            nombre: '',
            usuarios: []
        }
    },
    methods: {
        procesar(){
            if (this.nombre){
                alert(`El nombre fue: ${this.nombre}`);
                axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(response=>{
                   console.log(response.data);
                    this.usuarios = response.data;
                })
                .catch(error=>console.error(error))
                this.nombre = '';
            } else {
                alert("Ingrese un nombre")
            }
        }
    },
    
}
</script>

<style scoped lang="scss">
/* .ejemplo {
    background-color: aqua;
    font-family: 'Times New Roman', Times, serif;

    h1 {
        font-size: 40px;
    }

    section {
        h2 {
            text-decoration-line: line-through;
        }
    }

    form {
        background-color: beige;
        font-size: 23px;
        height: 200px;
        margin: 30px auto;
        padding-top: 30px;

        input {
            padding: 20px;
            font-size: 25px;
        }
    }
} */
</style>