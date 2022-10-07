export default function () {
  return {
    // items: {
    columns: [
      {
        name: "code",
        align: "left",
        label: "Group Id",
        field: "code",
        sortable: true,
      },
      {
        name: "name",
        align: "left",
        label: "Name",
        field: "name",
        sortable: true,
      },
      {
        name: "branch_id",
        align: "left",
        label: "Branch",
        field: (row) => row?.branch?.name,
        sortable: true,
      },
      {
        name: "branch_id",
        align: "left",
        label: "Staff Phone No.",
        field: (row) => row?.response?.account?.phone,
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
      village: "",
      pin: "",
      day: "",
      responsible_by: "",
    },
    editItem: {
      id: "",
      name: "",
      code: "",
      branch_id: "",
      address: "",
      village: "",
      pin: "",
      day: "",
      responsible_by: "",
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
