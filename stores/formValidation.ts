import { defineStore } from 'pinia';

export const useFormValidationStore = defineStore('formValidation', () => {
  const errors = ref({});
  const getErrors = computed(()=>errors.value)
  function setErrors(data){
    errors.value = data
  }
  function clearErrors(){
    errors.value = {}
  }
  return{errors,getErrors,setErrors,clearErrors }
})
