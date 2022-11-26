<template>
  <q-card>
    <div class="bg-primary text-white">
      <q-card-actions align="between">
        <p class="customer_heading q-pt-md q-pl-sm">Customer Details</p>
        <q-btn flat dense round icon="clear" @click="closeModel(false)" />
      </q-card-actions>
    </div>

    <div v-for="item in getCustomerData.data" class="row" :key="item">
      <q-card-section
        ><span class="customer_head">Customer Id:</span> {{ item.customer_id }}
      </q-card-section>
      <q-card-section>
        <span class="customer_head">Payment Date:</span>
        {{ $dateConvert.format(item.payment_date) }}
      </q-card-section>
      <q-card-section>
        <span class="customer_head">Amount:</span> {{ item.amount }}
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { mapGetters } from "vuex";
import useStoreModule from "../../../libs/useStoreModule";
import { dateConvert } from "src/boot/dateConvert";

export default defineComponent({
  name: "LoanCustomerPage",

  computed: {
    ...mapFields("loan", ["filter"]),
    ...mapGetters("loan", ["getCustomerData", "getModelClose"]),
  },

  setup() {
    const { getGetters } = useStoreModule();

    const { getCustomerData } = getGetters("loan", ["getCustomerData"]);

    const { getModelClose } = getGetters("loan", ["getModelClose"]);

    return {
      dataStore: "loan",
      getCustomerData,
      getModelClose,
    };
  },

  // Close Modal

  methods: {
    closeModel(val) {
      console.log("detail page", val);
      this.$store.commit(`${this.dataStore}/setDetailsModal`, val);
    },
  },
});
</script>

<style scoped>
.customer_head {
  font-weight: 600;
  font-size: 1rem;
}

.customer_heading {
  font-weight: 600;
  font-size: 1.2rem;
}
</style>
