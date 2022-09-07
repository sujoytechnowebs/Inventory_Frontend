<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="purchasereturn/createItem"
        :data-store="dataStore"
        title="Add Purchase For Return"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6 col-md-3 col-lg-3">
            <QSearch
              v-model="purchase_id"
              label="Reference Number"
              option-value="id"
              option-label="reference_no"
              data-store="purchase"
              action="getItems"
              :multiple="false"
              :rules="[
                (val) =>
                  (val && !validationErrors.id > 0) || validationErrors.id
                    ? validationErrors.id
                    : 'Please choose the city name',
              ]"
            ></QSearch>
          </div>
          <div class="col-12 col-sm-6 col-md-3 col-lg-3">
            <q-input
              outlined
              dense
              label="Purchase Return Date"
              v-model="date_of_return"
              mask="date"
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
          <div class="col-12 col-sm-6 col-md-3 col-lg-3">
            <q-select
              outlined
              v-model="payment_method"
              dense
              :options="pays"
              label="Payment Methods"
              :rules="[
                (val) =>
                  (val && !validationErrors.payment_method > 0) ||
                  validationErrors.payment_method
                    ? validationErrors.payment_method
                    : 'Please Choose The Payment Methods',
              ]"
            ></q-select>
          </div>
          <div class="col-12 col-sm-6 col-md-3 col-lg-3">
            <q-select
              outlined
              dense
              v-model="status"
              :options="options"
              label="Status"
              :rules="[
                (val) =>
                  (val && !validationErrors.status > 0) ||
                  validationErrors.status
                    ? validationErrors.status
                    : 'Please Select The Status',
              ]"
            ></q-select>
          </div>
        </div>
        <q-separator />

        <p class="purchase-details-create-form-head q-pt-md">Product Details</p>
        <div>
          <addReturnProducts v-model="purchase_details" />
        </div>

        <div class="col-12 q-pt-md">
          <q-editor
            v-model="note"
            placeholder="Please Write The Notes For Purchase"
          />
          <div v-html="editor" />
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapGetters } from "vuex";
import { mapFields } from "vuex-map-fields";
import { defineAsyncComponent } from "vue";

const addReturnProducts = defineAsyncComponent(() =>
  import("./_components/AddReturnProductDetails.vue")
);

export default {
  name: "PurchaseReturnCreatePage",

  components: {
    addReturnProducts,
  },

  data() {
    return {
      modal: ref(true),
      dataStore: "purchasereturn",
      validationErrors: ref({}),
      modelValue: ref(),
      options: ["received", "delivered"],
      pays: ["cash", "bank", "due"],
    };
  },

  created() {
    this.branch_id = this.getActiveBranch;
  },

  computed: {
    ...mapFields("purchasereturn", [
      "newItem.purchase_id",
      "newItem.date_of_return",
      "newItem.note",
      "newItem.payment_method",
      "newItem.status",
      "newItem.purchase_return_details",
    ]),
    ...mapGetters("auth", ["getActiveBranch"]),
  },
};
</script>

<style scoped>
.purchase-details-create-form-head {
  font-size: 18px;
}

.scroll-bar {
  max-height: 79vh !important;
  overflow: scroll;
}
</style>
