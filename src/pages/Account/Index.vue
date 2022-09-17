<template>
  <div>
    <q-card-section>
      <QDataTable
        class="no-shadow"
        :data-store="dataStore"
        :hasEditPermission="hasEditPermission"
        :aditionalActions="aditionalActions"
        :columns="columns"
        :filter="filter"
        :canEdit="false"
        :canDelete="false"
      >
        <template v-slot:top>
          <div
            class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-6 col-md-6"
          >
            Account Management Table
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 row justify-end items-center">
            <div class="col-8">
              <q-input
                outlined
                dense
                debounce="300"
                v-model="search"
                clearable
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
          </div>
        </template>
        <!-- <template v-slot:aditionalActions="props">
          <q-btn
            label="View More"
            flat
            @click="setViewMoreDetails(props)"
          ></q-btn>
        </template> -->
      </QDataTable>

      <q-dialog v-model="showCreateModal">
        <div :class="$q.platform.is.desktop ? 'account-create-form' : ''">
          <CreateUser v-bind:modal="true"></CreateUser>
        </div>
      </q-dialog>
    </q-card-section>

    <q-dialog v-model="setViewMoreDetails">
      <div :class="$q.platform.is.desktop ? 'account-form' : ''">
        <ViewDetails></ViewDetails>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

const CreateUser = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "IndexPage",

  components: {
    CreateUser,
  },

  computed: {
    ...mapFields("account", ["filter.search", "filter"]),
  },
  setup() {
    const { getGetters, getMutations } = useStoreModule();

    const { showCreateModal } = getGetters("account", ["showCreateModal"]);

    // const { setViewMoreDetailsMutation } = getMutations("account", [
    //   "setViewMoreDetailsMutation",
    // ]);

    // const setViewMoreDetails = (props) => {
    //   console.log("Checking props val", props.row);
    // };

    // const setViewMoreDetails = (payload) => {
    //   setViewMoreDetailsMutation(payload);
    // };

    return {
      hasEditPermission: true,
      dataStore: "account",
      aditionalActions: true,
      alert: ref(false),
      // setViewMoreDetails,
      showCreateModal,
    };
  },
});
</script>

<style scoped>
.account-form {
  width: 80%;
  max-width: 80%;
}

.account-create-form {
  width: 50%;
  max-width: 50%;
}
</style>
