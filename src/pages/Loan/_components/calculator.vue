<template>
  <div>
    <div class="row q-col-gutter-md justify-between">
      <div class="col-10">
        <p>Loan Calculator</p>
      </div>
      <div class="col-2">
        <q-btn flat icon="clear" color="primary" v-close-popup />
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <div class="col-12">
        <q-input
          outlined
          v-model="loan_amount"
          ref="loan_amount"
          type="number"
          dense
          label="Loan Amount"
          :rules="[
            (val) =>
              (val && !validationErrors.loan_amount > 0) ||
              validationErrors.loan_amount
                ? validationErrors.loan_amount
                : 'Please write the loan amount',
          ]"
        ></q-input>
      </div>
      <div class="col-12">
        <q-input
          outlined
          v-model="down_payment"
          ref="down_payment"
          type="number"
          dense
          label="Down Payment"
          :rules="[
            (val) =>
              (val && !validationErrors.down_payment > 0) ||
              validationErrors.down_payment
                ? validationErrors.down_payment
                : 'Please write the down payment',
          ]"
        ></q-input>
      </div>
      <div class="col-12">
        <q-input
          outlined
          v-model="no_of_terms"
          ref="no_of_terms"
          type="number"
          dense
          label="Number of terms"
          :rules="[
            (val) =>
              (val && !validationErrors.no_of_terms > 0) ||
              validationErrors.no_of_terms
                ? validationErrors.no_of_terms
                : 'Please write the down payment',
          ]"
        ></q-input>
      </div>
      <div class="col-12">
        <q-btn label="Calculate" color="primary" @click="calculate()" />
      </div>
      <div class="col-12">EMI Amount:{{ result }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "IndexPage",
  data() {
    return {
      loan_amount: null,
      down_payment: null,
      no_of_terms: null,
      result: null,
    };
  },
  methods: {
    calculate() {
      this.result =
        (parseFloat(this.loan_amount) - parseFloat(this.down_payment)) /
        parseFloat(this.no_of_terms);
    },
  },
};
</script>
