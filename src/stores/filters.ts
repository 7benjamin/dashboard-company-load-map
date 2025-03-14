import { ref, computed, VueElement } from 'vue'
import { defineStore } from 'pinia'
import { dispatchNotification } from '@/components/Notification'
import { readData, removeData, writeData } from '@/utils/storage'
import router from '@/router'

import {
  Type1,
  Type2,
  Type3,
  Type4,
  Type5,
  Type6,
  Type7,
  Type8,
  Type9,
  Type10,
  Type11,
  Type12,
  Type13,
  Type14,
  Type15,
  Type16,
  Type17,
} from '@/components/Form/FiltersType'

const test1: { [key: string]: any } = {
  'type-1': Type1,
  'type-2': Type2
}

const getFilters = (type: string): VueElement => {
  return test1[type]
}

export const useFiltersStore = defineStore('filters', () => {
  const config = ref({
    reportButton: false,
    type: '',
    component: getFilters('') 
  })

  const setConfig = ({reportButton = false, type}: {reportButton?: boolean, type: string}) => {
    config.value = {
      reportButton,
      type,
      component: getFilters(type)
    }
  }

  return {
    config,
    setConfig
  }
})