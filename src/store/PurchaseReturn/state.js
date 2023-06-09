import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    // items: {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Vendor Name",
        field: (row) => row?.purchase?.vendor?.name,
        sortable: true,
      },
      {
        name: "date_of_purchase",
        align: "left",
        label: "Purchase Date",
        field: (row) => dateConvert.format(row?.purchase?.date_of_purchase),
        sortable: true,
      },
      {
        name: "date_of_return",
        align: "left",
        label: "Return Date",
        field: (row) => dateConvert.format(row?.date_of_return),
        sortable: true,
      },
      {
        name: "branch_id",
        align: "left",
        label: "Branch",
        field: (row) => row?.purchase?.branch?.name,
        sortable: true,
      },
      {
        name: "total_amount",
        align: "left",
        label: "Amount",
        field: (row) => row?.total_amount,
        sortable: true,
      },
      {
        name: "status",
        align: "left",
        label: "Status",
        field: (row) => row?.purchase?.status,
        sortable: true,
      },
      {
        name: "payment_method",
        align: "left",
        label: "Payment Method",
        field: (row) => row?.purchase?.payment_method,
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
      purchase_id: "",
      date_of_return: "",
      note: "",
      payment_method: "",
      status: "",
      purchase_return_details: [],
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
      productDetailModel: false,
      productModel: false,
    },
  };
}
