<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Purchase"
      >
        <div class="row q-col-gutter-md q-pt-md">
          <div class="col-12 col-md-8 col-lg-8">
            <div class="row q-col-gutter-md q-pt-md">
              <div class="col-12 col-md-4 col-lg-4">
                <QSearch
                  v-model="vendor_id"
                  label="Vendor Name"
                  option-value="id"
                  option-label="name"
                  data-store="user"
                  action="getItems"
                  :multiple="false"
                  :rules="[
                    (val) =>
                      (val && !validationErrors.vendor_id > 0) ||
                      validationErrors.vendor_id
                        ? validationErrors.vendor_id
                        : 'Please choose the Vendor name',
                  ]"
                ></QSearch>
              </div>

              <div class="col-12 col-md-4 col-lg-4">
                <QSearch
                  v-model="branch_id"
                  label="Branch"
                  option-value="id"
                  option-label="name"
                  data-store="branch"
                  action="getItems"
                  :multiple="false"
                  :rules="[
                    (val) =>
                      (val && !validationErrors.state_id > 0) ||
                      validationErrors.state_id
                        ? validationErrors.state_id
                        : 'Please choose the Branch name',
                  ]"
                ></QSearch>
              </div>

              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  outlined
                  v-model="date_of_purchase"
                  mask="date"
                  placeholder="Purchase Date"
                  dense
                  :rules="['date']"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="date_of_purchase">
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

              <div class="col-12">
                <q-editor
                  v-model="note"
                  placeholder="Please Write The Notes For Purchase"
                />

                <q-card flat bordered>
                  <q-card-section v-html="editor" />
                </q-card>
              </div>

              <div class="col-12 col-md-6 col-lg-6">
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
                        : 'Please Write the notes',
                  ]"
                ></q-select>
              </div>

              <div class="col-12 col-md-6 col-lg-6">
                <q-select
                  outlined
                  dense
                  v-model="status"
                  :options="options"
                  label="Status"
                ></q-select>
              </div>
            </div>

            <q-separator />

            <p class="purchase-details-create-form-head q-pt-md">
              Product Details
            </p>

            <div>
              <editProducts v-model="purchase_details" />
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <p>Hello Test</p>
          </div>
        </div>
      </QEditForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineAsyncComponent } from "vue";

const editProducts = defineAsyncComponent(() =>
  import("./_components/EditProductDetails.vue")
);

export default {
  name: "PurchaseEditPage",

  components: {
    editProducts,
  },

  setup() {
    return {
      modal: true,
      dataStore: "purchase",
      saveaction: "purchase/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
      options: ["Received", "Pending"],
      pays: ["Bank", "Cash"],
    };
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
    ]),
  },
};
</script>

<style scoped>
.head {
  font-size: x-large;
  text-align: center;
}
</style>
