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
  created() {
    this.$clearValidationErrors();
  },
  methods: {
    submitForm() {
      this.submitting = true;
      this.$store
        .dispatch(this.saveAction)
        .then((response) => {
          this.submitting = false;
          this.$clearValidationErrors();
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

          let formatted_message = "";
          if (error.response.data.message) {
            formatted_message = error.response.data.message;
          } else {
            formatted_message = error.response.data.error;
          }

          let errorMessages = {};
          if (error.response.data.errors) {
            errorMessages = error.response.data.errors;
          }
          this.$setValidationErrors(errorMessages);
          this.$Qnotify({
            message: formatted_message,
            type: "negative",
          });
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
