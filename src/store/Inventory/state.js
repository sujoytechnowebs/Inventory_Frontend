export default function () {
  return {
    // items: {
    columns: [
      {
        name: "branch_id",
        align: "left",
        label: "Branch Name",
        field: (row) => row?.branch?.name,
        sortable: true,
      },
      {
        name: "product_id",
        align: "left",
        label: "Product Name",
        field: (row) => row?.product?.name,
        sortable: true,
      },
      {
        name: "quantity",
        align: "left",
        label: "Quantity",
        field: "quantity",
        sortable: true,
      },

      { name: "actions", align: "right", label: "Actions" },
    ],
    visibleColumns: ["branch_id", "product_id", "quantity"],
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
      branch_id: null,
      product_id: null,
      quantity: null,
    },
    editItem: {
      branch_id: null,
      product_id: null,
      quantity: null,
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
