export default function () {
  return {
    // items: {
    columns: [
      {
        name: "reference_no",
        align: "left",
        label: "Refernce No.",
        field: "reference_no",
        sortable: true,
      },
      {
        name: "date_of_purchase",
        align: "left",
        label: "Purchase Date",
        field: "date_of_purchase",
        sortable: true,
      },
      {
        name: "vendor_id",
        align: "left",
        label: "Vendor Name",
        field: (row) => row.vendor.name,
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
        name: "total_amount",
        align: "left",
        label: "Amount",
        field: "total_amount",
        sortable: true,
      },
      {
        name: "total_quantity",
        align: "left",
        label: "Total Quantity",
        field: "total_quantity",
        sortable: true,
      },
      {
        name: "status",
        align: "left",
        label: "Status",
        field: "status",
        sortable: true,
      },
      {
        name: "payment_method",
        align: "left",
        label: "Payment Methods",
        field: "payment_method",
        sortable: true,
      },
      { name: "actions", align: "right", label: "Actions" },
    ],
    visibleColumns: [
      "vendor_id,date_of_purchase,amount,total_quantity,note,status",
    ],
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
      vendor_id: null,
      date_of_purchase: "",
      branch_id: null,
      note: "",
      status: "",
      payment_method: "",
      purchase_details: [],
      grand_item_rate_total: 0,
    },
    editItem: {
      vendor_id: null,
      date_of_purchase: "",
      branch_id: null,
      note: "",
      status: "",
      payment_method: "",
      purchase_details: [],
      grand_item_rate_total: 0,
    },
    modals: {
      createItem: false,
      editItem: false,
      productDetailModel: false,
      productModel: false,
    },
  };
}
