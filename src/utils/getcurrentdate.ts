import { getCurrentInstance } from 'vue'

export default class DateService {
    getCurrentDate(): string {
        const internalInstance = getCurrentInstance()
        const currentDate = new Date();
        var day = currentDate.toLocaleDateString('id-ID', { weekday: 'long' })
        var month = currentDate.toLocaleString('id-ID', { month: 'long' })
        var date = internalInstance!.appContext.config.globalProperties.$moment(currentDate).format('DD')
        var year = internalInstance!.appContext.config.globalProperties.$moment(currentDate).format('YYYY')
    
        var current : string = day + ', ' + date + ' ' + month + ' ' + year
    
        return current
    }
  }

