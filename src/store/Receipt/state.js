export default function () {
  return {
    // items: {
    columns: [
      {
        name: "by_account",
        align: "left",
        label: "From",
        field: "by_account",
        sortable: true,
      },
      {
        name: "account_name",
        align: "left",
        label: "To",
        field: (row) => row?.to_account?.account_name,
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
        name: "date_of_transaction",
        align: "left",
        label: "Date",
        field: "date_of_transaction",
        sortable: true,
      },
      {
        name: "note",
        align: "left",
        label: "Notes",
        field: "note",
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
      receiptsDetails: [],
    },
    editItem: {
      city_name: "",
      state_id: "",
    },
    modals: {
      createItem: false,
      editItem: false,
      receiptModel: false,
      setReceiptDetailModel: false,
    },
  };
}
