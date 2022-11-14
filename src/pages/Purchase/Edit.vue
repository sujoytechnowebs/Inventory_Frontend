<template>
  <div>
    <q-card class="scroll" style="height: 100vh">
      <QEditForm
        :modal="modal"
        :widgets="true"
        save-action="purchase/updateItem"
        :data-store="dataStore"
        title="Update Purchase"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-8 col-md-9 col-lg-9 scroll-bar q-pr-md">
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-4 col-lg-4">
                <QSearch
                  v-model="vendor_id"
                  label="Vendor Name"
                  option-value="id"
                  option-label="name"
                  data-store="user"
                  action="getVendor"
                  :multiple="false"
                  :error-message="$getValidationErrors('vendor_id')"
                  :error="$hasValidationErrors('vendor_id')"
                ></QSearch>
              </div>
              <div class="col-12 col-md-5 col-lg-5">
                <div v-if="branch_id != ''">
                  <QSearch
                    class="extra-height"
                    v-model="branch_id"
                    label="Branch"
                    option-value="id"
                    option-label="name"
                    data-store="branch"
                    action="getItems"
                    readonly
                    :multiple="false"
                    :error-message="$getValidationErrors('branch_id')"
                    :error="$hasValidationErrors('branch_id')"
                  ></QSearch>
                </div>
                <div v-if="branch_id === ''">
                  <QSearch
                    class="extra-height"
                    v-model="branch_id"
                    label="Branch"
                    option-value="id"
                    option-label="name"
                    data-store="branch"
                    action="getItems"
                    :multiple="false"
                    :error-message="$getValidationErrors('branch_id')"
                    :error="$hasValidationErrors('branch_id')"
                  ></QSearch>
                </div>
              </div>
            </div>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-3 col-lg-3">
                <q-input
                  outlined
                  v-model="view_date_of_purchase"
                  placeholder="Purchase Date"
                  dense
                  :error-message="$getValidationErrors('date_of_purchase')"
                  :error="$hasValidationErrors('date_of_purchase')"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="date_of_purchase" mask="YYYY/MM/DD">
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
              <div class="col-12 col-md-3 col-lg-3">
                <q-select
                  outlined
                  v-model="payment_method"
                  dense
                  option-dense
                  :options="pays"
                  option-value="value"
                  option-label="label"
                  option-disable="inactive"
                  emit-value
                  map-options
                  label="Payment Method"
                  :error-message="$getValidationErrors('payment_method')"
                  :error="$hasValidationErrors('payment_method')"
                ></q-select>
              </div>
              <div class="col-12 col-md-3 col-lg-3">
                <q-select
                  outlined
                  dense
                  v-model="status"
                  :options="options"
                  label="Status"
                  :error-message="$getValidationErrors('status')"
                  :error="$hasValidationErrors('status')"
                ></q-select>
              </div>
            </div>

            <div class="column">
              <p class="purchase-details-create-form-head q-pt-md">
                Product Details
              </p>
              <editProducts v-model="purchase_details" />
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
          </div>
          <div class="col-12 col-sm-4 col-md-3 col-lg-3">
            <q-card flat bordered>
              <q-card-section>
                <div class="row justify-between">
                  <div class="col-6">
                    <p class="q-ma-none text-weight-medium">Grand Total :</p>
                  </div>
                  <div class="col-6 text-right">
                    <p>
                      <span class="text-weight-medium">₹</span
                      ><span class="text-calculation">{{
                        grand_item_rate_total
                      }}</span>
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </QEditForm>
    </q-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapFields } from "vuex-map-fields";
import { defineAsyncComponent, ref } from "vue";

const editProducts = defineAsyncComponent(() =>
  import("./_components/EditProductDetails.vue")
);

export default {
  name: "PurchaseEditPage",

  components: {
    editProducts,
  },

  data() {
    return {
      modal: ref(true),
      dataStore: "purchase",
      validationErrors: ref({}),
      modelValue: ref(),
      options: ["Received", "Pending"],
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
    ...mapFields("purchase", [
      "editItem.vendor_id",
      "editItem.branch_id",
      "editItem.date_of_purchase",
      "editItem.note",
      "editItem.status",
      "editItem.payment_method",
      "editItem.purchase_details",
      "editItem.grand_item_rate_total",
    ]),
    ...mapGetters("auth", ["getActiveBranch"]),
    view_date_of_purchase() {
      return this.$dateConvert.format(this.date_of_purchase);
    },
  },
};
</script>

<style>
.purchase-details-create-form-head {
  font-size: 16px;
}

.scroll-bar {
  max-height: 80vh !important;
  overflow: scroll;
}

.dense-input-field .q-field .q-field__inner .q-field__control {
  height: 35px !important;
}

.extra-height
  .q-field__inner
  .q-field__control
  .q-field__control-container
  .q-field__native
  .q-field__input {
  min-height: 0 !important;
}
</style>

<style scoped>
.text-weight-medium {
  font-weight: 500;
  font-size: 1.1rem;
}

.text-calculation {
  font-size: 1.1rem;
}

.note_head {
  font-size: 1rem;
  font-weight: 600;
}
</style>
