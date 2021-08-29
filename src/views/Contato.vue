<template>
  <div>
    <div v-if='loading'>
      <PageLoading />
    </div>
    <transition>
      <div v-if='info'>
        <h1>{{ info.titulo }}</h1>
        <p>{{ info.descricao }}</p>
        <ul>
          <li>
            <b>Email: </b>
            {{ info.contato.email }}
          </li>
          <li>
            <b>Telefone: </b>
            {{ info.contato.telefone }}
          </li>
          <li>
            <b>Endereço: </b>
            {{ info.contato.endereco }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { contato } from '@/api.js';

export default {
  name: 'Contato',
  data() {
    return {
      loading: true,
      info: null,
    }
  },
  methods: {
    loadInfo() {
      setTimeout(() => {
        this.info = contato;
        this.loading = false;
      }, 1000);
    },
  },
  mounted() {
    this.loadInfo();
  },
}
</script>
