<template>
  <div>
    <q-card>
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="productcategory/createItem"
        :data-store="dataStore"
        title="Add Category"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Category Name"
              :rules="[
                (val) =>
                  (val && !validationErrors.name > 0) || validationErrors.name
                    ? validationErrors.name
                    : 'Please write the product category name',
              ]"
            >
            </q-input>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <QSearch
              v-model="parent_id"
              label="Parent Category"
              option-value="id"
              option-label="name"
              data-store="productcategory"
              action="getItems"
              :multiple="false"
            ></QSearch>
          </div>
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "ProductsCategoryCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "productcategory",
      validationErrors: ref({}),
    };
  },

  computed: {
    ...mapFields("productcategory", ["newItem.name", "newItem.parent_id"]),
  },
};
</script>
