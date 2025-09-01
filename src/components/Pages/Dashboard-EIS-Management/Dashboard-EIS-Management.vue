<template>
    <div class="flex w-full mt-5 ml-5">
        <div class="flex-grow w-full mx-3">
            <object type="text/html" :data="mapUrl" width="" height="450px" style="overflow:auto;width:100%;">
            </object>
        </div>
        <div>
            <div class="flex-grow mx-3">
                <div class="flex flex-row mx-3">            
                    <img class="w-auto h-auto" :src="IconRedThunder"/>
                     <h1 class="text-xl font-medium text-dark px-3">Gangguan</h1>
                </div>
            <div class="flex w-full my-3"> 
                <div class= "bg-red-100 px-3 rounded-t-2xl rounded-b-2xl py-3 mx-3 w-36">
                    <!-- <h1 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.eisManagement.totalGangguan.gardu ?? 0 }}</h1> -->
                    <h1 class="text-2xl font-medium text-dark text-center">3</h1>
                    <h2 class="text-sm font-medium text-dark text-center">Gardu</h2>
                </div>
                <div class= "bg-red-100 px-3 rounded-t-2xl rounded-b-2xl py-3 mx-3 w-36">
                    <!-- <h1 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.eisManagement.totalGangguan.jaringan ?? 0 }}</h1> -->
                    <h1 class="text-2xl font-medium text-dark text-center">2</h1>
                    <h2 class="text-sm font-medium text-dark text-center">Jaringan</h2>
                </div>
            </div>
            <div class="flex w-full my-3"> 
                <div class= "bg-red-100 px-3 rounded-t-2xl rounded-b-2xl py-3 mx-3 w-36">
                    <!-- <h1 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.eisManagement.totalGangguan.trafo ?? 0 }}</h1> -->
                    <h1 class="text-2xl font-medium text-dark text-center">7</h1>
                    <h2 class="text-sm font-medium text-dark text-center">Trafo</h2>
                </div>
                <div class= "bg-red-100 px-3 rounded-t-2xl rounded-b-2xl py-3 mx-3 w-36">
                    <!-- <h1 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.eisManagement.totalGangguan.lainnya ?? 0 }}</h1> -->
                    <h1 class="text-2xl font-medium text-dark text-center">5</h1>
                    <h2 class="text-sm font-medium text-dark text-center">Lainnya</h2>
                </div>
            </div>
        </div>
        <div class="flex-grow mx-3">
            <div class="flex flex-row mx-3">            
                    <img class="w-auto h-auto" :src="IconWhiteMaintenance"/>
                    <h1 class="text-xl font-medium text-dark px-3">Pemeliharaan</h1>
                </div>
            <div class="flex w-full my-3"> 
                <div class= "bg-gray-100 px-3 rounded-t-2xl rounded-b-2xl py-3 mx-3 w-36">
                    <!-- <h1 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.eisManagement.totalPemeliharaan.gardu ?? 0 }}</h1> -->
                    <h1 class="text-2xl font-medium text-dark text-center">8</h1>
                    <h2 class="text-sm font-medium text-dark text-center">Gardu</h2>
                </div>
                <div class= "bg-gray-100 px-3 rounded-t-2xl rounded-b-2xl py-3 mx-3 w-36">
                    <!-- <h1 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.eisManagement.totalPemeliharaan.jaringan ?? 0 }}</h1> -->
                    <h1 class="text-2xl font-medium text-dark text-center">5</h1>
                    <h2 class="text-sm font-medium text-dark text-center">Jaringan</h2>
                </div>
            </div>
            <div class="flex w-full my-3"> 
                <div class= "bg-gray-100 px-3 rounded-t-2xl rounded-b-2xl py-3 mx-3 w-36">
                    <!-- <h1 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.eisManagement.totalPemeliharaan.trafo ?? 0 }}</h1> -->
                    <h1 class="text-2xl font-medium text-dark text-center">2</h1>
                    <h2 class="text-sm font-medium text-dark text-center">Trafo</h2>
                </div>
                <div class= "bg-gray-100 px-3 rounded-t-2xl rounded-b-2xl py-3 mx-3 w-36">
                    <!-- <h1 v-if="result" class="text-2xl font-medium text-dark text-center">{{result.eisManagement.totalPemeliharaan.lainnya ?? 0 }}</h1> -->
                    <h1 class="text-2xl font-medium text-dark text-center">3</h1>
                    <h2 class="text-sm font-medium text-dark text-center">Lainnya</h2>
                </div>
            </div>
        </div>

        </div>

    </div>
    <div class="flex w-full rounded-l-full rounded-r-full bg-blue-50 mx-3 my-3 py-1">
        <div class="text-base text-dark text-center font-medium mx-3 ml-4 py-3">{{now}}</div>
        <div class="flex bg-white rounded-l-full rounded-r-full py-3 px-3">
            <div class="text-base text-dark text-center font-medium ml-4">Total Keluhan & Gangguan: </div>
            <!-- <div v-if="result" class="text-base text-red-400 text-center font-medium ml-4">{{result.eisManagement.totalKeluhanGangguanOpen ?? 0 }} Open </div>
            <div v-if="result" class="text-base text-green-400 text-center font-medium ml-4">{{result.eisManagement.totalKeluhanGangguanClose ?? 0 }} Close</div> -->
            <div class="text-base text-red-400 text-center font-medium ml-4">12 Open </div>
            <div class="text-base text-green-400 text-center font-medium ml-4">8 Close</div>
        </div>
    </div>
    <div class="flex w-full">
        <div class="flex-grow w-full mx-3">
            <div class="flex flex-row mx-3">            
                    <img class="w-auto h-auto mr-3" :src="IconRedThunder"/>
                    <h1 class="text-xl font-medium text-dark">Gangguan</h1>
            </div>
            <div class="flex w-full mx-3">
                <div class="flex-1 w-1\/2">
                    <div class="flex w-1\/2 mt-2">
                        <!-- <div v-if="result" class="text-base text-red-400 text-center font-medium ml-4">{{result.eisManagement.gangguan.open ?? 0 }} Open </div>
                        <div v-if="result" class="text-base text-green-400 text-center font-medium ml-4">{{result.eisManagement.gangguan.close ?? 0 }} Close</div> -->
                        <div class="text-base text-red-400 text-center font-medium ml-4">5 Open </div>
                        <div class="text-base text-green-400 text-center font-medium ml-4">7 Close</div>
                    </div>
                    <!-- <div v-if="result" class="flex flex-row text-sm text-dark font-medium ml-4 mt-3"><img class="w-auto h-auto mr-2" :src="IconEllipseGreen"/>{{result.eisManagement.gangguan.woTindak ?? 0 }}-WO SEDANG DITINDAK LANJUTI</div>
                    <div v-if="result" class="flex flex-row text-sm text-dark font-medium ml-4 mt-1"><img class="w-auto h-auto mr-2" :src="IconEllipseYellow"/>{{result.eisManagement.gangguan.woBlmTindak ?? 0 }}-WO BELUM DITINDAK LANJUTI</div>
                    <div v-if="result" class="flex flex-row text-sm text-dark font-medium ml-4 mt-1"><img class="w-auto h-auto mr-2" :src="IconEllipseRed"/>{{result.eisManagement.gangguan.woTindakSla ?? 0 }}-WO SEDANG DITINDAKLANJUTI OVER SLA</div>
                    <div v-if="result" class="flex flex-row text-sm text-dark font-medium ml-4 mt-1"><img class="w-auto h-auto mr-2" :src="IconEllipseBlack"/>{{result.eisManagement.gangguan.woBlmTindakSla ?? 0 }}-WO BELUM DITINDAKLANJUTI OVER SLA</div> -->
                    <div class="flex flex-row text-sm text-dark font-medium ml-4 mt-3"><img class="w-auto h-auto mr-2" :src="IconEllipseGreen"/>9 - WO SEDANG DITINDAK LANJUTI</div>
                    <div class="flex flex-row text-sm text-dark font-medium ml-4 mt-1"><img class="w-auto h-auto mr-2" :src="IconEllipseYellow"/>5 - WO BELUM DITINDAK LANJUTI</div>
                    <div class="flex flex-row text-sm text-dark font-medium ml-4 mt-1"><img class="w-auto h-auto mr-2" :src="IconEllipseRed"/>3 - WO SEDANG DITINDAKLANJUTI OVER SLA</div>
                    <div class="flex flex-row text-sm text-dark font-medium ml-4 mt-1"><img class="w-auto h-auto mr-2" :src="IconEllipseBlack"/>2 - WO BELUM DITINDAKLANJUTI OVER SLA</div>
                </div>
                <div class="flex-1 w-1\/2 mx-3">
                    <DxChart
                        id="chart"
                        :data-source="trenGangguan"
                        title="Tren Gangguan Individu"
                    >
                    <!-- <DxChart
                        id="chart"
                        :data-source="result.eisManagement.trenGangguan"
                        title="Tren Gangguan Individu"
                    > -->
                    <DxSeries argument-field="hari"/>
                    <DxArgumentAxis>
                        <DxLabel
                        :overlapping-behavior="currentMode"
                        word-wrap="none"
                    />
                </DxArgumentAxis>
                <DxLegend :visible="false"/>
                <DxSize
                    :height="200"
                    :width="300"
                />
                </DxChart>
                </div>  
            </div>
        </div>
        <div class="flex-grow w-full mx-3">
            <div class="flex-grow mx-3">
                <div class="flex flex-row mx-3 mb-2">            
                    <img class="w-auto h-auto mr-3" :src="IconWarningDiamond"/>
                    <h1 class="text-xl font-medium text-dark">Complaint Type</h1>
                </div>
            <div class="flex w-full mx-3 bg-yellow-100 rounded-t-2xl rounded-b-2xl py-3">
                <div class="flex-1 w-1\/2">
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">PADAM: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complainType.padam ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">18</div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">PASANG BARU: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complainType.pasangBaru ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">7</div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">PERUBAHAN DAYA: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complainType.perubahanDaya ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">3</div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">PENYAMBUNGAN SEMENTARA: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complainType.penyambunganSementara ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">6</div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">CATAT METER: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complainType.catatMeter ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">12</div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">TAGIHAN LISTRIK & TOKEN: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complainType.tagihanListrikToken ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">5</div>
                    </div>
                </div>
                <div class="flex-1 w-1\/2 mx-3">
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">PEMUTUSAN/PENYAMBUNGAN: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complainType.pemutusan ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">3</div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">METER APP: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complainType.meterApp ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">2</div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">INFORMASI: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complainType.informasi ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">7</div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">PERUBAHAN DATA: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complainType.perubahanData ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">11</div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">INTEGRITAS: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complainType.integritas ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">3</div>
                    </div>
                </div>  
            </div>
        </div>

        </div>

    </div>
    <div class="flex w-full mt-3 my-3">
        <div class="flex-grow w-full mx-3">
            <div class="flex flex-row mx-3">            
                    <img class="w-auto h-auto mr-3" :src="IconSmileySadRed"/>
                    <h1 class="text-xl font-medium text-dark">Keluhan</h1>
            </div>
            <div class="flex w-full mx-3 mt-2">
                <div class="flex-1 w-1\/2">
                    <div class="flex w-1\/2">
                        <!-- <div v-if="result" class="text-base text-red-400 text-center font-medium ml-4">{{result.eisManagement.keluhan.open ?? 0 }} Open </div>
                        <div v-if="result" class="text-base text-green-400 text-center font-medium ml-4">{{result.eisManagement.keluhan.close ?? 0 }} Close</div> -->
                        <div class="text-base text-red-400 text-center font-medium ml-4">7 Open </div>
                        <div class="text-base text-green-400 text-center font-medium ml-4">2 Close</div>
                    </div>
                    <!-- <div v-if="result" class="flex flex-row text-sm text-dark font-medium ml-4 mt-3"><img class="w-auto h-auto mr-2" :src="IconEllipseGreen"/>{{result.eisManagement.keluhan.woTindak ?? 0 }}-WO SEDANG DITINDAK LANJUTI</div>
                    <div v-if="result" class="flex flex-row text-sm text-dark font-medium ml-4 mt-1"><img class="w-auto h-auto mr-2" :src="IconEllipseYellow"/>{{result.eisManagement.keluhan.woBlmTindak ?? 0 }}-WO BELUM DITINDAK LANJUTI</div>
                    <div v-if="result" class="flex flex-row text-sm text-dark font-medium ml-4 mt-1"><img class="w-auto h-auto mr-2" :src="IconEllipseRed"/>{{result.eisManagement.keluhan.woTindakSla ?? 0 }}-WO SEDANG DITINDAKLANJUTI OVER SLA</div>
                    <div v-if="result" class="flex flex-row text-sm text-dark font-medium ml-4 mt-1"><img class="w-auto h-auto mr-2" :src="IconEllipseBlack"/>{{result.eisManagement.keluhan.woBlmTindakSla ?? 0 }}-WO BELUM DITINDAKLANJUTI OVER SLA</div> -->
                    <div class="flex flex-row text-sm text-dark font-medium ml-4 mt-3"><img class="w-auto h-auto mr-2" :src="IconEllipseGreen"/>7 - WO SEDANG DITINDAK LANJUTI</div>
                    <div class="flex flex-row text-sm text-dark font-medium ml-4 mt-1"><img class="w-auto h-auto mr-2" :src="IconEllipseYellow"/>2 - WO BELUM DITINDAK LANJUTI</div>
                    <div class="flex flex-row text-sm text-dark font-medium ml-4 mt-1"><img class="w-auto h-auto mr-2" :src="IconEllipseRed"/>3 - WO SEDANG DITINDAKLANJUTI OVER SLA</div>
                    <div class="flex flex-row text-sm text-dark font-medium ml-4 mt-1"><img class="w-auto h-auto mr-2" :src="IconEllipseBlack"/>0 -WO BELUM DITINDAKLANJUTI OVER SLA</div>
                </div>
                <div class="flex-1 w-1\/2 mx-3">
                    <DxChart
                        id="chart"
                        :data-source="trenKeluhan"
                        title="Tren Keluhan"
                    >
                    <!-- <DxChart
                        id="chart"
                        :data-source="result.eisManagement.trenKeluhan"
                        title="Tren Keluhan"
                    > -->
                    <DxSeries argument-field="hari"/>
                    <DxArgumentAxis>
                        <DxLabel
                        :overlapping-behavior="currentMode"
                        word-wrap="none"
                    />
                </DxArgumentAxis>
                <DxLegend :visible="false"/>
                <DxSize
                    :height="200"
                    :width="300"
                />
                </DxChart>

                </div>  
            </div>
        </div>
        <div class="flex-grow w-full mx-3">
            <div class="flex-grow mx-3">
                <div class="flex flex-row mx-3 mb-2">            
                    <img class="w-auto h-auto mr-3" :src="IconUsersThree"/>
                    <h1 class="text-xl font-medium text-dark">Customer Type</h1>
                </div>
            <div class="flex w-full mx-3 bg-blue-50 rounded-t-2xl rounded-b-2xl py-3">
                <div class="flex-1 w-1\/2">
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">NORMAL: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.customerType.normal ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">5</div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">PRIORITY: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.customerType.priority ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">3</div>
                    </div>
                </div>
                <div class="flex-1 w-1\/2 mx-3">
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">INDUSTRI: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.customerType.industri ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">1</div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">BISNIS: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.customerType.bisnis ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">0</div>
                    </div>
                </div>  
            </div>
            <div class="flex flex-row mx-3 mt-2 mb-2">            
                    <img class="w-auto h-auto mr-3" :src="IconSmileyAngry"/>
                    <h1 class="text-xl font-medium text-dark">Complaint Critical</h1>
                </div>
            <div class="flex w-full mx-3 bg-red-100 rounded-t-2xl rounded-b-2xl py-3">
                <div class="flex-1 w-1\/2">
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">>SLA: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complaintCritical.sla ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">2</div>
                    </div>
                </div>
                <div class="flex-1 w-1\/2 mx-3">
                    <div class="flex w-full">
                        <div class="flex-grow w-full text-sm text-dark font-medium ml-4 mt-1">BERULANG: </div>
                        <!-- <div v-if="result" class="text-sm text-dark font-medium ml-4 mt-1">{{result.eisManagement.complaintCritical.berulang ?? 0 }}</div> -->
                        <div class="text-sm text-dark font-medium ml-4 mt-1">7</div>
                    </div>
                </div>  
            </div>
        </div>

        </div>

    </div>

