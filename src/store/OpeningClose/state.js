export default function () {
  return {
    // items: {
    columns: [
      {
        name: "state_name",
        align: "left",
        label: "State Name",
        field: "state_name",
        sortable: true,
      },
      { name: "actions", align: "right", label: "Actions" },
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
