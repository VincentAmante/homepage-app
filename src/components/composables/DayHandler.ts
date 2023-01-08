import { computed, ref } from "vue";

export function useDayHandler(dateToHandle: any){
    
    const date = ref(dateToHandle)
    // Gets the day of week
    const dayOfWeek = computed(() => {
        switch(date.value.getDay()){
            case 0: return 'mon'
            case 1: return 'tue'
            case 2: return 'wed'
            case 3: return 'thu'
            case 4: return 'fri'
            case 5: return 'sat'
            case 6: return 'sun'
            default:
                console.error('Day of week input invalid')
        }
    })

    // Provides day relative to present day
    const relativeDay = computed(() => {
        let presentDate = new Date()

        presentDate.setHours(date.value.getHours())
        presentDate.setMinutes(date.value.getMinutes())
        presentDate.setSeconds(date.value.getSeconds())

        // Acquires the difference of days
        let timeDiff = date.value.getTime() - presentDate.getTime()
        let dayDiff = Math.round(timeDiff / (1000 * 3600 * 24))

        // Describes adjacent days at a range of 2
        if (dayDiff <= -1 && dayDiff > -2) return 'yesterday'
        else if (dayDiff <= -2 && dayDiff < 3) return 'ereyesterday'
        else if (dayDiff >= 1 && dayDiff < 2) return 'tomorrow'
        else if (dayDiff >= 2 && dayDiff < 3) return 'overmorrow'
        else if (dayDiff > -1 && dayDiff < 1) return 'today'

        // Describes days with over a 2 day difference
        if (dayDiff >= 2){
            return `in ${dayDiff} days`
        } else if (dayDiff <= -2){
            return `${Math.abs(dayDiff)} days ago`
        } else {
            console.error('relativeDay() function did not figure out the relative day')
            return ''
        }
    })

    return {dayOfWeek, relativeDay}
}