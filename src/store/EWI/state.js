export default function () {
  return {
    // items: {
    columns: [
      {
        name: "loan_id",
        align: "left",
        label: "Loan Application Number",
        field: (row) => row?.loan?.application_no,
        sortable: true,
      },
      {
        name: "user",
        align: "left",
        label: "Customer",
        field: (row) => row?.loan?.group_user?.user?.name,
        sortable: true,
      },
      {
        name: "branch",
        align: "left",
        label: "Branch",
        field: (row) => row?.loan?.branch?.name,
        sortable: true,
      },
      {
        name: "code",
        align: "left",
        label: "Group",
        field: (row) => row?.loan?.group_user?.group?.name,
        sortable: true,
      },
      {
        name: "ewi_date",
        align: "left",
        label: "EWI Date",
        field: "ewi_date",
        sortable: true,
      },
      {
        name: "ewi",
        align: "left",
        label: "EWI Amount",
        field: "ewi",
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
        name: "collected_date",
        align: "left",
        label: "Collected Date",
        field: "collected_date",
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
      status: "",
      ewi_date: "",
      group_code: "",
      trashed: false,
    },
    lastUpdated: "",
    // },
    newItem: {
      city_name: "",
      state_id: "",
    },
    editItem: {
      collected_by: null,
      collected_date: "",
      payment_method: "",
      paymentAmount: null,
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
