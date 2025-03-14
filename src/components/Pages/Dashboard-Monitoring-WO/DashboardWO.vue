<template>
    <div class="w-full mt-5 ml-5">
      <div class="text-base text-dark font-medium mx-3 ml-4 py-3">{{now}}</div>
      <div class="flex w-full mx-3">
        <div class="flex-grow mx-3 w-1/4">
          <div class="flex my-3">
            <div class="flex flex-col bg-green-50 rounded-t-2xl rounded-b-2xl mx-3 w-64 h-36 items-center justify-center">
              <div class="flex flex-row mx-3">            
                    <img class="w-auto h-auto" :src="IconRepeatGreen"/>
                    <h1 class="text-sm font-bold text-dark text-center">Auto Dispatch</h1>
                </div>
              <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.autoDispatchManual.total ?? 0 }}</h2>
            </div>
          </div>
          <div class="flex mt-8">
            <div class="flex flex-col bg-yellow-50 rounded-t-2xl rounded-b-2xl mx-3 w-64 h-36 items-center justify-center">
              <div class="flex flex-row mx-3">            
                    <img class="w-auto h-auto mr-1" :src="IconHandSwipeRightYellow"/>
                    <h1 class="text-sm font-bold text-dark text-center">Manual</h1>
                </div>
              <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.autoDispatchManual.manual ?? 0 }}</h2>
            </div>
          </div>
        </div>
        <div class="flex-grow my-3 mx-3 w-1/4">
          <div class="flex flex-col bg-green-100 rounded-t-2xl mx-3 rounded-b-2xl w-64 h-full items-center justify-center">
            <h1 class="text-sm font-bold text-dark text-center">Total</h1>
            <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.autoDispatchManual.total ?? 0 }}</h2>
          </div>
        </div>
        <div class="flex-grow mx-3 w-1/4">
          <div class="flex my-3">
            <div class="flex flex-col bg-slate-50 rounded-t-2xl rounded-b-2xl mx-3 w-64 h-36 items-center justify-center">
              <div class="flex flex-row mx-3">            
                    <img class="w-auto h-auto" :src="IconPlugChargingRed"/>
                    <h1 class="text-sm font-bold text-dark text-center">Gangguan TM</h1>
                </div>
              <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.gangguanTm.gangguanTm ?? 0 }}</h2>
            </div>
          </div>
          <div class="flex-grow my-3 mt-8">
            <div class="bg-slate-50 px-3 rounded-t-2xl rounded-b-2xl py-3 my-1 mx-3 w-64 h-16">
              <h1 class="text-sm font-bold text-dark text-center">Gardu Padam</h1>
              <h2 v-if="result" class="text-xl font-medium text-red-400 text-center">{{result.dashboardMonitoringWo.gangguanTm.garduPadam ?? 0 }}</h2>
            </div>
            <div class="bg-slate-50 px-3 rounded-t-2xl rounded-b-2xl py-3 mx-3 my-3 w-64 h-16">
              <h1 class="text-sm font-bold text-dark text-center">Gardu Nyala</h1>
              <h2 v-if="result" class="text-xl font-medium text-blue-400 text-center">{{result.dashboardMonitoringWo.gangguanTm.garduNyala ?? 0 }}</h2>
            </div>
          </div>
        </div>
        <div class="flex-grow mx-3 w-1/4">
          <div class="flex-grow my-3">
            <div class="bg-slate-50 px-3 rounded-t-2xl rounded-b-2xl py-3 my-1 mx-3 w-64 h-16">
              <h1 class="text-sm font-bold text-dark text-center">Gardu Padam</h1>
              <h2 v-if="result" class="text-xl font-medium text-red-400  text-center">{{result.dashboardMonitoringWo.padamTerencana.garduPadam ?? 0 }}</h2>
            </div>
            <div class="bg-slate-50 px-3 rounded-t-2xl rounded-b-2xl py-3 mx-3 my-3 w-64 h-16">
              <h1 class="text-sm font-bold text-dark text-center">Gardu Nyala</h1>
              <h2 v-if="result" class="text-xl font-medium text-blue-400  text-center">{{result.dashboardMonitoringWo.padamTerencana.garduNyala ?? 0 }}</h2>
            </div>
          </div>
          <div class="flex my-3 mt-8">
            <div class="flex flex-col bg-slate-50 rounded-t-2xl rounded-b-2xl mx-3 w-64 h-36 items-center justify-center">
              <div class="flex flex-row mx-3">            
                    <img class="w-auto h-auto" :src="IconPlugsYellow"/>
                    <h1 class="text-sm font-bold text-dark text-center">Padam Terencana</h1>
                </div>
              <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.padamTerencana.padamTerencana ?? 0 }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full mx-3">
        <div class="flex w-full">
        <div class="w-1/2 flex-grow mx-3">
          <div class="flex flex-row mx-3">            
                    <img class="w-auto h-auto" :src="IconUsersThree"/>
                    <div class="text-base text-dark font-bold mx-3 ml-4 py-3">Regu</div>
          </div>
        </div>
        <div class="w-1/2 flex-grow mx-3">
          <div class="flex flex-row mx-3">            
                    <img class="w-auto h-auto" :src="IconClockCountdown"/>
                    <div class="text-base text-dark font-bold mx-3 ml-4 py-3">Status</div>
          </div>
        </div>
        </div>
        <div class="flex w-full">
        <div class="w-1/4 flex-grow mx-3">
          <div class="flex my-3">
            <div class="bg-blue-200 px-3 rounded-t-2xl rounded-b-2xl py-2 mx-3 w-64 h-16">
              <h1 class="text-sm font-bold text-dark text-center">Regu Aktif</h1>
              <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.regu.reguAktif ?? 0 }}</h2>
            </div>
          </div>
          <div class="flex my-3">
            <div class="bg-blue-200 px-3 rounded-t-2xl rounded-b-2xl py-2 mx-3 w-64 h-16">
              <h1 class="text-sm font-bold text-dark text-center">Regu Non Available</h1>
              <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.regu.reguNonAvailable ?? 0 }}</h2>
            </div>
          </div>
        </div>
        <div class="w-1/4 flex-grow mx-3">
          <div class="flex my-3">
            <div class="bg-blue-200 px-3 rounded-t-2xl rounded-b-2xl py-2 mx-3 w-64 h-16">
              <h1 class="text-sm font-bold text-dark text-center">Regu Available</h1>
              <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.regu.reguAvailable ?? 0 }}</h2>
            </div>
          </div>
          <div class="flex my-3">
            <div class="bg-blue-200 px-3 rounded-t-2xl rounded-b-2xl py-2 mx-3 w-64 h-16">
              <h1 class="text-sm font-bold text-dark text-center">Regu PO</h1>
              <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.regu.reguPo ?? 0 }}</h2>
            </div>
          </div>
        </div>
        <div class="w-1/4 flex-grow mx-3">
          <div class="flex my-3">
            <div class="bg-green-50 px-3 rounded-t-2xl rounded-b-2xl py-2 mx-3 w-64 h-16">
              <h1 class="text-sm font-bold text-dark text-center">Marking</h1>
              <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.status.marking ?? 0 }}</h2>
            </div>
          </div>
          <div class="flex my-3">
            <div class="bg-green-50 px-3 rounded-t-2xl rounded-b-2xl py-2 mx-3 w-64 h-16">
              <h1 class="text-sm font-bold text-dark text-center">Antrian</h1>
              <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.status.antrian ?? 0 }}</h2>
            </div>
          </div>
        </div>
        <div class="w-1/4 flex-grow mx-3">
          <div class="flex my-3">
            <div class="bg-green-50 px-3 rounded-t-2xl rounded-b-2xl py-2 mx-3 w-64 h-16">
              <h1 class="text-sm font-bold text-dark text-center">Handle</h1>
              <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.status.handle ?? 0 }}</h2>
            </div>
          </div>
          <div class="flex my-3">
            <div class="bg-green-50 px-3 rounded-t-2xl rounded-b-2xl py-2 mx-3 w-64 h-16">
              <h1 class="text-sm font-bold text-dark text-center">Selesai</h1>
              <h2 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.dashboardMonitoringWo.status.selesai ?? 0 }}</h2>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import DateService from '../../../utils/getcurrentdate'
import { IconUsersThree, IconClockCountdown, IconHandSwipeRightYellow, IconPlugsYellow, IconPlugChargingRed, IconRepeatGreen} from '@/utils/icons'

var now = new DateService().getCurrentDate()
  
const QUERY_DASHBOARD_WO = gql`
query dashboardMonitoringWo {
  dashboardMonitoringWo(userId: 23) {
    autoDispatchManual{
      manual
      total
    },
    gangguanTm{
      gangguanTm
      garduNyala
      garduPadam
    },
    padamTerencana{
      padamTerencana
      garduNyala
      garduPadam
    },
    regu{
      reguAktif
      reguPo
      reguAvailable
      reguNonAvailable
    },
    status{
      antrian
      handle
      marking
      selesai
    }
  }
}
`
const { result, loading, error } = useQuery(QUERY_DASHBOARD_WO)



</script>