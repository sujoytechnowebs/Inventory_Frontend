export default function () {
  return {
    // items: {
    columns: [
      {
        name: "customers_id",
        align: "left",
        label: "Customer",
        field: "customers_id",
        sortable: true,
      },
      {
        name: "name",
        align: "left",
        label: "Branch",
        field: (row) => row?.branch?.name,
        sortable: true,
      },
      {
        name: "application_no",
        align: "left",
        label: "Application No.",
        field: "application_no",
        sortable: true,
      },
      {
        name: "application_approved_by",
        align: "left",
        label: "Approved By",
        field: "application_approved_by",
        sortable: true,
      },
      {
        name: "application_approve_date",
        align: "left",
        label: "Date",
        field: "application_approve_date",
        sortable: true,
      },
      {
        name: "ewi_start_date",
        align: "left",
        label: "EWI Start",
        field: "ewi_start_date",
        sortable: true,
      },
      {
        name: "no_of_ewi",
        align: "left",
        label: "EWI Terms",
        field: "no_of_ewi",
        sortable: true,
      },
      {
        name: "ewi_amount",
        align: "left",
        label: "EWI Amount",
        field: "ewi_amount",
        sortable: true,
      },
      {
        name: "status",
        align: "left",
        label: "status",
        field: "status",
        sortable: true,
      },
      {
        name: "document_type",
        align: "left",
        label: "Document",
        field: (row) => row?.loan_document?.document_type,
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
      customers_id: null,
      branch_id: null,
      application_received_date: "",
      application_received_by: "",
      ewi_start_date: "",
      loan_amount: null,
      processing_fees: null,
      down_payment: null,
      status: "",
      media_id: null,
      document_type: "",
      type: "",
    },
    editItem: {
      customers_id: null,
      branch_id: null,
      application_received_date: "",
      application_received_by: "",
      ewi_start_date: "",
      loan_amount: null,
      processing_fees: null,
      down_payment: null,
      status: "",
      media_id: null,
      document_type: "",
      type: "",
    },
    verifyItem: {
      status: "",
      application_received_by: "",
      application_received_date: "",
      application_verified_by: null,
      application_verified_date: null,
      branch_id: null,
      customers_id: null,
      down_payment: null,
      ewi_amount: null,
      ewi_start_date: null,
      id: null,
      loan_amount: null,
      no_of_ewi: "",
      processing_fees: null,
    },

    approveItem: {
      status: "",
      application_approve_date: "",
      application_approved_by: "",
      application_received_by: "",
      application_received_date: "",
      application_verified_by: null,
      application_verified_date: null,
      branch_id: null,
      customers_id: null,
      down_payment: null,
      ewi_amount: null,
      ewi_start_date: null,
      id: null,
      loan_amount: null,
      no_of_ewi: "",
      processing_fees: null,
    },

    disburseItem: {},

    modals: {
      createItem: false,
      editItem: false,
      verify: false,
      approve: false,
      disburse: false,
    },
  };
}
