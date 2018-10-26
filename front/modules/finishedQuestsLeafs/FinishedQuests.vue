<template>
    <div>
        <table>
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products">
                <td>{{ product.questId }}</td>
                <td>{{ product.name }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        products: []
      }
    },
    created: function()
    {
      this.fetchProducts();
    },
    methods: {
      fetchProducts(){
        {
          this.$http.get('http://localhost:3030/finished-quests-leafs').then((response) => {
            this.products = response.body;
          });
        }
      }
    }
  }
</script>
