<template>
  <div>
    <div v-if='loading'>
      <PageLoading />
    </div>
    <transition>
      <div v-if='info'>
        <h2>{{ info.nome }}</h2>
        <div class="video">
          <iframe
            :src="`https://www.youtube.com/embed/${info.youtube}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { arrAula } from '@/api.js';

export default {
  name: '', 
  props: ['aula'],
  data() {
    return {
      loading: true,
      info: null,
      aulaIndex: null,
    }
  },
  methods: {
    findIndex(aulaName) {
      if (aulaName === 'css') this.aulaIndex = 0;
      else if (aulaName === 'flexbox') this.aulaIndex = 1;
      else if (aulaName === 'html') this.aulaIndex = 2;
      else if (aulaName === 'funcoes') this.aulaIndex = 3;
      else if (aulaName === 'objetos') this.aulaIndex = 4;
      else if (aulaName === 'variaveis') this.aulaIndex = 5;
      else if (aulaName === 'personas') this.aulaIndex = 6;
      else if (aulaName === 'pesquisa') this.aulaIndex = 7;
      else this.aulaIndex = 8;
    },
    loadInfo() {
      this.findIndex(this.aula);
      setTimeout(() => {
        this.info = arrAula[this.aulaIndex];
        this.loading = false;
      }, 1000);
    },
  },
  mounted() {
    this.loadInfo();
  },
  beforeRouteUpdate(to, from, next) {
    this.findIndex(to.params.aula);
    this.info = arrAula[this.aulaIndex];
    next();
  },
}
</script>

<style>
.video {
  position: relative;
  padding-bottom: 56.25%;
}
.video iframe {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%; 
}
</style>