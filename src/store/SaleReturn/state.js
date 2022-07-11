export default function () {
  return {
    // items: {
    columns: [
      {
        name: "customer_id",
        align: "left",
        label: "Customer",
        field: "customer_id",
        sortable: true,
      },
      {
        name: "branch",
        align: "left",
        label: "Branch",
        field: "branch",
        sortable: true,
      },
      {
        name: "date_of_return",
        align: "left",
        label: "Return Date",
        field: "date_of_return",
        sortable: true,
      },
      {
        name: "note",
        align: "left",
        label: "Note",
        field: "note",
        sortable: true,
      },
      {
        name: "payment_method",
        align: "left",
        label: "Payment Method",
        field: "payment_method",
        sortable: true,
      },
      {
        name: "status",
        align: "left",
        label: "Status",
        field: "status",
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
      customer_id: "",
      branch: "",
      date_of_return: "",
      note: "",
      payment_method: "",
      status: "",
      sale_return_details: [],
    },
    editItem: {
      city_name: "",
      state_id: "",
    },
    modals: {
      createItem: false,
      editItem: false,
      productDetailModel: false,
      productModel: false,
    },
  };
}
