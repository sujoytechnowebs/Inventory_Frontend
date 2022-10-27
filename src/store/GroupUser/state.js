export default function () {
  return {
    // items: {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Group Name",
        field: (row) => row?.group_name,
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
        field: (row) => row?.customer_name,
        sortable: true,
      },
      {
        name: "phone",
        align: "left",
        label: "Phone Number",
        field: (row) => row?.phone,
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
      id: "",
      user_id: "",
      group_name: "",
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
