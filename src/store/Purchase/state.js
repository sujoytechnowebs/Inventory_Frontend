export default function () {
  return {
    // items: {
    columns: [
      {
        name: "vendor_id",
        align: "left",
        label: "Vendor Name",
        field: (row) => row.vendor.name,
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
        name: "amount",
        align: "left",
        label: "Amount",
        field: "amount",
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
      amount: "",
      total_quantity: null,
      note: "",
      status: "",
    },
    editItem: {
      vendor_id: null,
      date_of_purchase: "",
      amount: "",
      total_quantity: null,
      note: "",
      status: "",
    },
    modals: {
      createItem: false,
      editItem: false,
      productDetailModel: false,
      productModel: false,
    },
  };
}
