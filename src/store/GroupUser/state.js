export default function () {
  return {
    // items: {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Group Name",
        field: (row) => row?.group?.name,
        sortable: true,
      },
      {
        name: "code",
        align: "left",
        label: "Role",
        field: (row) => row?.group_role,
        sortable: true,
      },
      {
        name: "code",
        align: "left",
        label: "Customer Name",
        field: (row) => row?.user?.name,
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
    newItem: {},
    editItem: {
      group_id: "",
      group_role: "",
    },
    modalItem: {
      id: "",
      name: "",
      code: "",
      branch_id: "",
      address: "",
    },
    modals: {
      createItem: false,
      editItem: false,
      viewMembersModal: false,
    },
  };
}
