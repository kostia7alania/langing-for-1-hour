<template>
  <div>
    <div class="tw-text-center tw-flex tw-justify-center sm:tw-relative">
      <VButton
        class="anim-batch-once tw-flex tw-items-center tw-gap-2"
        @click="setIsActiveContacts(!isActiveContacts)"
      >
        <span> {{ currentLocaleName }} </span>

        <svg
          width="9"
          height="7"
          viewBox="0 0 9 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M0.949458 0.949694L7.45059 0.949694C8.2946 0.949694 8.71762 2.15134 8.12054 2.85352L4.92361 6.61729C4.52589 7.08541 3.87416 7.08541 3.47644 6.61729L0.27951 2.85352C-0.317575 2.15134 0.105444 0.949694 0.949458 0.949694Z"
            fill="white"
          />
        </svg>
      </VButton>
      <HeaderModal
        v-if="isActiveContacts"
        width="130px"
        height="130px"
        @close="isActiveContacts = false"
      >
        <ul class="tw-px-4 tw-flex tw-flex-col tw-gap-2">
          <li
            v-for="locale in availableLocales"
            :key="locale.code"
            class="hover:tw-text-primary tw-cursor-pointer tw-text-left"
          >
            <nuxt-link :to="switchLocalePath(locale.code)">{{
              locale.name
            }}</nuxt-link>
          </li>
        </ul>
      </HeaderModal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import HeaderModal from './HeaderModal.vue'

import VButton from '@/components/ui/VButton.vue'

export default defineComponent({
  name: 'LanguageToggle',
  components: { HeaderModal, VButton },
  setup() {
    const isActiveContacts = ref(false)

    const setIsActiveContacts = (val: boolean) => {
      isActiveContacts.value = val
    }

    return {
      isActiveContacts,
      setIsActiveContacts,
    }
  },
  computed: {
    currentLocaleName() {
      const { name } =
        // @ts-ignore
        this.$i18n.locales.find((e) => e.code === this.$i18n.locale) || {}
      return name
    },
    availableLocales() {
      return this.$i18n.locales // .filter((i) => i.code !== this.$i18n.locale)
    },
  },
})
</script>

<style lang="scss" scoped>
.button__join-us {
  transition: 1s;
  &:hover {
    background: #000019;
  }
  &:active {
    transition: 0.2s;
    transform: scale(0.9);
    background: blue;
  }
}
// .join-us-modal {
// replaced to parent
//   &::v-deep {
//     .tw-modal-container {
//       @media (max-width: 500px) {
//         // on small screens - full width
//         width: calc(100vw - 20px) !important;
//       }
//     }
//   }
// }
</style>
