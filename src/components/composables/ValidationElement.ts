import { ref, computed } from 'vue'

interface ValidationResult {
    errors: string[]
}

export function useValidationElement(){
    const errorsArr  = ref<string[]>([])

    const style = computed(() => {
        return (errorsArr.value.length <= 0) ? [''] : ['border-primary-cool', 'border-b-4', 'text-primary-cool']
    })
    const styleText = computed(() => {
        return (errorsArr.value.length <= 0) ? [''] : ['text-primary-cool', 'placeholder:text-primary-cool']
    })

    const errors = computed(() => {
        return errorsArr.value
    })

    const hasErrors = computed(() => {
        return (errorsArr.value.length > 0)
    })

    function setErrors(newErrors: string[]){
        errorsArr.value = newErrors
    }

    return {style, styleText, setErrors, errors, hasErrors}
}