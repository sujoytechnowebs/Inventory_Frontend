export default function () {
  return {
    // items: {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Product Name",
        field: "name",
        sortable: true,
      },
      {
        name: "category_id",
        align: "left",
        label: "Category",
        field: (row) => row.category.name,
        sortable: true,
      },
      {
        name: "barcode",
        align: "left",
        label: "BarCode",
        field: "barcode",
        sortable: true,
      },
      {
        name: "item_description",
        align: "left",
        label: "Description",
        field: "item_description",
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
      name: "",
      category_id: null,
      barcode: "",
      item_description: "",
    },
    editItem: {
      name: "",
      category_id: null,
      barcode: "",
      item_description: "",
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
