export default function () {
  return {
    // items: {
    columns: [
      {
        name: "customer_id",
        align: "left",
        label: "Customer",
        field: (row) => row.customer.name,
        sortable: true,
      },
      {
        name: "branch_id",
        align: "left",
        label: "Branch",
        field: (row) => row.branch.name,
        sortable: true,
      },
      {
        name: "date_of_sales",
        align: "left",
        label: "Date of Sale",
        field: "date_of_sales",
        sortable: true,
      },
      {
        name: "total_amount",
        align: "left",
        label: "Amount",
        field: "total_amount",
        sortable: true,
      },
      {
        name: "total_quantity",
        align: "left",
        label: "Quantity",
        field: "total_quantity",
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
        name: "note",
        align: "left",
        label: "Note",
        field: "note",
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
      customer_id: null,
      branch_id: null,
      date_of_sales: "",
      payment_method: "",
      note: "",
      status: "",
      salesDetails: [],
    },
    editItem: {
      name: "",
      code: "",
      branch_id: "",
      address: "",
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}