<template>
  <div class="row q-col-gutter-md">
    <div class="col-6">
      <QSearch
        v-model="from_account"
        label="From Account"
        option-value="id"
        option-label="account_name"
        data-store="account"
        action="getAccountsType"
        :multiple="false"
      ></QSearch>
    </div>

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
      <div class="col-12 col-md-4 col-lg-4">
        <QSearch
          v-model="data.to_account_id"
          label="To Account"
          option-value="id"
          option-label="account_name"
          data-store="account"
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
          label="Amount"
          v-on:keypress="NumbersOnly"
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

      <div class="col-12 col-md-4 col-lg-4">
        <q-select
          dense
          outlined
          v-model="data.note"
          :options="options"
          emit-value
          label="Payment Purpose"
        />
      </div>

      <!-- Extra Fields -->

      <div v-if="data.note === 'others'">
        <div class="col-12 col-md-4 col-lg-4">
          <q-input
            outlined
            ref="others_note"
            v-model="data.others_note"
            dense
            label="Other Option"
          >
          </q-input>
        </div>
      </div>

      <div class="col-12 col-md-4 col-lg-4">
        <q-btn
          icon="delete"
          color="red"
          size="sm"
          round
          @click="deleteReceipt(index)"
        />
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
    ...mapFields("payment", ["newItem.from_account"]),

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
      addPayment,
      deleteReceipt,
      date_of_transaction: ref("2019/02/01"),
      options: [
        {
          label: "Vendor Payment",
          value: "Vendor Payment",
        },
        {
          label: "Salary Pay",
          value: "Salary Pay",
        },
        {
          label: "Fuel Charges",
          value: "Fuel Charges",
        },
        {
          label: "Rent Payment",
          value: "Rent Payment",
        },
        {
          label: "Travel Cost",
          value: "Travel Cost",
        },
        {
          label: "Others",
          value: "others",
        },
      ],
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
  },
});
</script>
