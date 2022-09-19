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
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Product Name"
              @keydown="checkKeyDownAlphaNumeric($event)"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="category_id"
              label="Category"
              option-value="id"
              option-label="name"
              data-store="productcategory"
              action="getItems"
              :multiple="false"
            ></QSearch>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="barcode"
              outlined
              v-model="barcode"
              dense
              label="Barcode"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="sale_price"
              outlined
              v-model="sale_price"
              dense
              label="Sale Price"
              v-on:keypress="NumbersOnly"
            >
            </q-input>
          </div>
          <div class="col-12">
            <q-editor
              placeholder="Please write the product description."
              v-model="item_description"
              min-height="5rem"
            ></q-editor>
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
