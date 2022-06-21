export default function () {
  return {
    // items: {
    columns: [
      {
        name: "Branch_id",
        align: "left",
        label: "Branch Name",
        field: "branch_id",
        sortable: true,
      },
      {
        name: "staff_id",
        align: "left",
        label: "Staff Name",
        field: "staff_id",
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
        name: "Checkout_datetime",
        align: "left",
        label: "Checkout DateTime",
        field: "Checkout_datetime",
        sortable: true,
      },
      {
        name: "Opening_balance",
        align: "left",
        label: "Opening Balance",
        field: "Opening_balance",
        sortable: true,
      },
      {
        name: "Closing_balance",
        align: "left",
        label: "Closing Balance",
        field: "Closing_balance",
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
      staff_id: null,
      checkin_datetime: "",
      Checkout_datetime: "",
      Opening_balance: null,
      Closing_balance: null,
    },
    editItem: {
      branch_id: null,
      staff_id: null,
      checkin_datetime: "",
      Checkout_datetime: "",
      Opening_balance: null,
      Closing_balance: null,
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
