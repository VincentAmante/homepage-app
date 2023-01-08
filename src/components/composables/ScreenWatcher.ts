// Reusable composable for watching the screen size
// This allows defining what parts to display based on the viewport width

import { ref, computed, onMounted, onUnmounted} from 'vue'

export function useScreenWatcher(){
    const screenSize = ref(0)

    function onResize(){
        screenSize.value = window.innerWidth
    }
    onMounted(() => {
        screenSize.value = window.innerWidth
        window.addEventListener('resize', onResize)
    })
    onUnmounted(() => {
        window.removeEventListener('resize', onResize)
    })

    const breakpoint = 768;
    const isPastBreakpoint = computed(() => {
        return (screenSize.value > breakpoint)
    })

    return isPastBreakpoint
}