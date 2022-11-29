<template>
  <div class="row q-col-gutter-md">
    <div class="col-6 col-md-6 col-lg-6">
      <!-- <q-field
        :error-message="$getValidationErrors('purchase_details')"
        :error="$hasValidationErrors('purchase_details')"
        dense
      > -->
      <QSearch
        v-model="product"
        label="Product"
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
      <!-- </q-field> -->
    </div>
    <div class="col-6 col-md-6 col-lg-6">
      <q-btn
        color="primary"
        label="Add Product"
        @click="addProduct()"
        :disabled="product == null"
      />
    </div>

    <div v-for="(data, index) in purchase_details" :key="data.id">
      <!-- <div v-if="product.id === 1" class="kk">Hello</div> -->

      <div
        class="row q-col-gutter-md row_even_colour q-pb-md q-mt-sm"
        v-if="(index + 1) % 2 === 0"
      >
        <!-- <span v-if="(index + 1) % 2 === 0" class="kk"> Hello </span> -->
        <div class="product_list q-mt-md">{{ index + 1 }}<span>)</span></div>
        <div class="col-3 col-md-1 col-lg-1">
          <q-input
            ref="product_id"
            v-model="data.product_serial_no"
            dense
            label="Serial"
            readonly
          >
          </q-input>
        </div>
        <div class="col-3 col-md-1 col-lg-1">
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
            readonly
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

      <div
        class="row q-col-gutter-md row_odd_colour q-pb-md q-mt-sm"
        v-if="(index + 1) % 2 === 1"
      >
        <!-- <span v-if="(index + 1) % 2 === 0" class="kk"> Hello </span> -->
        <div class="product_list q-mt-md">{{ index + 1 }}<span>)</span></div>
        <div class="col-3 col-md-1 col-lg-1">
          <q-input
            ref="product_id"
            v-model="data.product_serial_no"
            dense
            label="Serial"
            readonly
          >
          </q-input>
        </div>
        <div class="col-3 col-md-1 col-lg-1">
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
            readonly
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
    const product = ref(null);

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

.row_even_colour {
  background-color: rgb(255, 255, 255);
}

.row_odd_colour {
  background-color: #e3e9e3;
}

.warning-text {
  color: red;
}
</style>
