<template>
  <q-page class="flex flex-center dashboard-bg">
    <q-card flat class="card-size flex flex-center bg-grey-1">
      <q-card-section>
        <p class="header text-grey-9 text-center q-ma-none">{{ dayOfWeek }}</p>
        <p class="sub-header q-ma-none text-weight-medium text-grey-9">
          {{ monthOfYear }}
        </p>
      </q-card-section>
      <q-card-section class="header">
        <p class="q-ma-none text-weight-light text-grey-9">Welcome Here</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import moment from "moment";

export default {
  name: "IndexPage",

  computed: {
    dayOfWeek() {
      return moment().format("ddd DD");
    },
    monthOfYear() {
      return moment().format("MMMM YYYY");
    },
  },
};
</script>

<style scoped>
.header {
  font-size: 1.9rem;
}
.sub-header {
  font-size: 1.2rem;
}

.card-size {
  width: 80vh;
}

.dashboard-bg {
  background-image: linear-gradient(113deg, rgb(255 255 255), rgb(239 239 239));
}
</style>
