export default function () {
  return {
    // items: {
    columns: [
      {
        name: "loan_id",
        align: "left",
        label: "Loan Application Number",
        sortable: true,
      },
      {
        name: "user",
        align: "left",
        label: "Customer",
        sortable: true,
      },
      {
        name: "branch",
        align: "left",
        label: "Branch",
        sortable: true,
      },
      {
        name: "ewi_no",
        align: "left",
        label: "EMI No.",
        sortable: true,
      },
      {
        name: "ewi_date",
        align: "left",
        label: "EMI Date",
        sortable: true,
      },
      {
        name: "ewi",
        align: "left",
        label: "EMI Due",
        sortable: true,
      },
      {
        name: "status",
        align: "left",
        label: "Status",
        sortable: true,
      },
      {
        name: "collected_date",
        align: "left",
        label: "Collected Date",
        sortable: true,
      },
      // Test 1
      {
        name: "loanAmount",
        align: "left",
        label: "Loan Amount",
        sortable: true,
      },
      { name: "payment", align: "center", label: "Payment" },
      { name: "invoice", align: "right", label: "Invoice" },
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
      status: "",
      ewi_date: "",
      group_code: "",
      groupId: "",
      date: "",
      trashed: false,
      groupCode: "",
    },
    lastUpdated: "",
    // },
    newItem: {},
    editItem: {},
    printableData: {},
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
