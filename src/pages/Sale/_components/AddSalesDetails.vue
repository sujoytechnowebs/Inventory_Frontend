<template>
  <div>
    <q-separator />
    <p class="q-mt-md details_head">Sales Details</p>
    <div class="row q-col-gutter-md">
      <div class="col-6">
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
      <div class="col-6">
        <q-btn
          color="white"
          text-color="black"
          label="Add Product"
          @click="addProduct()"
        />
      </div>
    </div>
    <div
      class="row q-col-gutter-md q-mt-md"
      v-for="(data, index) in salesDetails"
      :key="index"
    >
      <div class="col-6 col-sm-2 col-md-3 col-lg-3">
        <q-input
          ref="product_id"
          v-model="data.product_name"
          dense
          label="Product"
          readonly
        >
        </q-input>
      </div>
      <div class="col-6 col-sm-2 col-md-2 col-lg-2">
        <q-input
          ref="item_rate"
          v-model="data.item_rate"
          dense
          label="Item Rate"
        >
        </q-input>
      </div>
      <div class="col-6 col-sm-2 col-md-2 col-lg-2">
        <q-input ref="discount" v-model="data.discount" dense label="Discount">
        </q-input>
      </div>
      <div class="col-6 col-sm-2 col-md-2 col-lg-2">
        <q-input ref="quantity" v-model="data.quantity" dense label="Quantity">
        </q-input>
      </div>
      <div class="col-6 col-sm-2 col-md-2 col-lg-2">
        <q-checkbox v-model="data.custom_price" label="Custom Price" />
      </div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1">
        <q-btn
          icon="delete"
          color="red"
          size="sm"
          round
          @click="deleteProduct(index)"
        />
      </div>
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
    // ...mapFields("purchasedetails", [
    //   "newItem.product_id",
    //   "newItem.item_rate",
    //   "newItem.discount",
    //   "newItem.quantity",
    //   "newItem.tax_class_id",
    // ]),
    ...mapMultiRowFields("sale", ["newItem.salesDetails"]),
  },

  setup(props, { emit }) {
    const product = ref([]);
    // let arr_data = ref([]);

    const { getMutations } = useStoreModule();
    const { setProductDetails } = getMutations("sale", ["setProductDetails"]);

    const { removeProductDetails } = getMutations("sale", [
      "removeProductDetails",
    ]);

    onMounted(() => {
      // arr_data.value = props.value;
    });

    const addProduct = () => {
      // let mData = product.value;
      // mData.item_rate = null;
      // mData.discount = null;
      // mData.quantity = null;
      // mData.discount = null;
      // mData.tax_class_id = null;
      // mData.product_id = product.value.id;
      // arr_data.value.push(mData);
      // emit("update:modelValue", arr_data.value);
      console.log("product.value", product.value.id);
      setProductDetails(product.value);
    };

    // Testing Purpose

    const deleteProduct = (index) => {
      console.log("data", index);
      // arr_data.value.splice(data);
      // emit("update:modelValue", arr_data.value);
      removeProductDetails(index);
    };

    // const editProduct = () => {
    //   setProductDetails(arr_data.value);
    // };

    return {
      product,
      addProduct,
      deleteProduct,
    };
  },
});
</script>

<style scoped>
.details_head {
  text-align: center;
  font-size: 20px;
}
</style>
