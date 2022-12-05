<template>
  <q-card>
    <div class="bg-primary text-white">
      <q-card-actions align="between">
        <p class="product_list q-pt-md q-pl-sm">Product List</p>
        <q-btn flat dense round icon="clear" @click="closeModel(false)" />
      </q-card-actions>
    </div>

    <div
      v-for="item in getViewProductsDetails.purchase_return_details"
      class="row"
      :key="item"
    >
      <div class="col-12 q-pl-sm q-pt-md">
        <span class="product_head">Product Name:</span>
        {{ item.product.name }}
      </div>

      <div class="col-12 q-pl-sm q-pt-md q-pb-md">
        <span class="product_head">Quantity:</span> {{ item.quantity }}
      </div>
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
    ...mapFields("purchasereturndetails", ["filter"]),
    ...mapGetters("purchasereturndetails", ["getViewProductsDetails"]),
  },
  setup() {
    return {
      dataStore: "purchasereturndetails",
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
  font-size: 1.3rem;
  font-weight: 600;
}

.product_head {
  font-weight: 600;
  font-size: 1rem;
}
</style>
