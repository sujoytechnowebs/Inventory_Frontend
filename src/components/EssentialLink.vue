<template>
  <div>
    <q-list
      flat
      class="rounded-borders"
      v-for="essentialLink in essentialLinks"
      :key="essentialLink.title"
    >
      <q-expansion-item
        v-if="essentialLink.childs && essentialLink.childs.length > 0"
        expand-separator
        :icon="essentialLink.icon"
        :label="essentialLink.title"
        v-show="essentialLink.show != '' ? $acl.hasAccess(essentialLink.show) : true"
      >
        <q-item
          v-for="child in essentialLink.childs"
          clickable
          :to="child.link"
          :key="child.title"
          v-show="child.show != '' ? $acl.hasAccess(child.show) : true"
          v-bind:class="
            $route.path == child.link
              ? 'bg-secondary text-white'
              : 'bg-primary text-white'
          "
        >
          <q-item-section v-if="child.icon" avatar>
            <q-icon :name="child.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ child.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
      <q-item
        v-else
        clickable
        :to="essentialLink.link"
        v-show="essentialLink.show != '' ? $acl.hasAccess(essentialLink.show) : true"
        v-bind:class="
          $route.path == essentialLink.link
            ? 'bg-secondary text-white'
            : 'bg-primary text-white'
        "
      >
        <q-item-section v-if="essentialLink.icon" avatar>
          <q-icon :name="essentialLink.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ essentialLink.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { acl } from "../boot/acl.js";

export default defineComponent({
  name: "EssentialLink",
  props: {
    essentialLinks: {
      type: Array,
      required: [],
    },
  },
  data() {
    return {
      testShow: "false",
    };
  },
});
</script>
