<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.justify-content-center.mb-5
      .col-md-1.col-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img01.svg')
      .col-md-9.col-10
        p <b>Bienvenido al componente formativo <em>Marketing</em> digital. El siguiente video presenta, de forma general, la temática que se estudiará a lo largo del mismo.</b>

    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
