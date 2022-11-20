<template>
  <div class="row q-col-gutter-md">
    <div class="col-7 col-sm-4 col-md-3 col-lg-2">
      <QSearch
        v-model="product"
        label="Product Name"
        option-value="id"
        option-label="name"
        data-store="product"
        action="getItems"
        :multiple="false"
        dataType="object"
        @clear="product = null"
      ></QSearch>
      <span
        class="warning-text"
        v-if="$hasValidationErrors('purchase_details')"
      >
        {{ $getValidationErrors("purchase_details") }}
      </span>
    </div>
    <div class="col-5 col-sm-3 col-md-3 col-lg-3">
      <q-btn
        color="primary"
        label="Add Product"
        @click="addProduct()"
        :disabled="product == null"
      />
    </div>
  </div>

  <div v-for="(data, index) in purchase_return_details" :key="data.id">
    <div
      class="row q-col-gutter-md row_even_colour q-pb-md q-mt-sm"
      v-if="(index + 1) % 2 === 0"
    >
      <div class="product_list q-mt-md">{{ index + 1 }}<span>)</span></div>
      <div class="col-4 col-md-4 col-lg-4">
        <q-input
          ref="product_id"
          v-model="data.product_name"
          dense
          label="Product"
          readonly
        >
        </q-input>
      </div>
      <div class="col-4 col-md-4 col-lg-4">
        <q-input
          ref="quantity"
          v-model="data.quantity"
          dense
          type="number"
          label="Quantity"
        >
        </q-input>
      </div>
      <div class="col-2 col-md-2 col-lg-2">
        <q-btn
          icon="delete"
          color="red"
          size="sm"
          round
          @click="deleteProduct(index)"
        />
      </div>
    </div>

    <div
      class="row q-col-gutter-md row_odd_colour q-pb-md q-mt-sm"
      v-if="(index + 1) % 2 === 1"
    >
      <div class="product_list q-mt-md">{{ index + 1 }}<span>)</span></div>
      <div class="col-4 col-md-4 col-lg-4">
        <q-input
          ref="product_id"
          v-model="data.product_name"
          dense
          label="Product"
          readonly
        >
        </q-input>
      </div>
      <div class="col-4 col-md-4 col-lg-4">
        <q-input
          ref="quantity"
          v-model="data.quantity"
          dense
          type="number"
          label="Quantity"
        >
        </q-input>
      </div>
      <div class="col-2 col-md-2 col-lg-2">
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
    ...mapMultiRowFields("purchasereturn", ["newItem.purchase_return_details"]),
  },

  setup(props, { emit }) {
    const product = ref(null);

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

<style scoped>
.row_even_colour {
  background-color: rgb(255, 255, 255);
}

.row_odd_colour {
  background-color: #e3e9e3;
}

.product_list {
  font-size: 1rem;
}

.warning-text {
  color: red;
}
</style>
