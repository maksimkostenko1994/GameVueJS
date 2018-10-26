<template>
    <div>
        <div v-show="alias.status !== 'NO_DATA'">
            <div align="center">
                <table class="table-quest">
                    <thead>
                    <tr>
                        <td>Build ID</td>
                        <td>Platform</td>
                        <td>Quest name</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="product in products" v-show="product.globalId === 1 && product.alias === alias.alias">
                        <td>{{ product.globalId }}</td>
                        <td>{{ product.platform }}</td>
                        <td>{{ product.alias }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div align="center">
                <h2>Pathways</h2>
                <table class="table-quest">
                    <thead>
                    <tr style="font-weight: bold">
                        <td>Status</td>
                        <td>Path name</td>
                        <td>Leafs info</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="product in products" v-show="product.globalId === 1 && product.alias === alias.alias">
                        <td>{{ product.pathway.status }}</td>
                        <td>{{ product.pathway.name }}</td>
                        <td>
                            <ul type="none" style="float: left" v-for="leaf in product.pathway.leafs">
                                <li v-for="finish in finished"
                                    v-if="finish.questId === product.id && finish.name === leaf"><span
                                        style="color: green"
                                        class="glyphicon glyphicon-ok"></span></li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-show="alias.status === 'NO_DATA'" align="center">
            <img src="/imgs/404.jpg" alt="404" style="height:90vh;width:60%;">
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        products: [],
        finished: [],
        alias: JSON.parse(localStorage.getItem('alias'))
      }
    },
    created: function () {
      this.fetchProducts()
      this.finishedQuests()
    },
    methods: {
      fetchProducts () {
        this.$http.get('http://localhost:3030/general-quests-info').then((response) => {
          this.products = response.body
        })
      },
      finishedQuests () {
        this.$http.get('http://localhost:3030/finished-quests-leafs').then((response) => {
          this.finished = response.body
        })
      }
    }
  }
</script>

<style>
    .table-quest td {
        border: 1px solid black;
        text-align: center;
    }
</style>
