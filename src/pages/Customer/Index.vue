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
            Customer Management Table
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
        <template v-slot:customBodySlot="bodyRow">
          <q-tr :props="bodyRow">
            <q-td key="customer_id">
              {{ bodyRow.row?.user_group?.customer_id }}
            </q-td>
            <q-td key="account_name">
              {{ bodyRow.row?.account?.account_name }}
            </q-td>
            <q-td key="email">
              {{ bodyRow.row?.account?.email }}
            </q-td>
            <q-td key="type">
              {{ bodyRow.row?.account?.type }}
            </q-td>
            <q-td key="url">
              <q-btn
                no-caps
                flat
                :href="bodyRow.row?.account?.media?.url"
                target="_blank"
              >
                Aadhaar Card
              </q-btn>
              <q-btn
                no-caps
                flat
                :href="bodyRow.row?.account?.media?.url"
                target="_blank"
              >
                Voter Card
              </q-btn>
            </q-td>
            <q-td key="actions" align="right">
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
            </q-td>
          </q-tr>
        </template>
      </QDataTable>

      <q-dialog v-model="showCreateModal">
        <div :class="$q.platform.is.desktop ? 'customer-form' : ''">
          <CreateUser v-bind:modal="true"></CreateUser>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'customer-form' : ''">
          <EditUser v-bind:modal="true"></EditUser>
        </div>
      </q-dialog>
    </q-card-section>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import { Tnotify } from "../../libs/custom.js";
import useStoreModule from "../../libs/useStoreModule.js";

const EditUser = defineAsyncComponent(() => import("./Edit.vue"));
const CreateUser = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "IndexPage",

  components: {
    EditUser,
    CreateUser,
  },

  computed: {
    ...mapFields("customer", ["filter.search", "filter"]),
  },
  data() {
    const { getGetters } = useStoreModule();
    const { showEditModal } = getGetters("customer", ["showEditModal"]);
    const { showCreateModal } = getGetters("customer", ["showCreateModal"]);

    return {
      hasEditPermission: true,
      dataStore: "customer",
      aditionalActions: false,
      showEditModal,
      showCreateModal,
    };
  },

  methods: {
    ...mapActions("customer", ["getItems"]),

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
.customer-form {
  width: 80%;
  max-width: 80%;
}
</style>
