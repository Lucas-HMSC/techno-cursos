<template>
  <div>
    <div v-if='loading'>
      <PageLoading />
    </div>
    <transition>
      <div v-if='info' class="conteudo">
        <div>
          <h1>{{ info.titulo }}</h1>
          <p>{{ info.descricao }}</p>
        </div>
        <ul class="cursos-lista">
          <li v-for='curso in info.cursos' :key='curso.id'>
            <h2>
              <RouterLink :to='{ name: "curso", params: {curso: curso.id} }'>
                {{ curso.nome }} - {{ curso.totalAulas }} aulas | {{ curso.horas }} horas
              </RouterLink>
            </h2>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { cursos } from '@/api.js';

export default {
  name: 'Cursos',
  data() {
    return {
      loading: true,
      info: null,
    }
  },
  methods: {
    loadInfo() {
      setTimeout(() => {
        this.info = cursos;
        this.loading = false;
      }, 1000);
    },
  },
  mounted() {
    this.loadInfo();
  },
}
</script>

<style scoped>
.cursos-lista li {
  margin-bottom: 40px;
}
</style>