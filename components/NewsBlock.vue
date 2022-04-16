<template>
  <div class="news-block-item tw-flex tw-gap-4">
    <nuxt-img
      v-if="+blockIndex === 1"
      class="tw-m-full"
      src="/assets/images/poker-item-1.jpg"
    />
    <nuxt-img
      v-else-if="+blockIndex === 2"
      class="tw-m-full"
      src="/assets/images/poker-item-2.jpg"
    />
    <nuxt-img
      v-else-if="+blockIndex === 3"
      class="tw-m-full"
      src="/assets/images/poker-item-3.jpg"
    />
    <div class="tw-text-xs tw-text-gray-1 tw-mr-28">
      <div class="tw-italic">
        POKER QUEEN锦标赛圆满结束，本次比赛终极大奖1W金豆。POKER
        QUEEN锦标赛圆满结束，本次比赛终极大奖1W金豆次比赛终极大奖1W金豆。
      </div>
      <div class="tw-mt-3">2021/05/14</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NewsBlock',
  props: {
    isHideTitle: { type: Boolean, default: false },
    blockIndex: {
      type: [String, Number],
      default: 1,
      validator: (val: string | number) => [1, 2, 3].includes(+val),
    },
  },
})
</script>

<style lang="scss" scoped>
.info-block {
  &__1 {
    background-image: url(/assets/images/info-block-bg-1.png);
  }
  &__2 {
    background-image: url(/assets/images/info-block-bg-2.png);
  }
  &__3 {
    background-image: url(/assets/images/info-block-bg-3.png);
  }

  @apply tw-flex tw-items-center tw-bg-dark tw-p-5 tw-text-white tw-bg-cover;
}
</style>
