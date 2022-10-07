export default function () {
  return {
    // items: {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Product",
        field: (row) => row?.product?.name,
        sortable: true,
      },
      {
        name: "item_rate",
        align: "left",
        label: "Cost Price",
        field: "item_rate",
        sortable: true,
      },
      {
        name: "quantity",
        align: "left",
        label: "Quantity",
        field: "quantity",
        sortable: true,
      },
      {
        name: "return_quantity",
        align: "left",
        label: "Return Quantity",
        field: "return_quantity",
        sortable: true,
      },
      {
        name: "sales_rate",
        align: "left",
        label: "Sales Price",
        field: "sales_rate",
        sortable: true,
      },
    ],
    visibleColumns: ["name"],
    data: [],
    pagination: {
      sortBy: "",
      descending: false,
      page: 1,
      direction: null,
      rowsPerPage: 10,
      totalRecords: 0,
    },
    filter: {
      search: "",
      trashed: false,
    },
    lastUpdated: "",
    // },
    viewProductsDetails: {},
    newItem: {
      name: "",
      code: "",
      address_1: "",
      address_2: "",
      postcode: "",
      city_id: "",
    },
    editItem: {
      name: "",
      code: "",
      address_1: "",
      address_2: "",
      postcode: "",
      city_id: "",
    },
    modals: {
      createItem: false,
      editItem: false,
      viewProductsModal: false,
    },
  };
}
