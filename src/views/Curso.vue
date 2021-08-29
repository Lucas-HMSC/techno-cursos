<template>
  <div>
    <div v-if='loading'>
      <PageLoading />
    </div>
    <transition>
      <div v-if='info' class="conteudo">
        <div>
          <h1>{{ info.nome }}</h1>
          <p>{{ info.descricao }}</p>
          <h2>Aulas</h2>
          <ul class="aulas">
            <li v-for='aula in info.aulas' :key='aula.id'>
              <RouterLink :to='{name: "aula", params: { aula: aula.id }}'>
                {{ aula.nome }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <RouterView />
      </div>
    </transition>
  </div>
</template>

<script>
import { arrCurso } from '@/api.js';

export default {
  name: 'Curso',
  props: ['curso'],
  data() {
    return {
      loading: true,
      info: null,
      cursoIndex: null,
    }
  },
  methods: {
    findIndex() {
      if (this.curso === 'html-e-css') this.cursoIndex = 0;
      else if (this.curso === 'javascript') this.cursoIndex = 1;
      else this.cursoIndex = 2;
    },
    loadInfo() {
      this.findIndex();
      setTimeout(() => {
        this.info = arrCurso[this.cursoIndex];
        this.loading = false;
      }, 1000);
    },
  },
  mounted() {
    this.loadInfo();
  },
}
</script>

<style>
.aulas li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.aulas li a.router-link-active {
  background: #4B8;
  color: white;
}
</style>