export default function () {
  return {
    // items: {
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
      {
        name: "role",
        align: "left",
        label: "Role",
        field: (row) => row.user_role.role.role,
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
      password: "",
      account_name: "",
      phone: null,
      city_id: null,
      address_1: "",
      address_2: "",
      postcode: null,
      aadhar_media_id: null,
      account_no: null,
      ifsc: "",
      branch: "",
      branch_id: "",
      aadhar_card_no: "",
      bank_branch: "",
      spouse_parent_name: "",
      occupation: "",
      house: "",
      monthly_income: "",
      group_id: "",
      group_role: "",
      DOB: "",
      aadhar_card_no: "",
      opening_balance: "",
      opening_balance_type: "",
      voter_card_no: null,
    },
    editItem: {
      name: "",
      email: "",
      role_id: null,
      password: "",
      account_name: "",
      phone: null,
      city_id: null,
      address_1: "",
      address_2: "",
      postcode: null,
      aadhar_media_id: null,
      account_no: null,
      ifsc: "",
      branch: "",
      branch_id: "",
      aadhar_card_no: "",
      bank_branch: "",
      spouse_parent_name: "",
      occupation: "",
      house: "",
      monthly_income: "",
      group_id: "",
      group_role: "",
      DOB: "",
      aadhar_card_no: "",
      opening_balance: "",
      opening_balance_type: "",
      voter_card_no: null,
    },
    modals: {
      createItem: false,
      editItem: false,
    },
  };
}
