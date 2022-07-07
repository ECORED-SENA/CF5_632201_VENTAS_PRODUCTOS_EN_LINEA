<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.align-items-center.mb-5
      .col-md-10.BG29.p-3
        .row.justify-content-start
          .col-1.p-4
            figure
              img(src='@/assets/curso/sintesis/img01.png')
          .col-8
            p <span style="color:#7F4FC7 !important; font-weight: bold;">Es así como en este componente formativo se trabajaron las herramientas para realizar una campaña de #[i marketing] digital con éxito y dirigida a un público objetivo que ya se tiene identificado.</span> También se expusieron técnicas para saber cómo dirigirse al cliente para influir en su experiencia de compra y fidelización de marca. Además, se aplicaron herramientas de evaluación e investigación de mercados para crear mejores experiencias y, finalmente, se expusieron los principales conceptos de la Psicología del Consumidor que influyen en el proceso de compra. Todo esto será de gran importancia para desarrollar estrategias con mayor seguridad y éxito.
          .col-9  
            .cajon.color-acento-botones.p-4
              p A continuación, se presenta un resumen sobre la temática estudiada en el componente formativo.
      .col-md-4.col-8.img04
        img(src='@/assets/curso/sintesis/img02.png')

    br
    .row.justify-content-center.mt-5
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
