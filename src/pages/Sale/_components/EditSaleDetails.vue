<template>
  <div>
    <div class="row q-col-gutter-md">
      <div class="col-6">
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
      <div class="col-6">
        <q-btn
          color="white"
          text-color="black"
          label="Add Product"
          @click="addProduct()"
        />
      </div>
    </div>

    <div v-for="(data, index) in salesDetails" :key="index">
      <div
        class="row q-col-gutter-md row_even_colour q-pb-md q-mt-sm"
        v-if="(index + 1) % 2 === 0"
      >
        <div class="product_list q-mt-md">{{ index + 1 }}<span>)</span></div>

        <div class="col-3 col-md-1 col-lg-1">
          <q-input
            ref="product_id"
            v-model="data.product.productSlNo"
            dense
            label="Serial"
            readonly
          >
          </q-input>
        </div>
        <div class="col-3 col-md-1 col-lg-1">
          <q-input
            ref="product_id"
            v-model="data.product.name"
            dense
            label="Product"
            readonly
          >
          </q-input>
        </div>
        <div class="col-3 col-md-1 col-lg-1">
          <q-input
            ref="quantity"
            @keyup="inputValue(index)"
            v-model="data.quantity"
            dense
            label="Qty"
          >
          </q-input>
        </div>
        <div class="col-3 col-md-2 col-lg-2">
          <!-- <div v-if="data.custom_price === false || data.custom_price === ''"> -->
          <!-- <q-input
            ref="item_rate"
            v-model="data.item_rate"
            dense
            label="Price"
            readonly
          >
          </q-input> -->
          <!-- </div> -->

          <!-- <div v-if="data.custom_price === true"> -->
          <q-input
            @keyup="inputValue(index)"
            ref="item_rate"
            v-model="data.item_rate"
            dense
            label="Price"
            v-on:keypress="NumbersOnly"
          >
          </q-input>
          <!-- </div> -->
        </div>

        <!-- <div class="col-3 col-md-3 col-lg-3">
          <q-toggle
            v-model="data.custom_price"
            color="primary"
            label="Custom Sale Price"
          />
        </div> -->

        <!-- <div class="col-3 col-md-2 col-lg-2 q-mt-sm purchase_rate">
          = ₹{{ data.total }}
        </div> -->

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

      <div
        class="row q-col-gutter-md row_odd_colour q-pb-md q-mt-sm"
        v-if="(index + 1) % 2 === 1"
      >
        <div class="product_list q-mt-md">{{ index + 1 }}<span>)</span></div>

        <div class="col-3 col-md-1 col-lg-1">
          <q-input
            ref="product_id"
            v-model="data.product.productSlNo"
            dense
            label="Serial"
            readonly
          >
          </q-input>
        </div>
        <div class="col-3 col-md-1 col-lg-1">
          <q-input
            ref="product_id"
            v-model="data.product.name"
            dense
            label="Product"
            readonly
          >
          </q-input>
        </div>
        <div class="col-3 col-md-1 col-lg-1">
          <q-input
            ref="quantity"
            @keyup="inputValue(index)"
            v-model="data.quantity"
            dense
            label="Qty"
          >
          </q-input>
        </div>
        <div class="col-3 col-md-2 col-lg-2">
          <!-- <div v-if="data.custom_price === false || data.custom_price === ''"> -->
          <!-- <q-input
            ref="item_rate"
            v-model="data.item_rate"
            dense
            label="Price"
            readonly
          >
          </q-input> -->
          <!-- </div> -->

          <!-- <div v-if="data.custom_price === true"> -->
          <q-input
            @keyup="inputValue(index)"
            ref="item_rate"
            v-model="data.item_rate"
            dense
            label="Price"
            v-on:keypress="NumbersOnly"
          >
          </q-input>
          <!-- </div> -->
        </div>

        <!-- <div class="col-3 col-md-3 col-lg-3">
          <q-toggle
            v-model="data.custom_price"
            color="primary"
            label="Custom Sale Price"
          />
        </div> -->

        <!-- <div class="col-3 col-md-2 col-lg-2 q-mt-sm purchase_rate">
          = ₹{{ data.total }}
        </div> -->

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
    ...mapMultiRowFields("sale", ["editItem.salesDetails"]),
  },

  setup(props, { emit }) {
    const product = ref([]);

    const { getMutations } = useStoreModule();
    const { editProductDetails } = getMutations("sale", ["editProductDetails"]);
    const { calculateLoanAmountEdit } = getMutations("sale", [
      "calculateLoanAmountEdit",
    ]);

    const { removingProductDetails } = getMutations("sale", [
      "removingProductDetails",
    ]);

    // Testing Calculations

    const { setTotalRateEdit } = getMutations("sale", ["setTotalRateEdit"]);

    onMounted(() => {});

    const addProduct = () => {
      console.log("product.value", product.value.id);
      editProductDetails(product.value);
      calculateLoanAmountEdit();
    };

    // Testing calculations

    const inputValue = (index) => {
      setTotalRateEdit(index);
    };

    // Testing Purpose

    const deleteProduct = (index) => {
      console.log("data", index);

      removingProductDetails(index);
    };

    return {
      product,
      addProduct,
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
.details_head {
  text-align: center;
  font-size: 20px;
}

.product_list {
  font-size: 1rem;
}

.row_even_colour {
  background-color: rgb(255, 255, 255);
}

.row_odd_colour {
  background-color: #e3e9e3;
}
</style>
