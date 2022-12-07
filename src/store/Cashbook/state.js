import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    // items: {
    columns: [
      {
        name: "opening_bal",
        align: "left",
        label: "Opening Balance",
        field: "opening_bal",
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
        name: "account_name",
        align: "left",
        label: "Account Name",
        field: "account_name",
        sortable: true,
      },
      {
        name: "debit_amt",
        align: "left",
        label: "Debit",
        field: "debit_amt",
        sortable: true,
      },
      {
        name: "credit_amt",
        align: "left",
        label: "Credit",
        field: "credit_amt",
        sortable: true,
      },
      {
        name: "available_bal",
        align: "left",
        label: "Available",
        field: "available_bal",
        sortable: true,
      },
      {
        name: "note",
        align: "left",
        label: "Note",
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
      account_type: "",
      fromDate: "",
      toDate: "",
      branch_id: null,
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
