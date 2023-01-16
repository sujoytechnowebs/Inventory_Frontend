export default function () {
  return {
    // items: {
    columns: [
      {
        name: "productSlNo",
        align: "left",
        label: "Serial No.",
        field: "productSlNo",
        sortable: true,
      },
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
        name: "sale_price",
        align: "left",
        label: "Sale Price",
        field: "sale_price",
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
      sale_price: null,
      product_photo_id: null,
    },
    editItem: {
      name: "",
      category_id: null,
      barcode: "",
      sale_price: null,
      item_description: "",
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
