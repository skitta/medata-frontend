<template>
  <div class="add">
    <a-row justify="space-around">
      <a-col :xs="24" :lg="colSpan + 4" :xl="colSpan">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Row, Col } from "ant-design-vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: "AddView",
  components: {
    ARow: Row,
    ACol: Col,
  },

  setup() {
    const router = useRouter();
    const colSpan = computed(() => {
      return router.currentRoute.value.meta.colSpan;
    });
    onBeforeRouteUpdate(async (to) => {
      if (to.name === 'add') {
        return false;
      }
    });

    return {
      colSpan,
    };
  },
});
</script>

<style scoped>
.add {
  margin: 20px 40px;
  padding: 24px;
}

@media screen and (max-width: 768px) {
  .add {
    padding: 12px;
    margin: 20px 10px;
  }
}
</style>