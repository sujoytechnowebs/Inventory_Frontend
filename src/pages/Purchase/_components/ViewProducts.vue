<template>
  <q-card>
    <q-card-actions align="between">
      <p class="product_list q-pt-md q-pl-sm">Product List</p>
      <q-btn flat dense round icon="clear" @click="closeModel(false)" />
    </q-card-actions>

    <div
      v-for="item in getViewProductsDetails.purchase_details"
      class="row"
      :key="item"
    >
      <!-- <q-card-section>
        {{ item.product.name }}
      </q-card-section> -->

      <q-card-section>
        <span class="product_head">Product Name:</span> {{ item.product.name }}
      </q-card-section>
      <q-card-section>
        <span class="product_head">Cost Price:</span> {{ item.item_rate }}
      </q-card-section>
      <q-card-section>
        <span class="product_head">Quantity:</span> {{ item.quantity }}
      </q-card-section>
      <q-card-section>
        <span class="product_head">Return Quantity:</span>
        {{ item.return_quantity }}
      </q-card-section>
      <q-card-section>
        <span class="product_head">Sales Price:</span> {{ item.sales_rate }}
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
    ...mapFields("purchasedetails", ["filter"]),
    ...mapGetters("purchasedetails", ["getViewProductsDetails"]),
  },
  setup() {
    return {
      dataStore: "purchasedetails",
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
