export default function () {
  return {
    // items: {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Tax Name",
        field: "name",
        sortable: true,
      },
      {
        name: "SGST",
        align: "left",
        label: "SGST",
        field: "SGST",
        sortable: true,
      },
      {
        name: "CGST",
        align: "left",
        label: "CGST",
        field: "CGST",
        sortable: true,
      },
      {
        name: "IGST",
        align: "left",
        label: "IGST",
        field: "IGST",
        sortable: true,
      },
      { name: "actions", align: "right", label: "Actions" },
    ],
    visibleColumns: ["name,SGST,CGST,IGST"],
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
      SGST: null,
      CGST: null,
      IGST: null,
    },
    editItem: {
      name: "",
      SGST: null,
      CGST: null,
      IGST: null,
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
