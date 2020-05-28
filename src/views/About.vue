<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>Datos solcitados</h3>
    <p>ID: {{$route.params.userId}}</p>
    <p>Titulo: {{$route.params.title}}</p>
    <p>Mensaje: {{$route.params.body}}</p>
  </div>
</template>

