<template lang="pug">
q-btn(label="Add Skills" color="blue-14" @click="setSkillModal(true)" size="sm")
  q-dialog(v-model="showSkillModal" full-height full-width)
    q-card.q-pa-none
      QCreateForm(
        title="Add Skills"
        :modal="modal"
        :widgets="true"
        :data-store="dataStore"
        saveAction="Profile/updateProfileSkills"
        closeRoute="showHideSkillModal")
        div.row
          div.col-sm-4.col-md-4.col-lg-4.col-xl-4.col-12.q-pa-none
            q-list.bordered.separator
              q-item(q-py-none clickable v-for="areaExpertise in getAreaExpertises" @click="onSelectExpertise(areaExpertise._id)")
                q-item-section {{ areaExpertise.field_name }}
          div.col-sm-4.col-md-4.col-lg-4.col-xl-4.col-12.q-pa-none
            q-list.bordered.separator(v-if="getSkills.length > 0")
              q-item(clickable v-for="skill in getSkills" :key="skill._id" v-ripple)
                q-item-section {{ skill.name }}
          div.col-sm-4.col-md-4.col-lg-4.col-xl-4.col-12.q-pa-none
            q-input(ref="skills"
              v-model="skills"
              use-input
              multiple
              use-chips
              hint
              dense
              emit-value
              map-options
              outlined
              :rules="[ (val) => (val && !validationErrors.skills > 0) || validationErrors.skills ? validationErrors.skills : 'Please select skills']")
              template(v-slot:selected-item="scope")
                q-chip(removable
                  @remove="scope.removeAtIndex(scope.index)"
                  :tabindex="scope.tabindex"
                  :key="scope.opt.id"
                  class="bg-grey-3 q-pa-sm") {{ scope.opt.name }}
              template(v-slot:option="scope")
                q-item(v-bind="scope.itemProps" v-on="scope.itemEvents")
                  q-chip(:key="scope.opt.id" class="bg-white q-pa-sm") {{ scope.opt.name }}
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { ref } from "vue";

export default {
  props: {
    widgets: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      skills: [],
      areaExpertise: [],
      loading: false,
      hasEditPermission: true,
      dataStore: "Profile",
      aditionalActions: true,
      tab: "all",
      modal: true,
      filteredSkills: ref([]),
      validationErrors: {},
      selectedExpertiseId: "",
    };
  },

  computed: {
    ...mapGetters("Profile", ["getAreaExpertises", "getSkills"]),

    skillBySelectedAreaExpertise() {
      return this.areaExpertises.find((areaOfExpertise) => {
        return areaOfExpertise._id == this.selectedExpertiseId;
      }).skills;
    },

    showSkillModal() {
      return this.$store.getters[`${this.dataStore}/showSkillModal`];
    },
  },

  mounted() {
    this.callExpertise();
    this.callSkills();
  },

  methods: {
    ...mapActions("Profile", [
      "fetchAreaExpertises",
      "fetchSkillbyExpertiseID",
      "fetchSkills",
    ]),
    callExpertise() {
      this.fetchAreaExpertises({ all: true })
        .then((response) => {})
        .catch((e) => {});
    },

    callSkills() {
      this.fetchSkills()
        .then((response) => {})
        .catch((e) => {});
    },

    setSkillModal(val) {
      this.$store.commit(`${this.dataStore}/showHideSkillModal`, val);
    },
    onSelectExpertise(id) {
      this.fetchSkillbyExpertiseID(id);
    },

    // filterSkills(val, update) {
    //   if (val === "") {
    //     update(() => {
    //       this.filteredSkills = this.getSkills;
    //     });
    //     return;
    //   }

    //   update(() => {
    //     const needle = val.toLowerCase();
    //     this.filteredSkills = this.getSkills.filter(function (v) {
    //       return v.name.toLowerCase().indexOf(needle) > -1;
    //     });
    //   });
    // },
  },
};
</script>
