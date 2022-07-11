export default {
  global: {
    componenteFormativo: '<em>Marketing</em> digital',
    descripcionCurso:
      'El mundo actual se rige por las tendencias de la tecnología. Esto aplica también para el <em>marketing</em>. Antes, el <em>marketing</em> se enfocaba en campañas publicitarias en anuncios de revistas, vallas publicitarias, TV y correo, pero en la actualidad y con el auge de los dispositivos móviles, el <em>marketing</em> está presente de manera digital en el mundo virtual.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Marketing digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Consumidores y segmento objetivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Buyer</em> persona',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Propuesta comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Concepto y construcción de propuesta comercial',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Elementos y aplicabilidad',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Investigación básica de mercados digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Psicología del consumidor y proconsumidor digital',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<em>Marketing</em> digital',
      referencia:
        'Pérez, M. (2019). <em>Qué es un plan de marketing digital y cómo se hace.</em> IEBS.',
      tipo: 'Articulo',
      link: 'https://www.iebschool.com/blog/plan-de-marketing-digital',
    },
    {
      tema: '<em>Marketing</em> digital',
      referencia: 'Eyzaguirre, M. (s .f.). <em>Plan de marketing digital.</em>',
      tipo: 'PDF',
      link:
        'https://marcoeyzaguirre.files.wordpress.com/2015/09/nestlc3a9-charla-plan-de-marketing-digital.pdf',
    },
    {
      tema: 'Consumidores y segmento objetivo',
      referencia:
        'IA, lab. (s.f.). <em>Segmentación de mercado. ¿Cómo funciona y cuáles son sus tipos?</em>',
      tipo: 'Artículo',
      link:
        'https://www.ialab.co/blog-inbound-marketing/segmentacion-de-mercado-como-funciona-y-cuales-son-sus-tipos',
    },
    {
      tema: '<em>Buyer</em> persona',
      referencia:
        'Wright, A. (2017). <em>What Is a Buyer Persona and Why Is It Important?</em>',
      tipo: 'Artículo',
      link: 'https://amywright.me/what-is-a-buyer-persona/',
    },
    {
      tema: 'Concepto y construcción de propuesta comercial',
      referencia:
        'Da Silva, D. (2020). <em>Propuesta comercial: claves para hacer una que se destaque. </em>',
      tipo: 'Artículo',
      link: 'https://www.zendesk.com.mx/blog/propuesta-comercial/',
    },
    {
      tema: 'Psicología del consumidor y pro-consumidor digital',
      referencia:
        'Betancourt, A. (s. f.). <em>¿Cómo funciona la mente del consumidor en el marketing?. </em>',
      tipo: 'Artículo',
      link:
        'https://mglobalmarketing.es/blog/psicologia-del-consumidor-en-el-marketing-digital/',
    },
  ],
  glosario: [
    {
      termino: '4P',
      significado: 'producto, precio, plaza y promoción.',
    },
    {
      termino: 'B2B',
      significado:
        '<em>Business-to-Business.</em> Se refiere a transacciones, negociaciones o relaciones entre dos compañías.',
    },
    {
      termino: 'B2C',
      significado:
        '<em>Business-to-Consumer.</em> Se refiere a transacciones, negociaciones o relaciones entre una compañía y un consumidor final.',
    },
    {
      termino: '<em>Briefing</em>',
      significado: 'resumen ejecutivo de una estrategia.',
    },
    {
      termino: '<em>Buyer</em> persona',
      significado:
        'perfil de personaje real o no real creado a partir de la información obtenida en la segmentación.',
    },
    {
      termino: 'Campañas digitales',
      significado:
        'campañas de mercadeo que se desarrollan dentro de entornos digitales.',
    },
    {
      termino: 'Código QR',
      significado:
        'etiqueta ópticamente reproducible que contiene información detallada de un producto o servicio.',
    },
    {
      termino: '<em>Crowdfunding</em>',
      significado:
        'campaña digital por medio de la cual se pretende brindar información y busca financiar un producto, servicio o iniciativa social.',
    },
    {
      termino: 'DOFA',
      significado:
        'herramienta de estudio de las debilidades, oportunidades, fortalezas y amenazas que una compañía tiene en una situación determinada.',
    },
    {
      termino: 'Eventos BTL',
      significado:
        '<em>Below The Line,</em> consiste en el uso de formas no masivas de comunicación que se dirigen a un público objetivo.',
    },
    {
      termino: '<em>Landing pages</em>',
      significado:
        'página web en donde el usuario aterriza para conocer un producto, servicios, novedad o promoción.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'conjunto de estrategias cuya finalidad es facilitar la venta de un producto o servicios dentro de un entorno determinado.',
    },
    {
      termino: 'Necesidades del cliente',
      significado:
        'se definen como los factores de influencia que los impulsan a comprar un determinado producto o servicio.',
    },
    {
      termino: 'Público objetivo',
      significado:
        'segmento de la población a la que va encaminada una estrategia de <em>marketing</em>.',
    },
    {
      termino: 'Redes sociales',
      significado:
        'plataformas virtuales creadas en línea para que personas u organizaciones que comparten intereses en común se unan.',
    },
    {
      termino: 'ROI',
      significado: 'retorno de una inversión.',
    },
    {
      termino: 'Segmentación',
      significado:
        'técnica para separar los clientes potenciales en diferentes grupos para poder abordar sus necesidades de manera más específica y efectiva.',
    },
    {
      termino: '<em>Top of mind</em>',
      significado:
        'concepto que describe el pensamiento inmediato que un consumidor tiene al asociar una necesidad con un producto.',
    },
    {
      termino: 'USP',
      significado:
        'factores únicos que hacen que un producto o servicio resalte dentro de la competencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chaffey, D. (2000) Achieving Internet <em>marketing success, The Marketing Review, 1</em> (1), 32-54.',
    },
    {
      referencia:
        'Friedman, L., et al. (1999) <em>The Channel Advantage,</em> (1),Butterworth-Heinemann.',
    },
    {
      referencia: 'Cruz, E. (2015).<em>Las 4 P’s de la mercadotecnia.</em>',
      link: 'https://www.emprendices.co/las-4-ps-la-mercadotecnia/',
    },
    {
      referencia:
        'Da Silva, D. (2021).<em>Segmentación geográfica: ¿qué es y cómo hacerla?</em>',
      link: 'https://www.zendesk.com.mx/blog/segmentacion-geografica',
    },
    {
      referencia:
        'Kalaignanam, K., et al. (2008) Marketing operations efficiency and the Internet: an organization framework,<em>Journal of Business Research,</em> 61(4), 298-302.',
    },
    {
      referencia:
        'Manez, R. (2018). <em>Variables de la segmentación de mercados.</em>',
      link:
        'https://rubenmanez.com/wp-content/uploads/2018/05/variables-de-segmentacion-de-mercados.png',
    },
    {
      referencia:
        'Mascato, C., A. (2022). <em>Todo sobre el plan de marketing digital.</em>',
      link: 'https://www.uscmarketingdigital.com/plan-marketing-digital/',
    },
    {
      referencia:
        'Molla, D., A. (2006). <em>Comportamiento del consumidor. </em> Editorial UOC.',
      link:
        'https://reader.digitalbooks.pro/book/preview/28750/Section0001.htm',
    },
    {
      referencia: 'Muñiz, G., R. (2019). <em>Marketing en el siglo XXI.</em>',
      link:
        'https://www.marketing-xxi.com/concepto-de-investigacion-de-mercados-23.html',
    },
    {
      referencia: 'Peiró, R. (2021). <em>Psicología del consumidor.</em>',
      link:
        'https://economipedia.com/definiciones/psicologia-del-consumidor.html',
    },
    {
      referencia:
        'Peñalver, P. (2021). <em>A Step-By-Step Guide to Structuring a Digital Marketing Plan.</em>',
      link:
        'https://www.wearemarketing.com/blog/a-step-by-step-guide-to-structuring-a-digital-marketing-plan.html',
    },
    {
      referencia:
        'Peralta, E. O. (2021). <em>Marketing mix: qué es y cómo aplicarlo en tu empresa. Blog de marketing.</em>',
      link: 'https://www.genwords.com/blog/que-es-marketing-mix',
    },
    {
      referencia: 'Quiroa, M. (2019). <em>Investigación de mercado.</em>',
      link:
        'https://economipedia.com/definiciones/investigacion-de-mercado.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Stephanie Ascanio',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez ',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
