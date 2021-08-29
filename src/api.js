export const home = {
  id: "home",
  titulo: "Techno",
  descricao: "Cursos online de UX/UI Design e Front End.",
  avaliacoes: [
    {
      nome: "Mariana",
      descricao: "Eu gostei muito do curso, com ele eu consegui fazer o meu primeiro site."
    },
    {
      nome: "Matheus",
      descricao: "Consegui meu primeiro emprego logo após terminar esse curso."
    },
    {
      nome: "Pedro",
      descricao: "Gostei muito do curso, mas poderia maneirar um pouco no sotaque."
    },
    {
      nome: "Maria",
      descricao: "Curso muito bom, quando vai sair o de Vue.js?"
    }
  ],
}

export const contato = {
  id: "contato",
  titulo: "Contato",
  descricao: "Entre em contato que responderemos em até 24h.",
  contato: {
    telefone: "21 9999-9999",
    email: "contato@gmail.com",
    endereco: "Rua Ali Perto, Botafogo - RJ"
  }
}

export const cursos = {
  id: "cursos",
  titulo: "Cursos",
  descricao: "Inscreva-se em um dos nossos planos e obtenha acesso completo a todos os nossos cursos.",
  cursos: [
    {
      id: "javascript",
      nome: "JavaScript",
      totalAulas: 120,
      horas: 34,
      descricao: "Esse é um curso completo de JavaScript, você irá prender tudo sobre variáveis, objetos, arrays e funções."
    },
    {
      id: "html-e-css",
      nome: "HTML e CSS",
      totalAulas: 80,
      horas: 22,
      descricao: "Nesse curso você irá aprender como utilizar tags de HTML para estruturar o conteúdo da sua página. E também como estiliza-las com CSS."
    },
    {
      id: "ux-design",
      nome: "UX Design",
      totalAulas: 70,
      horas: 18,
      descricao: "Aprenda todos os fundamentos de UX Design nesse curso. Aprenda como pesquisar, analisar e desenvolver um projeto com foco na experiência do usuário."
    }
  ]
}

export const arrCurso = [
  {
    id: "html-e-css",
    nome: "HTML e CSS",
    totalAulas: 80,
    horas: 22,
    descricao: "Nesse curso você irá aprender como utilizar tags de HTML para estruturar o conteúdo da sua página. E também como estiliza-las com CSS.",
    aulas: [
      {
        id: "html",
        nome: "HTML e Tags"
      },
      {
        id: "css",
        nome: "CSS e Propriedades"
      },
      {
        id: "flexbox",
        nome: "CSS Flexbox"
      }
    ]
  },
  {
    id: "javascript",
    nome: "JavaScript",
    totalAulas: 120,
    horas: 34,
    descricao: "Esse é um curso completo de JavaScript, você irá prender tudo sobre variáveis, objetos, arrays e funções.",
    aulas: [
      {
        id: "variaveis",
        nome: "Variáveis e Constantes"
      },
      {
        id: "funcoes",
        nome: "Funções e Métodos"
      },
      {
        id: "objetos",
        nome: "Objetos e Arrays"
      }
    ]
  },
  {
    id: "ux-design",
    nome: "UX Design",
    totalAulas: 70,
    horas: 18,
    descricao: "Aprenda todos os fundamentos de UX Design nesse curso. Aprenda como pesquisar, analisar e desenvolver um projeto com foco na experiência do usuário.",
    aulas: [
      {
        id: "pesquisa",
        nome: "Pesquisa"
      },
      {
        id: "personas",
        nome: "Personas"
      },
      {
        id: "prototipo",
        nome: "Protótipo"
      }
    ]
  }
]

export const arrAula = [
  {
    id: "css",
    nome: "CSS e Propriedades",
    curso: {
      id: "html-e-css",
      nome: "HTML e CSS"
    },
    youtube: "mWYCWAPj0gM"
  },
  {
    id: "flexbox",
    nome: "CSS Flexbox",
    curso: {
      id: "html-e-css",
      nome: "HTML e CSS"
    },
    youtube: "qq0z-YSPJLI"
  },
  {
    id: "html",
    nome: "HTML e Tags",
    curso: {
      id: "html-e-css",
      nome: "HTML e CSS"
    },
    youtube: "nl-Is79eyD8"
  },
  {
    id: "funcoes",
    nome: "Funções e Métodos",
    curso: {
      id: "javascript",
      nome: "JavaScript"
    },
    youtube: "n5uiJr-v0KQ"
  },
  {
    id: "objetos",
    nome: "Objetos e Arrays",
    curso: {
      id: "javascript",
      nome: "JavaScript"
    },
    youtube: "fu-enUG2VEE"
  },
  {
    id: "variaveis",
    nome: "Variáveis e Constantes",
    curso: {
      id: "javascript",
      nome: "JavaScript"
    },
    youtube: "pKTOT63X9XQ"
  },
  {
    id: "personas",
    nome: "Personas",
    curso: {
      id: "ux-design",
      nome: "UX Design"
    },
    youtube: "eqownJ3mASI"
  },
  {
    id: "pesquisa",
    nome: "Pesquisa",
    curso: {
      id: "ux-design",
      nome: "UX Design"
    },
    youtube: "eYDv4_s8TTM"
  },
  {
    id: "prototipo",
    nome: "Protótipo",
    curso: {
      id: "ux-design",
      nome: "UX Design"
    },
    youtube: "3C_9vIhmgm4"
  }
]