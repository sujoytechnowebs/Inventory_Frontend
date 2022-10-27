import { dateConvert } from "src/boot/dateConvert";

export default function () {
  return {
    // items: {
    columns: [
      {
        name: "date",
        align: "left",
        label: "Date",
        field: (row) => dateConvert.format(row?.date),
        sortable: true,
      },
      {
        name: "product_id",
        align: "left",
        label: "Product Name",
        field: (row) => row?.inventoty_product?.product?.name,
        sortable: true,
      },
      {
        name: "from_branch_id",
        align: "left",
        label: "From",
        field: (row) => row.from_branch.branch.name,
        sortable: true,
      },
      {
        name: "to_branch_id",
        align: "left",
        label: "To",
        field: (row) => row.to_branch.name,
        sortable: true,
      },
      {
        name: "quantity",
        align: "left",
        label: "Quantity",
        field: "quantity",
        sortable: true,
      },
      { name: "actions", align: "right", label: "Actions" },
    ],
    visibleColumns: [
      "name",
      "username",
      "email",
      "password",
      "role_id",
      "actions",
    ],
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
      product_id: null,
      date: "",
      from_branch_id: null,
      to_branch_id: null,
      quantity: null,
    },
    editItem: {
      product_id: null,
      date: "",
      from_branch_id: null,
      to_branch_id: null,
      quantity: null,
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
