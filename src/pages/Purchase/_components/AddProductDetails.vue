<template>
  <div class="row q-col-gutter-md">
    <div class="col-6 col-md-6 col-lg-6">
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
    <div class="col-6 col-md-6 col-lg-6">
      <q-btn
        color="white"
        text-color="black"
        label="Add Product"
        @click="addProduct()"
      />
    </div>
    <div
      class="row q-col-gutter-md"
      v-for="(data, index) in purchase_details"
      :key="data.id"
    >
      <!-- <span v-if="(index + 1) % 2 === 0" class="kk"> Hello </span> -->

      <div class="product_list q-mt-md">{{ index + 1 }}<span>)</span></div>
      <div class="col-3 col-md-3 col-lg-3">
        <q-input
          ref="product_id"
          v-model="data.product_name"
          dense
          label="Product"
          readonly
        >
        </q-input>
      </div>
      <div class="col-3 col-md-1 col-lg-1">
        <q-input
          @keyup="inputValue(index)"
          ref="item_rate"
          v-model="data.item_rate"
          dense
          label="Cost"
          v-on:keypress="NumbersOnly"
        >
        </q-input>
      </div>
      <div class="col-3 col-md-1 col-lg-1">
        <q-input
          @keyup="inputValue(index)"
          ref="quantity"
          v-model="data.quantity"
          dense
          v-on:keypress="NumbersOnly"
          label="Qty"
        >
        </q-input>
      </div>
      <div class="col-3 col-md-1 col-lg-1">
        <q-input
          dense
          ref="sales"
          v-model="data.sales_rate"
          label="Sale"
          v-on:keypress="NumbersOnly"
        ></q-input>
      </div>
      <div class="col-3 col-md-4 col-lg-4 q-mt-sm purchase_rate">
        = ₹{{ data.total }}
      </div>
      <div class="col-3 col-md-1 col-lg-1">
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
    ...mapMultiRowFields("purchase", ["newItem.purchase_details"]),
  },

  setup(props, { emit }) {
    const product = ref([]);

    const { getMutations } = useStoreModule();

    const { setProductDetails } = getMutations("purchase", [
      "setProductDetails",
    ]);

    const { removeProductDetails } = getMutations("purchase", [
      "removeProductDetails",
    ]);

    const { setTotalRate } = getMutations("purchase", ["setTotalRate"]);

    onMounted(() => {
      //
    });

    const addProduct = () => {
      setProductDetails(product.value);
    };

    const inputValue = (index) => {
      setTotalRate(index);
    };

    // Testing Purpose

    const deleteProduct = (index) => {
      removeProductDetails(index);
    };

    return {
      // arr_data,
      product,
      addProduct,
      // editProduct,
      deleteProduct,
      inputValue,
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

<style scoped>
.purchase_rate {
  font-size: 1.1rem;
}

.product_list {
  font-size: 1rem;
}

.kk {
  background-color: red;
}
</style>
