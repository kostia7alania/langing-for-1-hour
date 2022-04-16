<template>
  <div>
    <nav
      class="tw-hidden md:tw-block navbar tw-font-bold"
      style="max-width: 1110px"
    >
      <ul class="header-menu__items tw-flex tw-gap-3 lg:tw-gap-8">
        <li v-for="{ title, id, type } in linksMap" :key="id" class="link-item">
          <a
            v-if="type === 'anchor'"
            :class="{ 'link--active': id === activeLink }"
            class="anim-batch-once tw-text-gray-1 hover:tw-text-gray-700"
            :href="id"
            @click.prevent="scrollToId(id)"
          >
            {{ title }}
          </a>
          <div v-else-if="type === 'break'" class="break-line"></div>
        </li>
      </ul>
    </nav>
    <MainHeaderMenuMobile
      class="tw-block md:tw-hidden"
      :active-link="activeLink"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import MainHeaderMenuMobile from './MainHeaderMenuMobile.vue'
import { linksMap } from '@/layouts/constants/linksMap'

import { useScrollEventTop } from '@/compositions/scrollEvent'
import { scrollToId } from '@/compositions/scrollTo'

export default defineComponent({
  name: 'MainHeaderMenu',
  components: {
    MainHeaderMenuMobile,
  },
  setup(/* _, ctx: SetupContext */) {
    const { activeLink } = useScrollEventTop()
    return { linksMap, scrollToId, activeLink }
  },
})
</script>

<style lang="scss" scoped>
.link--active {
  @apply tw-relative;
  &::after {
    content: ' ';
    height: 1px;
    width: 80%;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    bottom: -4px;
    @apply tw-absolute tw-bg-primary;
  }
}
</style>
