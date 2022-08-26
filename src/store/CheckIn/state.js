export default function () {
  return {
    // items: {
    columns: [
      {
        name: "Branch_id",
        align: "left",
        label: "Branch Name",
        field: (row) => row.branch.name,
        sortable: true,
      },
      {
        name: "checkin_datetime",
        align: "left",
        label: "Checkin DateTime",
        field: "checkin_datetime",
        sortable: true,
      },
      {
        name: "checkout_datetime",
        align: "left",
        label: "Checkout DateTime",
        field: "checkout_datetime",
        sortable: true,
      },
      {
        name: "opening_balance",
        align: "left",
        label: "Opening Balance",
        field: "opening_balance",
        sortable: true,
      },
      {
        name: "closing_balance",
        align: "left",
        label: "Closing Balance",
        field: "closing_balance",
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
      branch_id: null,
      opening_balance: null,
    },
    editItem: {
      branch_id: null,
      opening_balance: null,
      closing_balance: null,
      checkin_datetime: null,
      checkout_datetime: null,
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
