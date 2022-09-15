<template>
  <q-btn label="Pay" no-caps flat @click="instantPay(id)" />
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
  },

  setup() {
    const { getAction } = useStoreModule();

    const { instantPay } = getAction("ewi", ["instantPay"]);

    return {
      instantPay,
    };
  },
};
</script>
