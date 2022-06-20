export default function () {
  return {
    // items: {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Category Name",
        field: "name",
        sortable: true,
      },
      {
        name: "parent_id",
        align: "left",
        label: "Parent Category",
        field: (row) => row?.parent_info?.name,
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
      parent_id: null,
    },
    editItem: {
      name: "",
      parent_id: null,
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
