export default function () {
  return {
    // items: {
    columns: [
      {
        name: "name",
        align: "left",
        label: "Particulars",
        field: "name",
        sortable: true,
      },
      {
        name: "name",
        align: "left",
        label: "Amount($)",
        field: "name",
        sortable: true,
      },
      {
        name: "name",
        align: "left",
        label: "Amount($)",
        field: "name",
        sortable: true,
      },

      // { name: "actions", align: "right", label: "Actions" },
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
      address_1: "",
      address_2: "",
      postcode: "",
      city_id: "",
    },
    editItem: {
      name: "",
      code: "",
      address_1: "",
      address_2: "",
      postcode: "",
      city_id: "",
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
