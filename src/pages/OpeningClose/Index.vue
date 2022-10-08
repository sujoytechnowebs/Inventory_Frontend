<template>
  <div class="row q-col-gutter-md q-pa-md">
    <div class="col-12 col-md-6 col-lg-6">
      <q-card class="my-card">
        <q-card-section>
          <span class="balance_head"> Opening Balance: </span>
          {{ data.openingBal }}
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-6 col-lg-6">
      <q-card class="my-card">
        <q-card-section>
          <span class="balance_head"> Closing Balance: </span>
          {{ data.openingBal }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

export default defineComponent({
  name: "OpeningClose",

  components: {},

  computed: {
    ...mapFields("openingclose", ["filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();

    const { getAction } = useStoreModule();
    const { getOpeningClosingSummary } = getAction("openingclose", [
      "getOpeningClosingSummary",
    ]);

    const data = ref({});

    onMounted(() => {
      getOpeningClosingSummary().then((response) => {
        data.value = response.data.data;
      });
    });

    return {
      hasEditPermission: true,
      dataStore: "profitloss",
      aditionalActions: false,
      data,
    };
  },
});
</script>

<style>
.balance_head {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
