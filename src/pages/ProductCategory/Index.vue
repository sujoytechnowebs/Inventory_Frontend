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
            Product Category Table
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
      </QDataTable>

      <q-dialog v-model="showCreateModal">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <CreateProductCategory v-bind:modal="true"></CreateProductCategory>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? '' : ''">
          <EditProductCategory v-bind:modal="true"></EditProductCategory>
        </div>
      </q-dialog>
    </q-card-section>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

const EditProductCategory = defineAsyncComponent(() => import("./Edit.vue"));
const CreateProductCategory = defineAsyncComponent(() =>
  import("./Create.vue")
);

export default defineComponent({
  name: "ProductCategoryIndexPage",

  components: {
    EditProductCategory,
    CreateProductCategory,
  },

  computed: {
    ...mapFields("productcategory", ["filter.search", "filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();
    const { showEditModal } = getGetters("productcategory", ["showEditModal"]);
    const { showCreateModal } = getGetters("productcategory", [
      "showCreateModal",
    ]);

    return {
      hasEditPermission: true,
      dataStore: "productcategory",
      aditionalActions: false,
      showEditModal,
      showCreateModal,
    };
  },
});
</script>

<style scoped></style>
