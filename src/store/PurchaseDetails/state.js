export default function () {
  return {
    // items: {
    columns: [
      {
        name: "product_id",
        align: "left",
        label: "Product",
        field: (row) => row?.product?.category?.name,
        sortable: true,
      },
      {
        name: "item_rate",
        align: "left",
        label: "Rate",
        // field: "item_rate",
        field: (row) => row?.purchase_details?.item_rate,
        sortable: true,
      },
      {
        name: "discount",
        align: "left",
        label: "Discount",
        field: "discount",
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
        name: "tax_class_id",
        align: "left",
        label: "Tax",
        field: "tax_class_id",
        sortable: true,
      },
      { name: "actions", align: "right", label: "Actions" },
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
    },
  };
}
