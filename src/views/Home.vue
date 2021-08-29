<template>
  <div>
    <div v-if='loading'>
      <PageLoading />
    </div>
    <transition>
      <div v-if='info' class="conteudo">
        <div>
          <h1>Sobre a {{ info.titulo }}</h1>
          <p>{{ info.descricao }}</p>
          <RouterLink
            to='/cursos'
            tag='button'
            class="btn-cursos"
          >
            Cursos
          </RouterLink>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for='avaliacao in info.avaliacoes' :key='avaliacao.nome'>
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="Aprenda Web Design">
      </div>
    </transition>
  </div>
</template>

<script>
import { home } from '@/api.js';

export default {
  name: 'Home',
  data() {
    return {
      loading: true,
      info: null,
    }
  },
  methods: {
    loadInfo() {
      setTimeout(() => {
        this.info = home;
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
.btn-cursos {
  border: none;
  background: #4B8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 40px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>