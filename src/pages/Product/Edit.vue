<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Products"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Product Name"
              @keydown="checkKeyDownAlphaNumeric($event)"
              :error-message="$getValidationErrors('name')"
              :error="$hasValidationErrors('name')"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-3 col-lg-3">
            <QSearch
              v-model="category_id"
              label="Category"
              option-value="id"
              option-label="name"
              data-store="productcategory"
              action="getItems"
              :multiple="false"
              :error-message="$getValidationErrors('category_id')"
              :error="$hasValidationErrors('category_id')"
            ></QSearch>
          </div>
          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="barcode"
              outlined
              v-model="barcode"
              dense
              label="Barcode"
              :error-message="$getValidationErrors('barcode')"
              :error="$hasValidationErrors('barcode')"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="sale_price"
              outlined
              v-model="sale_price"
              dense
              label="Sale Price"
              v-on:keypress="NumbersOnly"
              :error-message="$getValidationErrors('sale_price')"
              :error="$hasValidationErrors('sale_price')"
            >
            </q-input>
          </div>
          <div class="col-12">
            <q-input
              ref="item_description"
              outlined
              v-model="item_description"
              dense
              label="Product Description"
              type="textarea"
              :error-message="$getValidationErrors('item_description')"
              :error="$hasValidationErrors('item_description')"
            >
            </q-input>
          </div>
        </div>
      </QEditForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "ProductsEditPage",
  computed: {
    ...mapFields("product", [
      "editItem.name",
      "editItem.category_id",
      "editItem.barcode",
      "editItem.sale_price",
      "editItem.item_description",
    ]),
  },
  setup() {
    return {
      modal: true,
      dataStore: "product",
      saveaction: "product/updateItem",
      validationErrors: ref({}),
    };
  },

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

    checkKeyDownAlphaNumeric(event) {
      if (!/[a-zA-Z\s]/.test(event.key)) {
        this.ignoredValue = event.key ? event.key : "";
        event.preventDefault();
      }
    },
  },
};
</script>
