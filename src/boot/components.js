import QCreateForm from "components/CRUD/QCreateForm.vue";
import QEditForm from "components/CRUD/QEditForm.vue";
// import QEditFormforCreate from "components/CRUD/QEditFormforCreate.vue";
import QDataTable from "components/CRUD/QDataTable.vue";
// import QAdvanceDataTable from "components/CRUD/QAdvanceDataTable.vue";
import QSearch from "components/CRUD/QSearch.vue";

export default ({ app }) => {
  // app.component("QAdvanceDataTable", QAdvanceDataTable);
  app.component("QCreateForm", QCreateForm);
  app.component("QDataTable", QDataTable);
  app.component("QEditForm", QEditForm);
  app.component("QSearch", QSearch);
  // app.component("QEditFormforCreate", QEditFormforCreate);
};