</template>

<script setup lang="ts">
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxLabel,
  DxLegend,
  DxSize
} from 'devextreme-vue/chart';
import { ref } from 'vue';
import {trenGangguan, trenKeluhan, overlappingModes} from './data-gangguan'
import type {complaintType} from './model'
import { getCurrentInstance } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import DateService from '../../../utils/getcurrentdate'
import { IconRedThunder,IconWhiteMaintenance, IconSmileySadRed, IconEllipseBlack, IconEllipseGreen, IconEllipseRed, IconEllipseYellow,
    IconSmileyAngry, IconUsersThree, IconWarningDiamond} from '@/utils/icons'

import { useUserStore } from '@/stores/user'


const currentMode = ref(overlappingModes[0]);
const user = useUserStore()

var now = new DateService().getCurrentDate()
const mapUrl = import.meta.env.VITE_MAP_URL + '?token=' + user.user_role
  
const QUERY_EIS_MANAGEMENT = gql`
        query eisManagement {
        eisManagement(userId: 23) {
            totalKeluhanGangguanOpen,
            totalKeluhanGangguanClose,
            totalGangguan{
            gardu
            jaringan
            trafo
            lainnya
            },
            totalPemeliharaan{
            gardu
            jaringan
            trafo
            lainnya
            },
            gangguan{
            open
            close
            woTindak
            woBlmTindak
            woTindakSla
            woBlmTindakSla
            },
            keluhan{
            open
            close
            woTindak
            woBlmTindak
            woTindakSla
            woBlmTindakSla
            },
            trenGangguan{
            hari
            val
            },
            trenKeluhan{
            hari
            val
            },
            complainType{
            catatMeter
            informasi
            integritas
            meterApp
            padam
            pasangBaru
            pemutusan
            penyambunganSementara
            perubahanData
            perubahanDaya
            tagihanListrikToken
            },
            customerType{
            bisnis
            industri
            normal
            priority
            },
            complaintCritical{
            berulang
            sla
            }
        }
        }
`
// const { result, loading, error } = useQuery(QUERY_EIS_MANAGEMENT)


// const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json", },
//     body: JSON.stringify({ username: "test" })
// };
// const response = await fetch('http://192.168.1.81:32235/icon/gangguan', requestOptions);
// const data = await response.json();





</script>