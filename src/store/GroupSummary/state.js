import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    // items: {
    columns: [
      {
        name: "customer_id",
        align: "left",
        label: "Id",
        field: "customer_id",
        sortable: true,
      },
      {
        name: "account_name",
        align: "left",
        label: "Name",
        field: "account_name",
        sortable: true,
      },
      {
        name: "ewi_start_date",
        align: "left",
        label: "Date",
        field: (row) => dateConvert.format(row.ewi_start_date),
        sortable: true,
      },
      {
        name: "loan_amount",
        align: "left",
        label: "Loan Amount",
        field: "loan_amount",
        sortable: true,
      },
      {
        name: "down_payment",
        align: "left",
        label: "Down Payment",
        field: "down_payment",
        sortable: true,
      },
      {
        name: "Processing_fees",
        align: "left",
        label: "Processing Fees",
        field: "Processing_fees",
        sortable: true,
      },
      {
        name: "payment",
        align: "left",
        label: "Payment",
        field: "payment",
        sortable: true,
      },
      {
        name: "due",
        align: "left",
        label: "Due",
        field: "due",
        sortable: true,
      },
    ],
    visibleColumns: ["state_name", "actions"],
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
      groupId: "",
      groupCode: "",
      trashed: false,
    },
    lastUpdated: "",
    // },
    newItem: {
      state_name: "",
    },
    editItem: {
      state_name: "",
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
