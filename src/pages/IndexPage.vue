<template>
  <div class="q-pa-sm">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4 col-lg-4">
        <router-link to="/groups" class="link_line">
          <q-card class="card_height card_hover" flat bordered>
            <q-card-section
              ><div class="balance_head flex justify-center q-pt-xl">
                <q-icon class="icon-size" name="groups" />
              </div>
              <div class="text-center balance_field flex justify-center">
                Groups
              </div></q-card-section
            >
          </q-card>
        </router-link>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <router-link to="/customers" class="link_line">
          <q-card class="card_height card_hover" flat bordered>
            <q-card-section
              ><div class="balance_head flex justify-center q-pt-xl">
                <q-icon class="icon-size" name="person_2" />
              </div>
              <div class="text-center balance_field flex justify-center">
                Customer
              </div></q-card-section
            >
          </q-card>
        </router-link>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <router-link to="/purchase" class="link_line">
          <q-card class="card_height card_hover" flat bordered>
            <q-card-section
              ><div class="balance_head flex justify-center q-pt-xl">
                <q-icon class="icon-size" name="shopping_bag" />
              </div>
              <div class="text-center balance_field flex justify-center">
                Purchase
              </div></q-card-section
            >
          </q-card>
        </router-link>
      </div>

      <div class="col-12">
        <q-card class="card_height flex items-center justify-center" flat>
          <q-card-section>
            <p class="date_style">{{ dayOfWeek }} {{ monthOfYear }}</p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4 col-lg-4">
        <router-link to="/sale" class="link_line">
          <q-card class="card_height card_hover" flat bordered>
            <q-card-section
              ><div class="balance_head flex justify-center q-pt-xl">
                <q-icon class="icon-size" name="add_shopping_cart" />
              </div>
              <div class="text-center balance_field flex justify-center">
                Sale
              </div></q-card-section
            >
          </q-card>
        </router-link>
      </div>

      <div class="col-12 col-md-4 col-lg-4">
        <router-link to="/ewi-details" class="link_line">
          <q-card class="card_height card_hover" flat bordered>
            <q-card-section
              ><div class="balance_head flex justify-center q-pt-xl">
                <q-icon class="icon-size" name="currency_rupee" />
              </div>
              <div class="text-center balance_field flex justify-center">
                EWI
              </div></q-card-section
            >
          </q-card>
        </router-link>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <router-link to="/stock-holder" class="link_line">
          <q-card class="card_height card_hover" flat bordered>
            <q-card-section
              ><div class="balance_head flex justify-center q-pt-xl">
                <q-icon class="icon-size" name="currency_exchange" />
              </div>
              <div class="text-center balance_field flex justify-center">
                Investor
              </div></q-card-section
            >
          </q-card>
        </router-link>
      </div>
    </div>
  </div>
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

.link_line {
  text-decoration: none !important;
  color: rgb(39, 38, 38);
  font-weight: 500;
  font-size: 1.2rem;
}

.card_height {
  min-height: 200px;
}

.card_hover:hover {
  background-color: #05284b;
  color: aliceblue;
}

.date_style {
  font-size: 1.8rem;
}

.icon-size {
  font-size: 2.5rem;
}
</style>
