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
                <label for="tituloPost">Titulo</label>
                <input type="text" class="form-control" v-model="tituloPost" :placeholder="nombre">
                <small class="form-text text-muted">Ingrese el titulo.</small>
                <label for="mensaje">Mensaje</label>
                <input type="text" class="form-control" v-model="mensaje">
                <small class="form-text text-muted">Ingrese el mensaje.</small>
            </div>
            <button type="submit" @click.prevent="procesar" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Enviar</button>
        </form>
        <h4 v-show="mensaje">Mensaje ingresado: {{mensaje}}</h4>
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
                <td class="alert alert-success" :class="{'alert alert-danger': !user.completed}">{{user.completed}}</td>
            </tr>
        </tbody>
        </table>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel" v-text="tituloPost"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                {{mensaje}}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="borrando">Cerrar</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="guardar">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Ejemplo',
    props: ['nombre'],
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
            tituloPost: '',
            mensaje: '',
            usuarios: [],
            inforeci: {}
        }
    },
    methods: {
        procesar(){
            if (this.tituloPost && this.mensaje){
                axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(response=>{
                   console.log(response.data);
                    this.usuarios = response.data;
                })
                .catch(error=>console.error(error))

            } else {
                alert("Ingrese Datos")
            }
        },
        borrando(){
            this.tituloPost = '';
            this.mensaje = '';
        },
        guardar(){
            let usID = Math.floor(Math.random()*100);
            axios.post('https://jsonplaceholder.typicode.com/posts',{
                data: {
                    title: this.tituloPost,
                    body: this.mensaje,
                    userId: usID
                }
            }).then(response => {
                console.log(response.data.data);
                this.inforeci = response.data.data;
                this.$router.push({
                    name: 'About',
                    params: { 
                        title: this.inforeci.title,
                        body: this.inforeci.body,
                        userId: this.inforeci.userId 
                    }
                });
                this.tituloPost = '';
                this.mensaje = '';
            }).catch(error=>console.error(error));
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