<template>
  <div class="row q-col-gutter-md">
    <div class="col-7 col-sm-4 col-md-3 col-lg-2">
      <QSearch
        v-model="product"
        label="Product Name"
        option-value="id"
        option-label="productSlNo"
        data-store="product"
        action="getItems"
        :multiple="false"
        dataType="object"
      ></QSearch>
    </div>
    <div class="col-5 col-sm-3 col-md-3 col-lg-3">
      <q-btn
        color="white"
        text-color="black"
        label="Add Product"
        @click="addProduct()"
      />
    </div>
  </div>
  <div
    class="row q-col-gutter-md q-pt-md"
    v-for="(data, index) in purchase_return_details"
    :key="data.id"
  >
    <div class="col-5 col-sm-6 col-md-6 col-lg-6">
      <q-input
        ref="product_id"
        v-model="data.product_name"
        dense
        label="Product"
        readonly
      >
      </q-input>
    </div>
    <div class="col-5 col-sm-5 col-md-5 col-lg-5">
      <q-input
        ref="quantity"
        v-model="data.quantity"
        dense
        type="number"
        label="Quantity"
      >
      </q-input>
    </div>
    <div class="col-2 col-sm-1 col-md-1 col-lg-1">
      <q-btn
        icon="delete"
        color="red"
        size="sm"
        round
        @click="deleteProduct(index)"
      />
    </div>
  </div>
</template>

<script>
import { mapFields, mapMultiRowFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent, ref, onMounted, reactive } from "vue";
import useStoreModule from "../../../libs/useStoreModule.js";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },

  computed: {
    ...mapMultiRowFields("purchasereturn", ["newItem.purchase_return_details"]),
  },

  setup(props, { emit }) {
    const product = ref([]);

    const { getMutations } = useStoreModule();
    const { setProductDetails } = getMutations("purchasereturn", [
      "setProductDetails",
    ]);

    const { removeProductDetails } = getMutations("purchasereturn", [
      "removeProductDetails",
    ]);

    onMounted(() => {});

    const addProduct = () => {
      console.log("product.value", product.value.id);
      setProductDetails(product.value);
    };

    // Testing Purpose

    const deleteProduct = (index) => {
      console.log("data", index);
      removeProductDetails(index);
    };

    return {
      // arr_data,
      product,
      addProduct,
      // editProduct,
      deleteProduct,
    };
  },
});
</script>
