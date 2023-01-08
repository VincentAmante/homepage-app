import { computed, ref, watchEffect} from "vue";
import type { Ref } from "vue";

export function useModuleToggle (isEnabled: Ref<boolean>) {
    const toggledOff = ['text-indicator-green', 'rotate-0']
    const toggledOn = ['text-indicator-red', 'rotate-45']
    const style = ref(toggledOff)

    function toggleModule(){
        isEnabled.value = !isEnabled.value
        setStyle()
    }
    function setStyle(){
        style.value = (isEnabled.value) ? toggledOn : toggledOff
    }
    function initModule(userEnabledModule: boolean){
        isEnabled.value = userEnabledModule
        setStyle()
    }

    return { toggleModule, style, initModule }
}