import Swal from "sweetalert2";

const handleErrors = function (error){
    if (error.response) {
      let errorMessage = error.response.data.errors ? error.response.data.errors[0] : error.response.data.message;
      showError('An error occurred', errorMessage);
    }
    else if (error.request) {
      showError('An error occurred', error);
    }
    else if (error.message){
      showError('An error occurred', error.message);
    }
    else {
      showError('An error occurred', error);
    }
};

function showError(title,text){
  Swal.fire({
    icon: 'error',
    allowOutsideClick: true,
    title,
    text,
    confirmButtonText: 'Try Again',
    confirmButtonColor: '#EE1010'
  })
}
export default handleErrors;
