<template>
  <div>
    <q-card>
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="salereturn/createItem"
        :data-store="dataStore"
        title="Add Sale Return"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6 col-md-3 col-lg-3">
            <QSearch
              v-model="sales_id"
              label="Reference Number"
              option-value="id"
              option-label="reference_no"
              data-store="sale"
              action="getItems"
              :multiple="false"
              :error-message="$getValidationErrors('reference_no')"
              :error="$hasValidationErrors('reference_no')"
            ></QSearch>
          </div>

          <div class="col-12 col-sm-6 col-md-2 col-lg-2">
            <q-input
              outlined
              v-model="view_date_of_saleReturn"
              placeholder="Sale Date"
              dense
              :error-message="$getValidationErrors('date_of_return')"
              :error="$hasValidationErrors('date_of_return')"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date_of_return">
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

          <div class="col-12 col-sm-6 col-md-2 col-lg-2">
            <q-select
              outlined
              v-model="payment_method"
              dense
              :options="pays"
              label="Payment Methods"
              :error-message="$getValidationErrors('payment_method')"
              :error="$hasValidationErrors('payment_method')"
            ></q-select>
          </div>

          <div class="col-12 col-sm-6 col-md-2 col-lg-2">
            <q-select
              outlined
              dense
              v-model="status"
              :options="sale_status"
              label="Status"
              :error-message="$getValidationErrors('status')"
              :error="$hasValidationErrors('status')"
            ></q-select>
          </div>
        </div>

        <q-separator />

        <p class="sales-return-details-create-form-head q-pt-md">
          Product Details
        </p>
        <div class="q-pb-md">
          <addProducts v-model="salesReturnDetails" />
        </div>
        <div>
          <q-editor
            v-model="note"
            placeholder="Please Write The Notes For Purchase"
          />
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineAsyncComponent } from "vue";

const addProducts = defineAsyncComponent(() =>
  import("./_components/AddProductDetails.vue")
);

export default {
  name: "SaleReturnCreatePage",

  components: {
    addProducts,
  },

  setup() {
    return {
      modal: ref(true),
      dataStore: "salereturn",
      validationErrors: ref({}),
      modelValue: ref(),
      sale_status: ["received", "delivered"],
      pays: ["bank", "cash"],
    };
  },

  computed: {
    ...mapFields("salereturn", [
      "newItem.sales_id",
      "newItem.customer_id",
      "newItem.branch",
      "newItem.date_of_return",
      "newItem.note",
      "newItem.payment_method",
      "newItem.status",
      "newItem.salesReturnDetails",
    ]),
    view_date_of_saleReturn() {
      return this.$dateConvert.format(this.date_of_return);
    },
  },
};
</script>

<style scoped>
.sales-return-details-create-form-head {
  font-size: 18px;
}
</style>
