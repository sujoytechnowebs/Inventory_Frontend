export default function () {
  return {
    // items: {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Gross(Profit/Loss)",
        field: (row) => row?.gross_profit,
        sortable: true,
      },
      {
        name: "name",
        align: "left",
        label: "Expense",
        field: "name",
        sortable: true,
      },
      {
        name: "name",
        align: "left",
        label: "Net(Profit/Loss)",
        field: "name",
        sortable: true,
      },

      // { name: "actions", align: "right", label: "Actions" },
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
      fromDate: "",
      toDate: "",
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
