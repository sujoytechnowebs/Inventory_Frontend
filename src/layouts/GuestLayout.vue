<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="login_background_colour">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.login_background_colour {
  background-image: linear-gradient(113deg, rgb(255, 0, 118), rgb(86, 0, 255));
}
</style>
