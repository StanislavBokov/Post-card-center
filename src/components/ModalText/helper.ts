export const validate = (data:any, setErrors:any) => {
    const errors:any = {}
    
    for(const fieldName in data) {
      if(!data[fieldName].value) {
        errors[fieldName] = `${fieldName} is required`
      }
    }
    setErrors(errors)
  };
  
  export const isEmptyErrors = (errors: any) => {
    for(const field in errors) {
      if(errors[field].length) return true
    }
    return false
  }