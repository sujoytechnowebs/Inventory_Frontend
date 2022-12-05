<template>
  <div>
    <q-card-section>
      <QDataTable
        class="no-shadow"
        :data-store="dataStore"
        :hasEditPermission="hasEditPermission"
        :aditionalActions="aditionalActions"
        :customBodySlot="true"
        :columns="columns"
        :filter="filter"
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

        <!-- Test -->

        <template v-slot:customBodySlot="bodyRow">
          <q-tr :props="bodyRow">
            <q-td key="account_name">
              {{ bodyRow.row?.account_name }}
            </q-td>
            <q-td key="phone">
              {{ bodyRow.row?.phone }}
            </q-td>
            <q-td key="email">
              {{ bodyRow.row?.email }}
            </q-td>
            <q-td key="branch_id">
              {{ bodyRow.row?.branch?.name }}
            </q-td>
            <q-td key="type">
              {{ bodyRow.row?.type }}
            </q-td>
            <q-td key="account_no">
              {{ bodyRow.row?.account_no }}
            </q-td>
            <q-td key="ifsc">
              {{ bodyRow.row?.ifsc }}
            </q-td>
            <q-td key="bank_branch">
              {{ bodyRow.row?.bank_branch }}
            </q-td>
            <q-td key="actions" align="right">
              <span v-if="bodyRow.row?.is_nominal === 1">
                <q-btn
                  flat
                  round
                  dense
                  color="accent"
                  icon="edit"
                  class="q-ml-sm"
                  @click="setEditModal(bodyRow.row)"
                >
                  <q-tooltip> Edit </q-tooltip>
                </q-btn>

                <q-btn
                  flat
                  round
                  dense
                  color="red"
                  icon="close"
                  class="q-ml-sm"
                  @click="onClickDelete(bodyRow.row)"
                >
                  <q-tooltip> Delete </q-tooltip>
                </q-btn>
              </span>
            </q-td>
          </q-tr>
        </template>
      </QDataTable>

      <q-dialog v-model="showCreateModal">
        <div :class="$q.platform.is.desktop ? 'account-create-form' : ''">
          <CreateAccount v-bind:modal="true"></CreateAccount>
        </div>
      </q-dialog>
    </q-card-section>

    <q-dialog v-model="showEditModal">
      <div :class="$q.platform.is.desktop ? 'account-form' : ''">
        <EditAccount v-bind:modal="true"></EditAccount>
      </div>
    </q-dialog>

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
import { mapActions } from "vuex";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

const CreateAccount = defineAsyncComponent(() => import("./Create.vue"));
const EditAccount = defineAsyncComponent(() => import("./Edit.vue"));

export default defineComponent({
  name: "AccountIndexPage",

  components: {
    CreateAccount,
    EditAccount,
  },

  computed: {
    ...mapFields("account", ["filter.search", "filter"]),
  },
  setup() {
    const { getGetters, getMutations } = useStoreModule();

    const { showCreateModal } = getGetters("account", ["showCreateModal"]);
    const { showEditModal } = getGetters("account", ["showEditModal"]);

    return {
      hasEditPermission: true,
      dataStore: "account",
      aditionalActions: true,
      alert: ref(false),
      showCreateModal,
      showEditModal,
    };
  },

  methods: {
    ...mapActions("account", ["getItems"]),

    setEditModal(props) {
      this.$store.commit(`${this.dataStore}/setEditModal`, true);
      this.$store.commit(
        `${this.dataStore}/setEditItem`,
        Object.assign({}, props)
      );
      // this.$store
      //   .dispatch(`${this.dataStore}/getItem`, props.user_id)
      //   .then((response) => {
      //     this.$store.commit(`${this.dataStore}/setEditModal`, true);
      //   })
      //   .catch((error) => {});
    },

    onClickDelete(props) {
      console.log("this is props", props);
      this.$q
        .dialog({
          title: `Delete Confirmation`,
          message: "Are you sure to delete this item?",
          ok: {
            label: "Delete",
            unelevated: true,
            color: "red-5",
          },
          cancel: {
            unelevated: true,
            color: "",
            textColor: "black",
          },
          persistent: true,
        })
        .onOk(() => {
          this.loading = false;
          this.$store
            .dispatch(this.dataStore + "/deleteItem", props)
            .then((res) => {
              Tnotify(
                {
                  message: "Item Deleted successfully",
                  type: "positive",
                },
                this
              );
            })
            .catch((err) => {
              Tnotify(
                {
                  message: err.message,
                  type: "negative",
                },
                this
              );
            });
        });
    },
  },
});
</script>

<style scoped>
.account-form {
  width: 50%;
  max-width: 50%;
}

.account-create-form {
  width: 50%;
  max-width: 50%;
}
</style>
