import Swal from "sweetalert2";

export default function showErrorModal(title, text){
  Swal.fire({
    icon: 'error',
    allowOutsideClick: true,
    title,
    text,
    confirmButtonText: 'Try Again'
  })
}
