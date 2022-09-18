export default function () {
  return {
    // items: {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Name",
        field: "name",
        sortable: true,
      },
      {
        name: "code",
        align: "left",
        label: "Code",
        field: "code",
        sortable: true,
      },
      {
        name: "branch_id",
        align: "left",
        label: "Branch",
        field: (row) => row?.branch?.name,
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
      name: "",
      code: "",
      branch_id: "",
      address: "",
    },
    editItem: {
      id: "",
      name: "",
      code: "",
      branch_id: "",
      address: "",
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
