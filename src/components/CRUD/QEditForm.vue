<template>
  <q-card class="no-shadow">
    <q-form ref="editForm" @submit.prevent="submitForm">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h5 q-ml-sm">{{ title }}</div>
        <q-space />
        <q-btn
          v-if="modal"
          icon="close"
          flat
          round
          dense
          @click="setEditModal(false)"
        >
          <q-tooltip> Close </q-tooltip>
        </q-btn>
      </q-card-section>

      <q-card-section>
        <slot></slot>
      </q-card-section>

      <q-separator />

      <q-card-actions class="justify-end q-pa-md q-px-xs-sm">
        <q-btn
          v-if="cancelRoute !== ''"
          icon="clear"
          label="Cancel"
          type="reset"
          color="red-5"
          class="q-ml-sm"
          unelevated
          @click="onClickCancel()"
        />
        <q-btn
          :icon="saveButtonIcon"
          :label="saveButtonLabel"
          type="submit"
          color="blue-5"
          unelevated
          :loading="submitting"
        >
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { mapGetters } from "vuex";
import { Tnotify } from "../../libs/custom.js";
// import { i18n } from 'boot/i18n.js'

export default {
  props: {
    title: String,
    dataStore: {
      type: String,
      default: null,
    },
    saveAction: String,
    cancelRoute: {
      type: String,
      default: "",
    },
    modal: {
      type: Boolean,
      default: false,
    },
    widgets: {
      default: false,
      type: Boolean,
    },
    tableId: String,
    saveButtonIcon: {
      default: "done",
      type: String,
    },
    saveButtonLabel: {
      default: "Save",
      type: String,
    },
    closeModalMutation: {
      default: "setEditModal",
      type: String,
    },
  },
  data() {
    return {
      submitting: false,
      notifyPosition: "top-right",
      validationErrors: {
        fields: [],
      },
    };
  },
  methods: {
    submitForm() {
      this.submitting = true;
      this.$store
        .dispatch(this.saveAction)
        .then((response) => {
          this.submitting = false;

          // this.$refs.editForm.resetValidation()

          Tnotify(
            {
              message: response.data.message,
              type: "positive",
            },
            this
          );
        })
        .catch((error) => {
          this.submitting = false;
          var errors = error.response.data.message;
          this.validationErrors = errors;
          if (error.response.data.errors) {
            var errorMessages = error.response.data.errors;
            var childRefs = this.$slots.default()[0].context.$refs;

            for (var refName in childRefs) {
              var fieldRef = childRefs[refName];
              if (errorMessages[refName]) {
                fieldRef.innerError = true;
                fieldRef.innerErrorMessage = errorMessages[refName][0];
              } else {
                fieldRef.innerError = false;
                fieldRef.innerErrorMessage = "";
              }
            }
          }

          Tnotify(
            {
              message: errors,
              type: "negative",
            },
            this
          );
        });
    },
    onClickCancel() {
      if (this.cancelRoute != "") {
        this.$router.push({ name: this.cancelRoute });
      }
    },
    setEditModal(val) {
      this.$store.commit(`${this.dataStore}/${this.closeModalMutation}`, val);
    },
  },
};
</script>

<style scoped></style>
