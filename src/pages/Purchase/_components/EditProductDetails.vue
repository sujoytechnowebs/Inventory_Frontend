<template>
  <div class="row q-col-gutter-md q-pb-md">
    <div class="col-3">
      <QSearch
        v-model="product"
        label="Product Name"
        option-value="id"
        option-label="name"
        data-store="product"
        action="getItems"
        :multiple="false"
        dataType="object"
      ></QSearch>
    </div>
    <div class="col-3">
      <q-btn
        color="white"
        text-color="black"
        label="Add Product"
        @click="addProduct()"
      />
    </div>
  </div>
  <div
    class="row q-col-gutter-md q-pb-md"
    v-for="(data, index) in purchase_details"
    :key="data.id"
  >
    <div class="col-12 col-md-3 col-lg-3">
      <q-input
        ref="product_id"
        v-model="data.product_name"
        dense
        label="Product"
        readonly
      >
      </q-input>
    </div>
    <div class="col-12 col-md-2 col-lg-2">
      <q-input
        ref="item_rate"
        v-model="data.item_rate"
        dense
        type="number"
        label="Item Rate"
      >
      </q-input>
    </div>
    <div class="col-12 col-md-2 col-lg-2">
      <q-input
        ref="discount"
        v-model="data.discount"
        dense
        type="number"
        label="Discount"
      >
      </q-input>
    </div>
    <div class="col-12 col-md-2 col-lg-2">
      <q-input
        ref="quantity"
        v-model="data.quantity"
        dense
        type="number"
        label="Quantity"
      >
      </q-input>
    </div>
    <div class="col-12 col-md-2 col-lg-2">
      <q-input
        dense
        ref="sales"
        v-model="data.sales_rate"
        v-on:keypress="NumbersOnly"
        label="Sales"
      ></q-input>
    </div>
    <div class="col-12 col-md-1 col-lg-1">
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
    ...mapMultiRowFields("purchase", ["editItem.purchase_details"]),
  },

  setup(props, { emit }) {
    const product = ref([]);

    const { getMutations } = useStoreModule();
    const { settingProductDetails } = getMutations("purchase", [
      "settingProductDetails",
    ]);

    const { removingProductDetails } = getMutations("purchase", [
      "removingProductDetails",
    ]);

    onMounted(() => {});

    const addProduct = () => {
      console.log("product.value", product.value.id);
      settingProductDetails(product.value);
    };

    // Testing Purpose

    const deleteProduct = (index) => {
      console.log("data", index);
      removingProductDetails(index);
    };

    return {
      // arr_data,
      product,
      addProduct,
      // editProduct,
      deleteProduct,
    };
  },

  // Validation Test

  methods: {
    NumbersOnly(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
});
</script>
