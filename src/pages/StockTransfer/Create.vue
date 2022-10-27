<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="stocktransfer/createItem"
        :data-store="dataStore"
        title="Add Stock Transfer Details"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
            <QSearch
              v-model="product_id"
              label="Product Names"
              option-value="id"
              option-label="name"
              data-store="product"
              action="getItems"
              :multiple="false"
              :error-message="$getValidationErrors('product_id')"
              :error="$hasValidationErrors('product_id')"
            ></QSearch>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="quantity"
              outlined
              v-model="quantity"
              dense
              label="Quantity"
              type="number"
              :error-message="$getValidationErrors('quantity')"
              :error="$hasValidationErrors('quantity')"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              outlined
              dense
              v-model="view_date_of_transfer"
              placeholder="Please Enter The Date"
              :error-message="$getValidationErrors('date')"
              :error="$hasValidationErrors('date')"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="from_branch_id"
              label="From Branch"
              option-value="id"
              option-label="name"
              data-store="branch"
              action="getItems"
              :multiple="false"
              :error-message="$getValidationErrors('from_branch_id')"
              :error="$hasValidationErrors('from_branch_id')"
            ></QSearch>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="to_branch_id"
              label="To Branch"
              option-value="id"
              option-label="name"
              data-store="branch"
              action="getItems"
              :multiple="false"
              :error-message="$getValidationErrors('to_branch_id')"
              :error="$hasValidationErrors('to_branch_id')"
            ></QSearch>
          </div>
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "StockTransfersCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "stocktransfer",
      validationErrors: ref({}),
    };
  },

  computed: {
    ...mapFields("stocktransfer", [
      "newItem.product_id",
      "newItem.date",
      "newItem.from_branch_id",
      "newItem.to_branch_id",
      "newItem.quantity",
    ]),
    view_date_of_transfer() {
      return this.$dateConvert.format(this.date);
    },
  },
};
</script>
