<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.container01.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.terxt-white 5
      h1 Investigación básica de mercados digitales 

  .container.BGIMG03.px-4.px-md-5.pt-4    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-8.col-12.order-md-1.order-2.mb-3
        p <span style="color:#7F4FC7 !important; font-weight: bold;"> La investigación de mercados se ha destacado a través de los años como una de las principales y más importantes herramientas para todos los procesos de mercadeo, tanto tradicional como digital. </span> Sin embargo, durante los últimos años, esta ha tenido un auge en su implementación debido a varios factores dentro de los cuales se encuentran:
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.BG27.p-4
            .row.mb-3
              .col-9.ms-2
                img(src='@/assets/curso/tema5/img01.svg')
            p.text-center El aumento de las ventas online. 
          .tarjeta.BG27.p-4
            .row.mb-3
              .col-9.ms-2
                img(src='@/assets/curso/tema5/img02.svg')
            p.text-center El aumento de la cantidad de data disponible.
          .tarjeta.BG27.p-4
            .row.mb-3
              .col-9.ms-2
                img(src='@/assets/curso/tema5/img03.svg')
            p.text-center La efectividad en identificar claramente la opinión del público objetivo con herramientas digitales.
          .tarjeta.BG27.p-4
            .row.mb-3
              .col-9.ms-2
                img(src='@/assets/curso/tema5/img04.svg')
            p.text-center El acceso a fuentes de información muy amplias suministradas por el cliente.
          .tarjeta.BG27.p-4
            .row.mb-3
              .col-9.ms-2
                img(src='@/assets/curso/tema5/img05.svg')
            p.text-center El crecimiento de la interactividad en línea.
      .col-md-4.col-8.order-md-2.order-1.mb-3.p-o
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/img06.png')

    p.mb-5 Actualmente no es suficiente hacer un estudio de mercado localizado. Hoy día, debido a la hiperconectividad, se deben realizar dentro del entorno digital y a nivel internacional, porque el alcance actual de una campaña de mercadeo digital es potencialmente global.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img07.svg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4
        p.mb-0 Debido a la gran cantidad de datos que arroja, un estudio de mercado es una herramienta que aporta de formas muy valiosas a la campaña de mercadeo digital. Estos datos constituyen un insumo crucial para tomar diferentes medidas en la organización. Estas medidas pueden impactar en acciones tan diversas como economizar costos, reconfiguración de equipos y talento humano, mejoras en el tiempo dando posibilidad a inversiones no tan elevadas, optimización de procesos de producción, entre otros.

    .row.justify-content-center.align-items-center
      .col-md-8.col-12.BG01.order-md-1.order-2
        .row.mb-2
          .col-1
            figure.p-0
              img.w-75(src='@/assets/curso/tema1/img08.svg')
          .col-9
            p La investigación de mercados es el compendio y posterior estudio detallado de la información y de los datos recopilados de forma sistemática por medio de diversas técnicas, canales y otras herramientas. Para el caso del mercadeo digital, este tipo de estudios se realizan dentro del entorno virtual. Es un factor a menudo determinante para la toma de decisiones estratégicas, no solo dentro del área de mercadeo, sino que puede permear a otras áreas de la organización.
        .cajon.color-acento-botones.p-3.px-4.mb-4
          p Basado en lo anterior, cabe preguntarse, ¿por qué se debe hacer una investigación de mercados online? Con el fin de identificar las razonas para realizar una investigación, como se muestra en la siguiente figura.
      .col-md-4.col-8.order-md-2.order-1
        figure
          img(src='@/assets/curso/tema4/img11.png')

  .container.container02.p-4.p-md-5
    .row.justify-content-center
      .col-md-10.col-12.mb-3
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 3
          span Razones para hacer una investigación de mercados online
        figure(data-aos="fade-right")
          img.p-0(src='@/assets/curso/tema5/img08.svg')
    
    p.mb-5 Existen diversas técnicas que se utilizan dentro de la investigación de mercados para recopilar información de clientes potenciales, usuarios establecidos, usuarios de la competencia, público objetivo, etc. Dentro de ellas se encuentran:

    TabsC.color-acento-botones
      .py-3.py-md-4(titulo="Encuestas")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h3 Encuestas
            p Es una de las técnicas más populares para la investigación de mercados. Mediante su uso se puede compilar gran cantidad de datos. Cuando se hace de la manera correcta se puede obtener información muy precisa y confiable por parte de los encuestados. Existen dos maneras de utilizarla: 
            .tarjeta-avatar-b.mb-3
              .tarjeta-avatar-b__img
                img.px-2(src='@/assets/curso/tema5/img09.svg' alt='AvatarTop')
              .tarjeta.BG25
                .p-3
                  p.mb-0 <b>Preguntas cerradas</b>: se puede elegir la respuesta de una lista predeterminada de opciones.
            .tarjeta-avatar-b.mb-3
              .tarjeta-avatar-b__img
                img.px-2(src='@/assets/curso/tema5/img09.svg' alt='AvatarTop')
              .tarjeta.BG25
                .p-3
                  p.mb-0 <b>Preguntas abiertas</b>: el encuestado tiene la facultad de elaborar su respuesta más ampliamente. 
          .col-md-6.mb-4.mb-md-0
            p <b>Etapa clave</b>: su correcta elaboración y preparación previa.
            .cajon.color-acento-botones.p-3.px-4.mb-4
              p Se alistan las preguntas adecuadas con el fin de obtener de la manera más clara posible, la información necesaria para el propósito de la investigación de mercados.
            p Se recomienda el diseño de encuestas cortas con metodología mixta (preguntas abiertas y cerradas).
      .py-3.py-md-4(titulo="Entrevistas a profundidad")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h3 Entrevistas a profundidad
            p Ampliamente utilizada por la calidad en la obtención de datos cualitativos. Permite profundizar aún más en las respuestas del entrevistado que en una encuesta con metodología de preguntas abiertas. El equipo de mercadeo se expondrá a una información extensa y profunda de las preguntas a indagar. Generalmente se realiza a un grupo más específico de personas y no es a gran escala, como generalmente lo son las encuestas. 
            .tarjeta-avatar-b.mb-3
              .tarjeta-avatar-b__img
                img.px-2(src='@/assets/curso/tema5/img09.svg' alt='AvatarTop')
              .tarjeta.BG25
                .p-3
                  p.mb-0 <b>Objetivo</b>: obtener información detallada de la mejor calidad posible en cuanto a las necesidades de los clientes potenciales.
          .col-md-6.mb-4.mb-md-0
            p En cuanto al tiempo de ejecución, se puede decir que tarda en promedio de 30 a 45 minutos y se hace de forma individual.
            .row  
              .col-9
                .cajon.color-acento-botones.p-3.px-4.mb-4
                  p.mb-0 Por lo general, requiere una inversión más costosa que las encuestas y a menudo se ofrece un tipo de motivación o premio al entrevistado (productos de muestra, dinero, promoción, relevancia en redes sociales, etc.).
              .col-3
                figure
                  img.p-0(src='@/assets/curso/tema5/img10.svg')
      .py-3.py-md-4(titulo="Grupo focal")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h3 Grupo focal
            p O focus group, se define como un grupo de debate o discusión compuesto por 10 a 15 participantes de un perfil predeterminado que son dirigidos por un moderador que conduce una conversación que busca ahondar en las opiniones, preferencias, quejas o comentarios de un producto o servicio determinado.
            p Es importante definir previamente los criterios de selección de los participantes, así como el del segmento de mercado al cual pertenece cada uno.
            .tarjeta-avatar-b.mb-3
              .tarjeta-avatar-b__img
                img.px-2(src='@/assets/curso/tema5/img09.svg' alt='AvatarTop')
              .tarjeta.BG25
                .p-3
                  p.mb-0 <b>Carácter</b>  : contributivo y colectivo por lo cual los participantes pueden interactuar entre sí.
          .col-md-6.mb-4.mb-md-0
            p El fomento de la discusión entre sus participantes es una de sus principales fortalezas.
            .row  
              .col-9
                .cajon.color-acento-botones.p-3.px-4.mb-4
                  p.mb-0 Es una de las técnicas más utilizadas por su rentabilidad y eficiencia. Sin embargo, su desarrollo implica un trabajo extenso de preparación y muchas veces sus conclusiones se someten a factores de sesgo que pueden tener los participantes.
              .col-3
                figure
                  img.p-2(src='@/assets/curso/tema5/img11.svg')
      .py-3.py-md-4(titulo="Redes sociales")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h3 Redes sociales
            .row.mb-3
              .col-3
                figure
                  img.p-0(src='@/assets/curso/tema5/img12.svg')
              .col-9
                p En el caso del marketing digital, las redes sociales resultan ser, en términos de información, un recurso con una cantidad de datos que no son despreciables bajo ningún sentido. Al contrario, las redes sociales constituyen muchas veces la fuente principal para una investigación de mercados hoy en día en la era de hiperconectividad.
            .cajon.color-acento-botones.p-3.px-4.mb-4
              p.mb-0 <b>Principales herramientas</b>: (Google AdWords y Facebook) son plataformas analíticas, muchas veces integradas a las mismas redes que arrojan datos importantes de diversos tipos: 
          .col-md-6.mb-4.mb-md-0
            .row.justify-content-center.mb-5.mt-3
              .col-3
                figure
                  img(src='@/assets/curso/tema5/img13.svg')
              .col-7
                ol.lista-vineta3.ps-5
                  li.mb-3
                    .lista-vineta3
                    | Demográficos.
                  li.mb-3
                    .lista-vineta3
                    | Intereses.
                  li.mb-3
                    .lista-vineta3
                    | Conectividad.
                  li.mb-3
                    .lista-vineta3
                    | Hábitos de consumo, entre otros.
            p Estos, son posteriormente analizados para realizar segmentaciones, perfiles, buyer persona, etc.
      .py-3.py-md-4(titulo="Comprador misterioso")
        .row.justify-content-center
          .col-md-11.mb-4.mb-md-0
            h3 Comprador misterioso
            .row.justify-content-center.align-items-center.mb-5.mt-3
              .col-2
                figure
                  img.w-75(src='@/assets/curso/tema5/img15.svg')
              .col-10
                p La compañía u organización solicita la participación incauta y anónima de especialistas que se encargan de realizar una evaluación de manera profunda de las etapas de compra de un producto o servicio específico.
                p Su fin es obtener una retroalimentación por medio de un cuestionario que se realiza a los especialistas después de su experiencia de compra.
            .cajon.color-acento-botones.p-3.px-4.mb-4
              p.mb-0 El comprador misterioso o <em>mystery shopper</em> es una técnica a la que recurren las compañías para estudiar de manera profunda las fallas que puede tener su cadena de distribución en cualquiera de sus etapas de preventa, venta o posventa. 
      .py-3.py-md-4(titulo="Pruebas de uso")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h3 Pruebas de uso
            p Se basa en someter los productos, servicios o experiencias de la compañía a pruebas de uso y así poder identificar falencias y puntos débiles, que pueden suceder sobre especímenes anteriores a las versiones definitivas que se van a comercializar.
            .tarjeta-avatar-b.mb-3
              .tarjeta-avatar-b__img
                img.px-2(src='@/assets/curso/tema5/img09.svg' alt='AvatarTop')
              .tarjeta.BG25
                .p-3
                  p.mb-0 <b>Objetivo</b>: realizar las correcciones necesarias antes de su lanzamiento al público general. 
          .col-md-6.mb-4.mb-md-0
            p Pueden realizarse mediante diferentes caminos tales como:
            .row.justify-content-center.mb-5.mt-3
              .col-3
                figure
                  img(src='@/assets/curso/tema5/img16.svg')
              .col-7
                ol.lista-vineta3.ps-5
                  li.mb-3
                    .lista-vineta3
                    | Supervisar presencial o remotamente el uso de un producto.
                  li.mb-3
                    .lista-vineta3
                    | Someter a los clientes a pruebas de uso de aplicaciones o plataformas que registran las características de su uso.
                  li.mb-3
                    .lista-vineta3
                    | Proporcionar un cuestionario para recibir retroalimentación posterior al periodo de prueba, entre otros. 

    h5.mb-5 Después de entender los conceptos básicos y técnicas que integran una investigación de mercados online, se puede resumir su realización en siete etapas: 

    .row.justify-content-center.align-items-center
      .col-md-4.col-8.mb-3
        ol.lista-vineta3.ps-5
          li.mb-3
            .lista-vineta3
            | Definición del objetivo.
          li.mb-3
            .lista-vineta3
            | Ubicación de conceptos claves.
          li.mb-3
            .lista-vineta3
            | Revisión de blogs y recursos <em>online</em>.
          li.mb-3
            .lista-vineta3
            | Estudio de la competencia.
          li.mb-3
            .lista-vineta3
            | Realización de encuestas y otras técnicas.
          li.mb-3
            .lista-vineta3
            | Análisis de datos.
          li.mb-3
            .lista-vineta3
            | Aplicación de estrategias.
      .col-md-6.col-10.mb-3.p-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/img17.svg')

  .container.BGIMG03.px-4.px-md-5.pt-4 
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0 En cuanto a los tipos de estudio o investigación que existen, se puede decir que estos dependen en gran medida del propósito que tengan dentro de la planeación estratégica de la compañía. A continuación, se mencionan algunos.

    .row.justify-content-center.mb-5
      .col-md-8.col-12
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 4 
          span Cómo realizar una investigación de mercados online
        figure(data-aos="fade-right")
          img.p-0(src='@/assets/curso/tema5/img18.svg')

  .container.container03.px-4.px-md-5.pt-4  
    .row.mb-5
      .col-auto.BG05
        h4.text-white.mb-0.py-2 Seguidamente, se presentan diferentes técnicas de investigación de mercados: 
    
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Para la satisfacción del cliente")
        h4 Para la satisfacción del cliente
        .row.justify-content-center.align-items-center
          .col-2
            figure
              img.p-0(src='@/assets/curso/tema5/img19.svg')
          .col-9
            p Este tipo de investigación tiene como objetivo comprender la manera como el consumidor percibe la experiencia de compra y uso del producto o servicio. Hoy en día mediante herramientas como newsletters, códigos QR o plataformas de encuestas es más sencillo tener acceso a esta información; en ocasiones esta se intercambia con el cliente por beneficios y descuentos. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Para el lanzamiento de <br> un producto o servicio")
        h4 Para el lanzamiento de un producto o servicio
        .row.justify-content-center.align-items-center
          .col-2
            figure
              img.p-0(src='@/assets/curso/tema5/img20.svg')
          .col-9
            p Para asegurar el éxito de un lanzamiento es de gran ayuda analizar y conocer las opiniones y gustos del público objetivo y diseñar estrategias que brinden la solución a sus necesidades. Posteriormente, se pueden desarrollar productos y servicios novedosos que apelen al usuario y que logren conectarse con él. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Para la fidelización de marca")
        h4 Para la fidelización de marca
        .row.justify-content-center.align-items-center
          .col-2
            figure
              img.p-0(src='@/assets/curso/tema5/img21.svg')
          .col-9
            p A partir de una investigación de mercado se pueden entender los motivos por los cuales un cliente prefiere seguir adquiriendo, o descontinuar el uso de un producto o servicio. Para ello, es muy importante hacer un estudio detallado de los motivos por los cuales el cliente manifiesta su inconformidad para llenar esos vacíos y fidelizar al cliente al mejorar su experiencia.

    p.mb-5 <b> Una de las etapas posteriores a la realización de las técnicas de investigación, es la interpretación de los resultados, identificándose dos tipos de datos: </b>

    .row.justify-content-center(data-aos="fade-right")
      .col-xl-5.col-lg-6.col-10.mb-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.px-1.mb-5(src='@/assets/curso/tema5/img22.svg' alt='AvatarTop')
          .tarjeta.BG28
            .p-3.pt-xl-5.pt-lg-3
              h5.text-white Datos cuantitativos
              p.text-white Aquellos que pueden ser medibles y cuantificables. Por ejemplo, al realizar encuestas es muy común que las preguntas cerradas luego sean analizadas en términos cuantitativos para identificar tendencias estadísticas. 
      .col-xl-5.col-lg-6.col-10.mb-3
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.px-1.mb-5(src='@/assets/curso/tema5/img23.svg' alt='AvatarTop')
          .tarjeta.BG28
            .p-3.pt-xl-5.pt-lg-3
              h5.text-white Datos cualitativos
              p.text-white Se basan en relatos o textos que pueden ayudar a entender acciones o comportamientos. Por ejemplo, los focus group o las entrevistas en profundidad se basan en el análisis de datos cualitativos en donde los participantes expresan de manera muy detallada preferencias y gustos.

    .row.justify-content-center.BG04.p-4
      .col-md-1.col-2.mb-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img06.svg')
      .col-md-11.col-10
        h4 ¿Cómo realizar la interpretación estadística?
        p Es necesario contar con especialistas en interpretación estadística ya que en esta etapa de la investigación será determinante la organización y análisis matemático de los datos cuantitativo, así como contar con expertos en interpretación cualitativa que sepan poner en marcha técnicas de cuestionamiento que logren arrojar los resultados necesarios para tomar las decisiones y acciones necesarias para mejorar la situación actual de la compañía.
    

</template>

<script>
export default {
  name: 'Tema5',
  components: {},
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
