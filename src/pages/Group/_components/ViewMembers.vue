<template>
  <q-card>
    <QDataTable
      class="no-shadow"
      :data-store="dataStore"
      :hasEditPermission="hasEditPermission"
      :aditionalActions="aditionalActions"
      :columns="columns"
      :filter="filter"
      :canAdd="false"
      :canDelete="false"
    >
      <template v-slot:top>
        <div
          class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-6 col-md-6"
        >
          List of Members
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 row justify-end items-center">
          <div class="col-12">
            <q-input
              outlined
              dense
              debounce="300"
              v-model="filter.search"
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
    </QDataTable>
    <q-dialog v-model="showEditModal">
      <div :class="$q.platform.is.desktop ? 'editMember-form' : ''">
        <EditUser v-bind:modal="true"></EditUser>
      </div>
    </q-dialog>
  </q-card>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../../libs/useStoreModule.js";

const EditUser = defineAsyncComponent(() => import("./Edit.vue"));

export default defineComponent({
  name: "GroupMemberPage",

  components: {
    EditUser,
  },

  computed: {
    ...mapFields("groupuser", ["filter"]),
  },
  setup() {
    const { getGetters, getMutations } = useStoreModule();
    const { showEditModal } = getGetters("groupuser", ["showEditModal"]);
    const { setViewMembersModal } = getMutations("group", [
      "setViewMembersModal",
    ]);

    return {
      hasEditPermission: true,
      dataStore: "groupuser",
      aditionalActions: true,
      showEditModal,
      maximizedToggle: ref(true),
      setViewMembersModal,
    };
  },
});
</script>

<style scoped>
.editMember-form {
  width: 60%;
  max-width: 60%;
}
</style>
