<template>
  <div class="row q-col-gutter-md">
    <!-- <div class="col-6">
      <QSearch
        v-model="to_account"
        label="To Account"
        option-value="id"
        option-label="name"
        data-store="user"
        action="getItems"
        :multiple="false"
        dataType="object"
      ></QSearch>
    </div> -->

    <div class="col-12">
      <q-btn
        color="white"
        text-color="black"
        label="Add Payment"
        @click="addPayment()"
      />
    </div>

    <div
      class="row q-col-gutter-md"
      v-for="(data, index) in paymentsDetails"
      :key="data.id"
    >
      <div class="col-12">
        <QSearch
          v-model="data.to_account_id"
          label="To Account"
          option-value="id"
          option-label="name"
          data-store="user"
          action="getItems"
          :multiple="false"
        ></QSearch>
      </div>

      <div class="col-12 col-md-4 col-lg-4">
        <QSearch
          v-model="data.from_account"
          label="From Account"
          option-value="id"
          option-label="name"
          data-store="user"
          action="getItems"
          :multiple="false"
        ></QSearch>
      </div>

      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          ref="amount"
          outlined
          v-model="data.amount"
          dense
          type="number"
          label="Amount"
        >
        </q-input>
      </div>

      <div class="col-12 col-md-4 col-lg-4">
        <q-input
          outlined
          ref="date_of_transaction"
          label="Date of Transaction"
          dense
          v-model="data.date_of_transaction"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="data.date_of_transaction">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="col-10">
        <q-editor v-model="data.note" ref="note" />
        <q-card-section v-html="editor" />
      </div>

      <div class="col-12 col-md-2 col-lg-2">
        <q-btn icon="delete" color="red" round @click="deleteReceipt(index)" />
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
    ...mapMultiRowFields("payment", ["newItem.paymentsDetails"]),
  },

  setup(props, { emit }) {
    const to_account = ref({});

    const { getMutations } = useStoreModule();

    const { setPaymentDetails } = getMutations("payment", [
      "setPaymentDetails",
    ]);

    const { removePaymentDetails } = getMutations("payment", [
      "removePaymentDetails",
    ]);

    onMounted(() => {
      //
    });

    const addPayment = () => {
      // console.error("addReceipt called", to_account.value);
      setPaymentDetails(to_account.value);
    };

    // Testing Purpose
    const deleteReceipt = (index) => {
      console.log("data", index);
      removePaymentDetails(index);
    };

    return {
      to_account,
      addPayment,
      deleteReceipt,
      date_of_transaction: ref("2019/02/01"),
    };
  },
});
</script>
