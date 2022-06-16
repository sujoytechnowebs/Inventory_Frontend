export default function () {
  return {
    // items: {
    testDemo: "www",
    columns: [
      {
        name: "name",
        align: "left",
        label: "Full Name",
        field: "name",
        sortable: true,
      },
      {
        name: "email",
        align: "left",
        label: "Email",
        field: "email",
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
      email: "",
      role_id: null,
    },
    editItem: {
      name: "",
      email: "",
      role_id: null,
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
