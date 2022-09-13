export default function () {
  return {
    // items: {
    columns: [
      {
        name: "account_name",
        align: "left",
        label: "From",
        field: (row) => row?.by_account?.account_name,
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
        name: "reference_no",
        align: "left",
        label: "Reference No.",
        field: "reference_no",
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
        label: "Purpose",
        field: "note",
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
