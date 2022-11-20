<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PrintLayout",

  computed: {
    siteName() {
      return process.env.SITE_NAME;
    },
  },

  setup() {
    const data = ref([
      {
        no: 1,
        collectionDate: "2022-11-01",
        amount: 1500,
        status: "Collected",
      },
      {
        no: 2,
        collectionDate: "2022-11-02",
        amount: 1500,
        status: "Collected",
      },
      {
        no: 3,
        collectionDate: "2022-11-03",
        amount: 1500,
        status: "Collected",
      },
    ]);

    return {
      data,
    };
  },
});
</script>

<style scoped>
.company_navbar {
  text-decoration: none;
  color: aliceblue;
}

.admin_font_size {
  font-size: 1.2rem;
}

.hide-diff-paltform {
  display: none;
}

.drawer-branch-search {
  width: 85% !important;
  margin-left: 16px !important;
}

.remove-width
  .q-field__inner
  .q-field__control
  .q-field__control-container
  .q-field__native
  .q-field__input {
  min-width: 0 !important;
}

.profile_head {
  font-weight: 500;
  font-size: 1rem;
}
</style>
