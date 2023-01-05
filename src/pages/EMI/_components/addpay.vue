<template>
  <span v-if="status === 'due' || status === 'partial collected'">
    <q-btn label="Pay" no-caps flat @click="instantPay(id)" />
  </span>
</template>

<script>
import { mapFields, mapMultiRowFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent, ref, onMounted, reactive } from "vue";
import useStoreModule from "../../../libs/useStoreModule.js";

export default {
  name: "payLp",
  props: {
    id: Number,
    status: String,
  },

  setup() {
    const { getAction } = useStoreModule();

    const { instantPay } = getAction("emi", ["instantPay"]);

    return {
      instantPay,
    };
  },
};
</script>
