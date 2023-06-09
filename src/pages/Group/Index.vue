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
      >
        <template v-slot:top>
          <div
            class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-6 col-md-6"
          >
            Group Management Table
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
        <template v-slot:aditionalActions="props">
          <q-btn
            label="View Members"
            no-caps
            flat
            @click="setViewMembers(props.row)"
          />
        </template>
      </QDataTable>
    </q-card-section>

    <q-dialog v-model="showCreateModal">
      <div :class="$q.platform.is.desktop ? 'group-form' : ''">
        <CreateGroup v-bind:modal="true"></CreateGroup>
      </div>
    </q-dialog>

    <q-dialog v-model="showEditModal">
      <div :class="$q.platform.is.desktop ? 'group-form' : ''">
        <EditGroup v-bind:modal="true"></EditGroup>
      </div>
    </q-dialog>
    <q-dialog v-model="showViewMembersModal">
      <div :class="$q.platform.is.desktop ? 'group-form' : ''">
        <ViewMembers></ViewMembers>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import { ref, defineComponent, defineAsyncComponent } from "vue";
import { mapFields } from "vuex-map-fields";
import useStoreModule from "../../libs/useStoreModule.js";

const EditGroup = defineAsyncComponent(() => import("./Edit.vue"));
const CreateGroup = defineAsyncComponent(() => import("./Create.vue"));

const ViewMembers = defineAsyncComponent(() =>
  import("./_components/ViewMembers.vue")
);

export default defineComponent({
  name: "GroupIndexPage",

  components: {
    EditGroup,
    CreateGroup,
    ViewMembers,
  },

  computed: {
    ...mapFields("group", ["filter.search", "filter"]),
  },
  setup() {
    const { getGetters, getMutations } = useStoreModule();
    const { showEditModal } = getGetters("group", ["showEditModal"]);
    const { showCreateModal } = getGetters("group", ["showCreateModal"]);
    const { showViewMembersModal } = getGetters("groupuser", [
      "showViewMembersModal",
    ]);
    const { setViewMembersModal } = getMutations("groupuser", [
      "setViewMembersModal",
    ]);
    const { setModalItem } = getMutations("groupuser", ["setModalItem"]);

    const setViewMembers = (payload) => {
      setViewMembersModal(true);
      setModalItem(payload);
    };

    return {
      hasEditPermission: true,
      dataStore: "group",
      aditionalActions: true,
      showEditModal,
      showCreateModal,
      maximizedToggle: ref(true),
      showViewMembersModal,
      setViewMembers,
    };
  },
});
</script>

<style scoped>
.group-form {
  width: 80%;
  max-width: 80%;
}
</style>
