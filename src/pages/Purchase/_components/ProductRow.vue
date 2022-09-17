<template>
  <div class="col-6 col-sm-3 col-md-3 col-lg-3">
    <q-input
      ref="product_id"
      v-model="item.product_name"
      dense
      label="Product"
      readonly
    >
    </q-input>
  </div>
  <div class="col-6 col-sm-3 col-md-2 col-lg-2">
    <q-input
      ref="item_rate"
      v-model="item.item_rate"
      dense
      type="number"
      label="Item Rate"
    >
    </q-input>
  </div>
  <!-- <div class="col-6 col-sm-3 col-md-2 col-lg-2">
        <q-input
          ref="discount"
          v-model="item.discount"
          dense
          type="number"
          label="Discount"
        >
        </q-input>
      </div> -->
  <div class="col-6 col-sm-3 col-md-2 col-lg-2">
    <q-input
      ref="quantity"
      v-model="item.quantity"
      dense
      type="number"
      label="Quantity"
    >
    </q-input>
  </div>
  <div class="col-6 col-sm-3 col-md-2 col-lg-2">
    <q-input
      dense
      ref="sales"
      v-model="item.sales_rate"
      type="number"
      label="Sales"
    ></q-input>
  </div>
  <div class="col-1 col-md-1 col-lg-1">
    {{ item.total }}
  </div>
  <div class="col-1 col-md-1 col-lg-1">
    <q-btn
      icon="delete"
      color="red"
      size="sm"
      round
      @click="deleteProduct(index)"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useStoreModule from "../../../libs/useStoreModule.js";

export default defineComponent({
  props: {
    itemData: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const { getMutations } = useStoreModule();

    const { removeProductDetails } = getMutations("purchase", [
      "removeProductDetails",
    ]);

    const deleteProduct = (index) => {
      removeProductDetails(index);
    };

    const item = itemData;

    return {
      deleteProduct,
      item,
    };
  },
});
</script>
