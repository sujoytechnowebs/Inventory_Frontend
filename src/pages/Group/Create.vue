<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="group/createItem"
        :data-store="dataStore"
        title="Add Groups"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Group Name"
              @keydown="checkKeyDownAlphaNumeric($event)"
              :error-message="$getValidationErrors('name')"
              :error="$hasValidationErrors('name')"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="branch_id"
              label="Branch"
              option-value="id"
              option-label="name"
              data-store="branch"
              action="getItems"
              :multiple="false"
              :error-message="$getValidationErrors('branch_id')"
              :error="$hasValidationErrors('branch_id')"
            ></QSearch>
          </div>
          <div class="col-12"></div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <p class="address_head">Please Write The Address:</p>

          <q-field
            :error-message="$getValidationErrors('address')"
            :error="$hasValidationErrors('address')"
          >
            <q-editor v-model="address" class="full-width"></q-editor>
          </q-field>
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { mapGetters } from "vuex";

export default {
  name: "GroupCreatePage",
  data() {
    return {
      modal: ref(true),
      dataStore: "group",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },

  created() {
    this.branch_id = this.getActiveBranch;
  },

  computed: {
    ...mapFields("group", [
      "newItem.name",
      "newItem.branch_id",
      "newItem.address",
    ]),
    ...mapGetters("auth", ["getActiveBranch"]),
  },

  methods: {
    checkKeyDownAlphaNumeric(event) {
      if (!/[a-zA-Z\s]/.test(event.key)) {
        this.ignoredValue = event.key ? event.key : "";
        event.preventDefault();
      }
    },
  },
};
</script>

<style scoped>
.address_head {
  font-size: 1rem;
  font-weight: 600;
}
</style>
