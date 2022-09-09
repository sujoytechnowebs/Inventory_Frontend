export default function () {
  return {
    // items: {
    columns: [
      {
        name: "customer_id",
        align: "left",
        label: "Customer",
        field: (row) => row.sales_info.customer.name,
        sortable: true,
      },
      {
        name: "branch",
        align: "left",
        label: "Branch",
        field: (row) => row.sales_info.branch.name,
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
        field: (row) => row.sales_info.status,
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
      sales_id: "",
      date_of_return: "",
      note: "",
      payment_method: "",
      status: "",
      salesReturnDetails: [],
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
