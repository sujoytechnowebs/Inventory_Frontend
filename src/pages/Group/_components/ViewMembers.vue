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
          <q-btn flat dense round icon="clear" @click="closeModel(false)" />
        </div>
      </template>
    </QDataTable>
    <q-dialog v-model="showEditModal">
      <div :class="$q.platform.is.desktop ? 'editMember-form' : ''">
        <ViewUser v-bind:modal="true"></ViewUser>
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

const ViewUser = defineAsyncComponent(() => import("./Edit.vue"));

export default defineComponent({
  name: "GroupMemberPage",

  components: {
    ViewUser,
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

    const close = () => {
      setViewMembersModal(false);
    };

    return {
      hasEditPermission: true,
      dataStore: "groupuser",
      aditionalActions: true,
      showEditModal,
      maximizedToggle: ref(true),
      setViewMembersModal,
      close,
    };
  },

  // Close Modal

  methods: {
    closeModel(val) {
      this.$store.commit(`${this.dataStore}/setViewMembersModal`, val);
    },
  },
});
</script>

<style scoped>
.editMember-form {
  width: 60%;
  max-width: 60%;
}
</style>
