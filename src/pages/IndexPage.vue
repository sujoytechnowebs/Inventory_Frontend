<template>
  <q-page class="flex flex-center bg-grey-3">
    <q-card flat class="increase flex flex-center">
      <q-card-section class="text-center">
        <p class="header">Wed 17,</p>
        <p class="sub-header text-weight-medium">September 2022</p>
      </q-card-section>
      <q-card-section class="header text-weight-light">
        <p q-pl-lg>Welcome Amar Furniture</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style scoped>
.header {
  font-size: 1.9rem;
}
.sub-header {
  font-size: 1.2rem;
}

.increase {
  width: 80vh;
}
</style>
