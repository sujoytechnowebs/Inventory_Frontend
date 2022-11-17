<div v-for="(data, index) in purchase_details" :key="data.id">
  <div class="row q-col-gutter-md kk" v-if="(index + 1) % 2 === 0">
    <!-- <span v-if="(index + 1) % 2 === 0" class="kk"> Hello </span> -->
    <div class="product_list q-mt-md">{{ index + 1 }}<span>)</span></div>
    <div class="col-3 col-md-3 col-lg-3">
      <q-input
        ref="product_id"
        v-model="data.product_name"
        dense
        label="Product"
        readonly
      >
      </q-input>
    </div>
    <div class="col-3 col-md-1 col-lg-1">
      <q-input
        @keyup="inputValue(index)"
        ref="item_rate"
        v-model="data.item_rate"
        dense
        label="Cost"
        v-on:keypress="NumbersOnly"
      >
      </q-input>
    </div>
    <div class="col-3 col-md-1 col-lg-1">
      <q-input
        @keyup="inputValue(index)"
        ref="quantity"
        v-model="data.quantity"
        dense
        v-on:keypress="NumbersOnly"
        label="Qty"
      >
      </q-input>
    </div>
    <div class="col-3 col-md-1 col-lg-1">
      <q-input
        dense
        ref="sales"
        v-model="data.sales_rate"
        label="Sale"
        v-on:keypress="NumbersOnly"
      ></q-input>
    </div>
    <div class="col-3 col-md-4 col-lg-4 q-mt-sm purchase_rate">
      = ₹{{ data.total }}
    </div>
    <div class="col-3 col-md-1 col-lg-1">
      <q-btn
        icon="delete"
        color="red"
        size="sm"
        round
        @click="deleteProduct(index)"
      />
    </div>
  </div>

  <div class="row q-col-gutter-md jj" v-if="(index + 1) % 2 === 1">
    <!-- <span v-if="(index + 1) % 2 === 0" class="kk"> Hello </span> -->
    <div class="product_list q-mt-md">{{ index + 1 }}<span>)</span></div>
    <div class="col-3 col-md-3 col-lg-3">
      <q-input
        ref="product_id"
        v-model="data.product_name"
        dense
        label="Product"
        readonly
      >
      </q-input>
    </div>
    <div class="col-3 col-md-1 col-lg-1">
      <q-input
        @keyup="inputValue(index)"
        ref="item_rate"
        v-model="data.item_rate"
        dense
        label="Cost"
        v-on:keypress="NumbersOnly"
      >
      </q-input>
    </div>
    <div class="col-3 col-md-1 col-lg-1">
      <q-input
        @keyup="inputValue(index)"
        ref="quantity"
        v-model="data.quantity"
        dense
        v-on:keypress="NumbersOnly"
        label="Qty"
      >
      </q-input>
    </div>
    <div class="col-3 col-md-1 col-lg-1">
      <q-input
        dense
        ref="sales"
        v-model="data.sales_rate"
        label="Sale"
        v-on:keypress="NumbersOnly"
      ></q-input>
    </div>
    <div class="col-3 col-md-4 col-lg-4 q-mt-sm purchase_rate">
      = ₹{{ data.total }}
    </div>
    <div class="col-3 col-md-1 col-lg-1">
      <q-btn
        icon="delete"
        color="red"
        size="sm"
        round
        @click="deleteProduct(index)"
      />
    </div>
  </div>
</div>
