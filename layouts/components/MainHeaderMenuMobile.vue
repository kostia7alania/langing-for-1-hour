<template>
  <div
    style="width: 55px"
    class="tw-text-center tw-flex tw-justify-center tw-relative"
  >
    <button
      :class="classComputed"
      class="anim-batch-once button__join-us"
      :style="isActiveModal ? 'width: 42px' : 'border-radius: 33px'"
      @click="setIsActiveContacts(!isActiveModal)"
    >
      <svg
        v-if="!isActiveModal"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="29"
          height="29"
          rx="1.5"
          fill="#DDBA82"
          stroke="#DDBA82"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.84933 7H8.69866C9.12524 7 9.5499 7.44083 9.54799 7.88165V8.7633C9.54799 9.20413 9.12332 9.64496 8.69866 9.64496H7.84933C7.42466 9.64496 7 9.20413 7 8.7633V7.88165C7 7.44083 7.42466 7 7.84933 7ZM12.9491 7H23.1526C23.6614 7 24.0019 7.35346 24 7.88165V8.7633C24 9.2915 23.6614 9.64496 23.1507 9.64496H12.9491C12.4403 9.64496 12.0998 9.29349 12.0998 8.7633V7.88165C12.0998 7.35346 12.4384 7 12.9491 7ZM8.69866 13.1775H7.84933C7.42466 13.1775 7 13.6183 7 14.0592V14.9408C7 15.3817 7.42466 15.8225 7.84933 15.8225H8.69866C9.12332 15.8225 9.54799 15.3817 9.54799 14.9408V14.0592C9.5499 13.6183 9.12524 13.1775 8.69866 13.1775ZM12.9491 13.1775H23.1526C23.6614 13.1775 24.0019 13.531 24 14.0592V14.9408C24 15.469 23.6614 15.8225 23.1507 15.8225H12.9491C12.4403 15.8225 12.0998 15.471 12.0998 14.9408V14.0592C12.0998 13.531 12.4384 13.1775 12.9491 13.1775ZM8.69866 19.355H7.84933C7.42466 19.355 7 19.7959 7 20.2367V21.1183C7 21.5592 7.42466 22 7.84933 22H8.69866C9.12332 22 9.54799 21.5592 9.54799 21.1183V20.2367C9.5499 19.7959 9.12524 19.355 8.69866 19.355ZM12.9491 19.355H23.1526C23.6614 19.355 24.0019 19.7085 24 20.2367V21.1183C24 21.6465 23.6614 22 23.1507 22H12.9491C12.4403 22 12.0998 21.6485 12.0998 21.1183V20.2367C12.0998 19.7085 12.4384 19.355 12.9491 19.355Z"
          fill="white"
        />
      </svg>

      <svg
        v-show="isActiveModal"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 10.5862L16.95 5.63623L18.364 7.05023L13.414 12.0002L18.364 16.9502L16.95 18.3642L12 13.4142L7.04999 18.3642L5.63599 16.9502L10.586 12.0002L5.63599 7.05023L7.04999 5.63623L12 10.5862Z"
          fill="white"
        />
      </svg>
    </button>
    <HeaderModal
      v-if="isActiveModal"
      height="255px"
      @close="isActiveModal = false"
    >
      <ul class="navbar-items tw-flex tw-flex-col tw-text-left tw-w-full">
        <li
          v-for="{ title, id } in linksMap"
          :key="id"
          class="
            link-item
            tw-my-2.2 tw-mx-4 tw-text-gray-1 tw-text-xs
            hover:tw-text-gray-500
          "
          @click.prevent="scrollToLink(id)"
        >
          <a
            :class="{ 'link--active': id === activeLink }"
            :href="id"
            @click.prevent
          >
            {{ title }}
          </a>
        </li>
        <!--  -->
        <li>
          <div class="line-break"></div>
        </li>
        <!--  -->
        <li
          v-for="locale in availableLocales"
          :key="locale.code"
          class="link-item tw-my-2.2 tw-mx-4 tw-text-gray-1 tw-text-xs"
        >
          <nuxt-link
            :class="{ 'link--active': $i18n.locale === locale.code }"
            class="
              tw-text-gray-1
              hover:tw-text-gray-500
              tw-flex tw-items-center tw-gap-6
            "
            :to="switchLocalePath(locale.code)"
            >{{ locale.name }}
            <svg
              v-if="$i18n.locale === locale.code"
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.80569 10.9995V10.9995C5.63245 11.0058 5.46252 10.9507 5.32568 10.8439L0.20558 5.80031H0.20558C-0.0592453 5.5472 -0.0695768 5.12645 0.182505 4.86055C0.190006 4.85264 0.1977 4.84491 0.20558 4.83738V4.83738C0.458173 4.5712 0.877847 4.56101 1.14295 4.81464C1.15068 4.82203 1.15823 4.82962 1.1656 4.83738L5.78269 9.42208L14.8339 0.206493V0.206493C15.0865 -0.059689 15.5061 -0.0698711 15.7712 0.183751C15.779 0.191147 15.7865 0.19873 15.7939 0.206493L15.7939 0.206493C16.059 0.45931 16.0698 0.880043 15.818 1.14622C15.8102 1.1545 15.8021 1.16257 15.7939 1.17042L6.2857 10.7977V10.7977C6.16184 10.9308 5.98709 11.0043 5.80569 10.9995V10.9995Z"
                fill="#DDBA82"
              />
            </svg>
          </nuxt-link>
        </li>
      </ul>
    </HeaderModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import HeaderModal from './HeaderModal.vue'
import { linksMap } from '@/layouts/constants/linksMap'
import { scrollToId } from '@/compositions/scrollTo'

export default defineComponent({
  name: 'HeaderJoinUs',
  components: { HeaderModal },
  props: {
    activeLink: {
      type: String,
      default: '',
    },
  },
  setup(/* _, { emit } */) {
    const isActiveModal = ref(false)

    const setIsActiveContacts = (val: boolean) => {
      isActiveModal.value = val
    }
    const scrollToLink = (id: string) => {
      scrollToId(id)
      setIsActiveContacts(false)
    }
    return {
      isActiveModal,
      setIsActiveContacts,
      scrollToLink,
      linksMap,
    }
  },
  computed: {
    // @ts-ignore
    availableLocales() {
      // @ts-ignore
      return this.$i18n.locales // .filter((i) => i.code !== this.$i18n.locale)
    },
    classComputed() {
      if (this.isActiveModal)
        return 'tw-text-black tw-bg-black tw-rounded-full tw-flex tw-justify-center tw-items-center tw-z-50'
      return ' tw-text-white tw-font-bold  tw-py-2 tw-px-6 box-shadow-1'
    },
  },
})
</script>

<style lang="scss" scoped>
.button__join-us {
  height: 42px;
  transition: 1s;
  &:hover {
    color: #000019;
    svg path {
      // stroke: blue;
    }
  }
  &:active {
    transition: 0.2s;
    transform: scale(0.9);
    color: blue;
  }
}

.line-break {
  border: 1px solid #ffffff;
  @apply tw-m-auto tw-mt-3 tw-mb-1 tw-opacity-70 tw-w-11/12;
}
</style>
