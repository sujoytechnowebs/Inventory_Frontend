export default function () {
  return {
    // items: {
    columns: [
      {
        name: "investorAccountId",
        align: "left",
        label: "Investor",
        field: (row) => row.account.account_name,
        sortable: true,
      },
      {
        name: "toAccount",
        align: "left",
        label: "From",
        field: (row) => row.to_account.account_name,
        sortable: true,
      },
      {
        name: "action_name",
        align: "left",
        label: "Type",
        field: "action_name",
        sortable: true,
      },
      {
        name: "date",
        align: "left",
        label: "Date",
        field: "date",
        sortable: true,
      },
      {
        name: "amount",
        align: "left",
        label: "Amount",
        field: "amount",
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
      investorAccountId: null,
      action_name: "",
      date: "",
      amount: null,
      toAccount: null,
    },
    editItem: {
      investorAccountId: null,
      action_name: "",
      date: "",
      amount: null,
      toAccount: null,
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
