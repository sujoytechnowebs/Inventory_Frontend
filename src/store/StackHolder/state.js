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
        name: "address_1",
        align: "left",
        label: "Address 1",
        field: "address_1",
        sortable: true,
      },
      {
        name: "address_2",
        align: "left",
        label: "Address 2",
        field: "address_2",
        sortable: true,
      },
      {
        name: "postcode",
        align: "left",
        label: "PostCode",
        field: "postcode",
        sortable: true,
      },
      {
        name: "city_name",
        align: "left",
        label: "City",
        field: (row) => row.cities.city_name,
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
