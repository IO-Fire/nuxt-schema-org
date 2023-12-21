import { computed, ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { withBase } from 'ufo'

export const schemaOrgGraph = ref<any>(null)
export const refreshTime = ref(Date.now())
export const globalRefreshTime = ref(Date.now())
export const hostname = window.location.host
export const path = ref('/')
export const query = ref()
export const base = ref('/')

export const refreshSources = useDebounceFn(() => {
  refreshTime.value = Date.now()
}, 200)

export const slowRefreshSources = useDebounceFn(() => {
  refreshTime.value = Date.now()
}, 1000)

export const host = computed(() => withBase(base.value, `${window.location.protocol}//${hostname}`))
