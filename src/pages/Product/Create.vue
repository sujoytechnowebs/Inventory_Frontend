<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="product/createItem"
        :data-store="dataStore"
        title="Add Products"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <div class="col-12">
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
            <div class="col-12">
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
            <div class="col-12">
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
            <div class="col-12">
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
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <!-- Product Image -->

            <q-uploader
              label="Upload Product Image"
              square
              flat
              bordered
              auto-upload
              class="full-width"
              :factory="factoryFn"
            />
          </div>

          <div class="col-12">
            <q-input
              ref="item_description"
              outlined
              v-model="item_description"
              dense
              type="textarea"
              label="Product Description"
              :error-message="$getValidationErrors('item_description')"
              :error="$hasValidationErrors('item_description')"
            >
            </q-input>
          </div>
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  name: "ProductsCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "product",
      validationErrors: ref({}),
    };
  },

  computed: {
    ...mapFields("product", [
      "newItem.name",
      "newItem.category_id",
      "newItem.barcode",
      "newItem.sale_price",
      "newItem.item_description",
    ]),
  },

  methods: {
    ...mapActions("product", ["media"]),

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

    factoryFn(files) {
      let formData = new FormData();
      formData.append("attachment_type", "image");
      formData.append("file", files[0]);
      return new Promise((resolve) => {
        this.media(formData)
          .then((res) => {
            resolve(true);
          })
          .finally(() => {});
      });
    },
  },
};
</script>
