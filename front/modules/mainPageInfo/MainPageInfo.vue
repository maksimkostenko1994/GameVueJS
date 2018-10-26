<template>
    <div>
        <div v-for="product in products" style="border: 1px solid black;float: left;text-align: center;">
            <div style="border: 1px solid black;padding: 10px;">{{ product.alias }}</div>
            <div style="border: 1px solid black;padding: 10px;" v-on:click="getQuestName({alias: product.alias, status: product.status})">
                <router-link :to="'/quests/'+product.alias">{{ product.status }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        products: []
      }
    },
    created: function () {
      this.fetchProducts()
    },
    methods: {
      fetchProducts () {
        this.$http.get('http://localhost:3030/main-page-info').then((response) => {
          this.products = response.body
        })
      },
      getQuestName ({alias, status}) {
        localStorage.setItem('alias', JSON.stringify({alias, status}))
      }
    }
  }
</script>
