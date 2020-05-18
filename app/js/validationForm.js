

const validateCreateForm = () => {
  if(document.myForm.Title.value === "" || document.myForm.Description.value ===""){
    alert("Please, fill in all the fields")
    return false
  }
  return true;
}

const validateSearchForm = () => {
  if(document.form.Search.value === ""){
    alert("Please, enter search title")
    return false
  }
  return true;
}

export {
  validateCreateForm,
  validateSearchForm,
}
