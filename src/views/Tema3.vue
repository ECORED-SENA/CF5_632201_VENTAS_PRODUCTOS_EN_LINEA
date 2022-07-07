<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.container01.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 3
      h1 #[i Buyer persona]

  .container.BGIMG03.px-4.px-md-5.pt-4    
    .row.justify-content-center
      .col-md-4.col-8.mb-2.p-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img01.png')
      .col-md-8.col-12.BG22(data-aos="fade-right")
        p <b>El diseño del #[i buyer persona] es una etapa fundamental para el #[i marketing] digital. El #[i buyer persona] es la figura no real que se edifica a partir de los datos reales y el análisis correcto de la información obtenida en los procesos o técnicas de segmentación objetiva, la cual brinda todas las herramientas para conocer y tomar decisiones que vayan en dirección a esa figura de una forma más individual y humanizada. Este ejercicio permite segmentar, determinar quién es ese consumidor, a qué se dedica y cuáles son sus intereses. </b>
        .row.mb-4.p-4.pb-5
          .col-1
            figure
              img(src='@/assets/curso/tema1/img08.svg')
          .col-11
            p <span style="color:#0B67D1 !important; font-weight: bold;">La construcción de un perfil de cliente tipo #[i buyer persona] es una forma de ver cómo dirigirse al cliente con comunicaciones y publicaciones concretas de su interés que lo motiven a tomar decisiones de compra correctas. Mediante esta herramienta la compañía entenderá y empatizará con el cliente y, por ende, podrá lograr ventas más exitosas o consolidar procesos de fidelización. </span>
    .cajon.color-acento-botones.subir02.p-3.px-4.mb-4
      h5 Muchas veces es totalmente normal que para el mismo producto o servicio se construyan diferentes perfiles de #[i buyer persona], ya que siempre va a representar al cliente ideal y es aquel cliente que está siempre dispuesto y atento a comprar e interactuar con el producto o servicio.  
      
    .row.justify-content-center.align-items-center.mb-5
      .col-md-7.col-12.mb-3.order-md-1.order-2
        p A partir de la información obtenida se debe realizar un análisis y una unificación de esta en un documento donde se creará el perfil del #[i buyer persona]. Esto permite conocer y construir un proyecto de #[i marketing] digital personalizado que brinde mejores soluciones a las necesidades del cliente y mejore las experiencias de este, dando como resultado un mejor entendimiento del tipo de cliente que se va a abordar.
        .row.mb-5
          .col-auto.BG05
            h4.text-white.mb-0.py-2 A continuación, se creará un perfil de un #[i buyer persona]:
      .col-md-4.col-8.mb-3.order-md-2.order-1
        figure
          img(src='@/assets/curso/tema3/img02.svg')
    .row.justify-content-center
      .col-lg-10.col-12.mb-5
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 1
          span Perfil de un #[i buyer persona].
  
  .container.container03.px-4.px-md-5.pt-4
    .row.justify-content-center
      .col-lg-10.col-12.mb-5
        figure
          img(src='@/assets/curso/tema3/img03.svg')

    .tarjeta.BG14.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/img45.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.text-white
              h3.mb-1 Llamado a la acción
              p.text-small Para conocer en el detalle la construcción del perfil de un #[i buyer persona] con base en la información indicada en la anterior imagen, se invita al aprendiz ver el video #[i Buyer persona]. 
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/embed/6wN7nsKOlk0" target="_blank")
                span Ver video

    
    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
