<template>
  <div
    class="info-block"
    :class="{
      'info-block__1': +blockIndex === 1,
      'info-block__2': +blockIndex === 2,
      'info-block__3': +blockIndex === 3,
    }"
  >
    <div class="tw-flex tw-my-5 tw-text-lg">MID</div>
    <div class="tw-mb-20">
      <div class="tw-text-center tw-text-4xl">100K</div>
    </div>
    <div class="tw-text-gray-1">
      <div class="tw-text-xs">
        <div class="tw-flex tw-justify-between tw-gap-6">
          <div>SEM ADD.ON</div>
          <div>SEM ADD.ON</div>
          <div>LATE 21H25</div>
        </div>
        <div class="tw-my-5 tw-flex tw-justify-between">
          <div>30K STACK</div>
          <div>20 MIN</div>
          <div>PRO KO</div>
        </div>
      </div>
      <div class="tw-mb-4">
        <div class="tw-text-2xl tw-text-center">TEXAS</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'InfoBlock',
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

  @apply tw-bg-dark tw-w-full tw-p-5 tw-text-white tw-bg-cover;
}
</style>
