export default {
  data() {
      return {
        loading: true,
        api: null,
      }
    },
  methods: {
    async fetchData(url) {
      this.loading = true;
      this.api = null;
      const data = await fetch('./api.json');
      const response = await data.json();
      setTimeout(async () => {
        if (url === 'home') this.api = response.home; 
        if (url === 'cursos') this.api = response.cursos;
        if (url === 'contato') this.api = response.contato; 
        // if (url === 'html-e-css') this.api = response.curso[0]; 
        // if (url === 'javascript') this.api = response.curso;
        // if (url === 'ux-design') this.api = response.curso[2];

        this.loading = false;
      }, 100);
    }
  },
}