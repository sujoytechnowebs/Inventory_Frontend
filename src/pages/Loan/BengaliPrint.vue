<template>
  <!-- <table>
    <thead>
      <tr>
        <th>No.</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row.no">
        <td>{{ row.status }}</td>
        <td>{{ row.status }}</td>
        <td>{{ row.status }}</td>
        <td>{{ row.status }}</td>
      </tr>
    </tbody>
  </table> -->
  <div class="row justify-between">
    <p>আমার পরিবার আসবাবপত্র</p>
    <p>Amar Paribar Furniture</p>
  </div>
  <div class="text-center">
    <b><u>পণ্য ঋণ আবেদন পত্র</u></b>
  </div>
  <br />
  <div class="row justify-between">
    <p>গুপের নাম/ID: {{ getBengaliData.groupCode }}</p>

    <p>সদস্যার বয়স: {{ getBengaliData.customerAge }}</p>
  </div>
  <div class="row justify-between">
    <p>সদস্যার আই ডি: {{ getBengaliData.customer_id }}</p>
    <p>সদস্যার যোগাযোগ নম্বর: {{ getBengaliData.phone }}</p>
  </div>
  <div class="row justify-between">
    <p>সদস্যার নাম: {{ getBengaliData.customer_name }}</p>
    <p>আবেদনের তারিখ: {{ getBengaliData.application_approve_date }}</p>
  </div>
  <div class="row justify-start">
    <p>স্বামী/পিতার নাম: {{ getBengaliData.spouse_parent_name }}</p>
  </div>
  <div>
    এতদ্বারা আমি {{ getBengaliData.customer_name }} ,
    {{ getBengaliData.products_names }} পণ্যের উদ্দেশ্যে
    {{ getBengaliData.productPrice }} টাকার একটি ঋণের জন্য অনুরোধ জানাচ্ছি।
    এতদ্বারা আমি এই ঋণের আবেদন স্বেচ্ছায় করছি এবং প্রদত্ত নিয়মাবলী ও শর্তাবলীতে
    সম্মত আছি এবং নিন্মলখিত ঘোষণাগুলি স্বীকার করছি ,যেগুলি সত্য ও সঠিক।
  </div>
  <br />
  <div>
    আমি ঘোষণা করছি যে আমাদের মোট _________ টি সংস্থা থেকে লোন নেওয়া আছে এবং
    সমস্ত উৎস থেকে বর্তমান মোট ঋণ____________ টাকা। আমি ঘোষণা করছি যে ,নিজের নাম
    তালিকাভুক্ত করার সময়ে সমৃদ্ধি ঘর সংসার কে দেওয়া প্রদত্ত ঠিকানার কোনো
    পরিবর্তন হয়নি। যদি সেরকম কোনো পরিবর্তন ঘটে তবে নতুন ঠিকানার প্রমান জমা দিতে
    আমি সম্মত আছি। আমি SGS কে এই অনুমোদিত ঋণরাশি সমান কিস্তিতে পরিশোধ করার
    প্রতিশ্রুতি দিলাম।
  </div>
  <br />
  <div>
    উপরোক্ত বিষয়গুলি আমার নির্দেশানুযায়ী পূরণ করা হয়েছে এবং ম্যানেজার তা আমাকে
    পড়ে শুনিয়েছে ।
  </div>
  <br />
  <div class="row">
    <div class="col-4">
      <q-input outlined v-model="text" dense />
    </div>
  </div>
  <div>সদস্যার স্বাক্ষর</div>
  <br />
  <div class="text-center">
    <b><u>পণ্য ঋণের অনুমোদন পত্র</u></b>
  </div>
  <br />
  <div>
    এতদ্বারা জানাচ্ছি যে নিন্মলিখিত নিয়মাবলী এবং শর্তাবলী আমাকে স্থানীয় ভাষায়
    বোঝানো হয়েছে এবং স্বেচ্ছায় এই ঋণপ্রাপ্তির জন্য উক্ত নিয়মাবলী ও শর্তাবলীতে
    আমার সম্মতি আছে।
  </div>
  <br />
  <div class="row justify-between">
    <p>প্রোডাক্টের নাম: {{ getBengaliData.products_names }}</p>
    <p>প্রোডাক্ট বিতরণের তারিখ: {{ getBengaliData.date_of_sales }}</p>
  </div>
  <div class="row justify-between">
    <p>প্রোডাক্টের মূল্য: {{ getBengaliData.productPrice }}</p>
    <p>প্রসেসিং ফ্রি: {{ getBengaliData.processing_fees }}</p>
  </div>
  <div class="row justify-between">
    <p>প্রোডাক্টের পার্থক্য রাশি: {{ getBengaliData.down_payment }}</p>
    <p>ঋণের পরিমাণ: {{ getBengaliData.loanAmount }}</p>
  </div>
  <div class="row justify-between">
    <p>কিস্তির পরিমাণ: {{ getBengaliData.ewi_amount }}</p>
    <p>কিস্তির সংখ্যা: {{ getBengaliData.no_of_ewi }}</p>
  </div>
  <div class="row justify-content-start">
    <p>ঋণের ধরন: {{ getBengaliData.sales_method }}</p>
  </div>
  <div class="row justify-between">
    <div class="col-4">
      <q-input outlined v-model="text" dense />
    </div>
    <div class="col-4">
      <q-input outlined v-model="text" dense />
    </div>
  </div>
  <div class="row justify-between">
    <div>সদস্যার স্বাক্ষর</div>
    <div>ম্যানেজার স্বাক্ষর</div>
  </div>
  <br /><br />
  <div>
    <b><u>পণ্য ঋণের আবেদনের ও সম্মতির জন্য নিয়মাবলী এবং শর্তাবলী</u></b>
  </div>
  <br />

  <div class="q-pb-sm">
    1) সমস্ত রকম আর্থিক লেনদেন শুধুমাত্র নির্দিষ্ট কেন্দ্রস্থলে করা হবে।
  </div>

  <div class="q-pb-sm">
    2) ঋণ আবেদন পত্রে প্রক্রিয়াকরণ ফ্রি, ডাউন পেমেন্ট, প্রোডাক্ট এর মূল্য এবং
    অন্যান্য নিয়মাবলী এবং শর্তাবলী স্পষ্টভাবে উল্লেখিত আছে।
  </div>
  <div class="q-pb-sm">
    3) আমি অবগত এবং সম্মত আছি যে, এই ঋণ ব্যবহার করে কেনা পণ্যের ওয়ারেন্টি
    সংশ্লিষ্ট কোম্পানি এবং কেয়ার দ্বারা প্রদত্ত হবে। কোন রূপ অভিযোগ রেজিস্টার
    জন্য আমরা টোল ফ্রি নাম্বারে কল করব।
  </div>
  <div class="q-pb-sm">
    4) ঋণগ্রহীতা যদি ঋণ সম্মতি পত্রে উল্লেখিত কোনো নিয়মাবলী এবং শর্তাবলী ভঙ্গ
    করেন সেক্ষেত্রে SGS যেকোনো সময় বকেয়া ঋণ ফেরৎ/ঋণ শোধ/প্রোডাক্ট ফেরৎ
    ত্বরান্বিত করার দাবির অধিকার রাখে।
  </div>
  <div class="q-pb-sm">
    5) SGS প্রতিটি আর্থিক লেনদেন, সদস্যার উপস্থিতিতে ঋণ কার্ডে এন্ট্রি করে
    প্রাপ্তি স্বীকার করবে।
  </div>
  <div class="q-pb-sm">
    6) আমি /আমরা অঙ্গীকার করছি যে প্রোডাক্টের কিস্তি প্রতি সপ্তাহে নির্দিষ্ট
    স্থানে জমা করব,না করলে ত্বরান্বিত করার অধিকার SGS এর থাকবে।
  </div>
  <div class="q-pb-sm">
    7) SGS ন্যায্য এবং পারদর্শক পণ্যদানের অভ্যাসের প্রতি দায়বদ্ধ।
  </div>
  <div class="q-pb-sm">
    8) আমি অবগত আছি যে অনুমোদিত KYC নথী হিসেবে জমা দিতে হবে,সেগুলি হল
    :(ক)ঠিকানার প্রমান (খ)ছবিসমেত পরিচয় প্রমান (গ )ফটো (ঘ ) স্বামীর/স্ত্রী-র KYC
  </div>
  <div class="q-pb-sm">
    9) ঋণ কার্ডে উল্লেখিত ঋণের কিস্তি এবং উপরোক্ত রাশি ছাড়া সদস্যকে কোন অর্থ
    রাশি বা বস্তু SGS কর্মচারীকে বা অন্য কাউকে দিতে হবে না।
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

export default defineComponent({
  name: "EwiPrintPage",

  setup() {
    const { getGetters } = useStoreModule();

    const { getBengaliData } = getGetters("loan", ["getBengaliData"]);

    onMounted(() => {
      window.print();
    });

    // const data = ref([
    //   {
    //     no: 1,
    //     collectionDate: "2022-11-01",
    //     amount: 1500,
    //     status: "Collected",
    //   },
    //   {
    //     no: 2,
    //     collectionDate: "2022-11-02",
    //     amount: 1500,
    //     status: "Collected",
    //   },
    //   {
    //     no: 3,
    //     collectionDate: "2022-11-03",
    //     amount: 1500,
    //     status: "Collected",
    //   },
    // ]);

    return {
      // data,
      getBengaliData,
    };
  },
});
</script>

<style scoped>
.EWI-form {
  width: 50%;
  max-width: 50%;
}
</style>
