<template>
  <q-select
    class="full-width"
    outlined
    dense
    clearable
    v-model="search"
    use-input
    input-debounce="0"
    :options="options"
    :loading="loading"
    @virtual-scroll="onScroll"
    @filter="filterFn"
    emit-value
    map-options
    :option-value="optionValue"
    :option-label="optionLabel"
    :use-chips="multiple"
    :multiple="multiple"
  />
</template>

<script>
import {
  nextTick,
  defineComponent,
  ref,
  reactive,
  computed,
  onMounted,
  toRefs,
  defineProps,
  watch,
} from "vue";
import { useStore } from "vuex";

const allOptions = [];
for (let i = 0; i <= 100000; i++) {
  allOptions.push("Opt " + i);
}

const pageSize = 50;
const lastPage = Math.ceil(allOptions.length / pageSize);

export default {
  props: {
    modelValue: {
      type: [String, Object, Array],
      default: "",
    },
    optionValue: {
      type: String,
      default: "",
    },
    optionLabel: {
      type: String,
      default: "",
    },
    dataStore: {
      type: String,
      default: "",
    },
    action: {
      type: String,
      default: "",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    dataType: {
      type: String,
      default: "string",
    },
  },
  setup(props, { emit }) {
    const store = useStore();

    const loading = ref(false);
    const nextPage = ref(2);

    const options = ref([]);

    const pagination = {
      sortBy: "",
      descending: false,
      page: 1,
      direction: null,
      rowsPerPage: 1000,
      totalRecords: 0,
    };

    const search = ref(null);

    const getOptionValues = async () => {
      store
        .dispatch(`${props.dataStore}/${props.action}`, {
          pagination: pagination,
        })
        .then((response) => {
          if (response.data && response.data.data) {
            options.value = response.data.data;
          } else {
            options.value = response.data;
          }

          loading.value = false;
        })
        .catch((err) => {
          loading.value = false;
          console.log("err", err);
        });

      loading.value = false;
    };

    onMounted(() => {
      getOptionValues();
      search.value = props.modelValue;
      // getOptionValues();
    });

    // onRequest(() => {
    //   store
    //     .dispatch(`${props.dataStore}/${props.action}`, {
    //       pagination: pagination,
    //       search: val,
    //     })
    //     .then((response) => {
    //       if (response.data && response.data.data) {
    //         options.value = response.data.data;
    //       } else {
    //         options.value = response.data;
    //       }

    //       loading.value = false;
    //     })
    //     .catch((err) => {
    //       loading.value = false;
    //       console.log("err", err);
    //     });

    //   loading.value = false;
    // });

    // getOptionValues();
    // this.onRequest();

    watch(
      () => {
        return search.value;
      },
      (first, second) => {
        if (props.dataType == "object") {
          var filteredArray = options.value.filter(function (itm) {
            return search.value == itm.id;
          });
          if (filteredArray.length > 0)
            emit("update:modelValue", filteredArray[0]);
        } else {
          emit("update:modelValue", search.value);
        }
      },
      { deep: true }
    );

    return {
      search,
      loading,
      nextPage,
      options,
      // onRequest,
      onScroll({ to, ref }) {
        const lastIndex = options.value.length - 1;

        console.log("lastIndex", lastIndex);
        console.log("to", to);

        if (
          loading.value !== true &&
          nextPage.value < lastPage &&
          to === lastIndex
        ) {
          loading.value = true;

          setTimeout(() => {
            nextPage.value++;
            nextTick(() => {
              ref.refresh();
              loading.value = false;
            });
          }, 500);
        }
      },

      filterFn(val, update) {
        loading.value = true;
        store
          .dispatch(`${props.dataStore}/${props.action}`, {
            pagination: pagination,
            search: val,
          })
          .then((response) => {
            update(() => {
              if (response.data && response.data.data) {
                options.value = response.data.data;
              } else {
                options.value = response.data;
              }
            });
            loading.value = false;
          })
          .catch((err) => {
            loading.value = false;
            console.log("err", err);
          });
        loading.value = false;
      },
    };
  },
};
</script>
