<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Category"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Category Name"
              :error-message="$getValidationErrors('name')"
              :error="$hasValidationErrors('name')"
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
              :error-message="$getValidationErrors('parent_id')"
              :error="$hasValidationErrors('parent_id')"
            ></QSearch>
          </div>
        </div>
      </QEditForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "ProductsCategoryEditPage",
  computed: {
    ...mapFields("productcategory", ["editItem.name", "editItem.parent_id"]),
  },
  setup() {
    return {
      modal: true,
      dataStore: "productcategory",
      saveaction: "productcategory/updateItem",
      validationErrors: ref({}),
    };
  },
};
</script>
