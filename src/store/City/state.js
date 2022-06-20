export default function () {
  return {
    // items: {
    columns: [
      {
        name: "city_name",
        align: "left",
        label: "City",
        field: "city_name",
        sortable: true,
      },
      {
        name: "state_name",
        align: "left",
        label: "State",
        field: (row) => row.states.state_name,
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
      city_name: "",
      state_id: "",
    },
    editItem: {
      city_name: "",
      state_id: "",
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
