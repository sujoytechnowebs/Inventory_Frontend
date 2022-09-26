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
              :error-message="$getValidationErrors('reference_no')"
              :error="$hasValidationErrors('reference_no')"
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
              option-value="value"
              option-label="label"
              option-disable="inactive"
              emit-value
              map-options
              label="Payment Methods"
              :error-message="$getValidationErrors('payment_method')"
              :error="$hasValidationErrors('payment_method')"
            ></q-select>
          </div>
          <div class="col-12 col-sm-6 col-md-3 col-lg-3">
            <q-select
              outlined
              dense
              v-model="status"
              :options="options"
              option-value="value"
              option-label="label"
              option-disable="inactive"
              emit-value
              map-options
              label="Status"
              :error-message="$getValidationErrors('status')"
              :error="$hasValidationErrors('status')"
            ></q-select>
          </div>
        </div>
        <q-separator />

        <p class="purchase-details-create-form-head q-pt-md">Product Details</p>
        <div>
          <addReturnProducts v-model="purchase_details" />
        </div>

        <div class="col-12 q-py-lg">
          <p class="note_head">Notes For Purchase:</p>

          <q-field
            :error-message="$getValidationErrors('note')"
            :error="$hasValidationErrors('note')"
          >
            <q-editor v-model="note" class="full-width"></q-editor>
          </q-field>
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
      // options: ["received", "delivered"],
      options: [
        {
          value: "received",
          label: "Received",
        },
        {
          value: "delivered",
          label: "Delivered",
        },
      ],
      pays: [
        {
          value: "bank",
          label: "Bank",
        },
        {
          value: "cash",
          label: "Cash",
        },
        {
          value: "due",
          label: "Due",
        },
      ],
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

<style scoped>
.note_head {
  font-size: 1rem;
  font-weight: 600;
}
</style>
