import Swal from "sweetalert2";

export default function showSuccessModal(title, text){
  Swal.fire({
    icon: 'success',
    allowOutsideClick: true,
    title,
    text,
    confirmButtonText: 'OK',
    confirmButtonColor: '#39ee10'
  })
}
