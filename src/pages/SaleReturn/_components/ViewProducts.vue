<template>
  <q-card>
    <q-card-actions align="between">
      <p class="product_list q-pt-md q-pl-sm">Product List</p>
      <q-btn flat dense round icon="clear" @click="closeModel(false)" />
    </q-card-actions>

    <div
      v-for="item in getViewProductsDetails.sales_return_details"
      class="row"
      :key="item"
    >
      <q-card-section>
        <span class="product_head">Product Name:</span>
        {{ item.product.name }}
      </q-card-section>

      <q-card-section>
        <span class="product_head">Sale Price:</span>
        {{ item.product.sale_price }}
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../../libs/useStoreModule.js";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "ProductListPage",

  computed: {
    ...mapFields("salereturndetails", ["filter"]),
    ...mapGetters("salereturndetails", ["getViewProductsDetails"]),
  },
  setup() {
    return {
      dataStore: "salereturndetails",
      aditionalActions: true,
      close,
    };
  },

  // Close Modal

  methods: {
    closeModel(val) {
      this.$store.commit(`${this.dataStore}/setViewProductsModal`, val);
    },
  },
});
</script>

<style scoped>
.product_list {
  font-size: 1.5rem;
  font-weight: 600;
}

.product_head {
  font-weight: 600;
  font-size: 1rem;
}
</style>
