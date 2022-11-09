import { dateConvert } from "src/boot/dateConvert";

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
        name: "ewi_no",
        align: "left",
        label: "EWI No.",
        field: "ewi_no",
        sortable: true,
      },
      {
        name: "ewi_date",
        align: "left",
        label: "EWI Date",
        field: (row) => dateConvert.format(row.ewi_date),
        sortable: true,
      },
      {
        name: "ewi",
        align: "left",
        label: "EWI Due",
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
        field: (row) => dateConvert.format(row.collected_date),
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
