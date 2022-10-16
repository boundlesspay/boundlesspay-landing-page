import * as Swal from "sweetalert2";

export default function showConfirmDialog(title, text){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  return swalWithBootstrapButtons.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    allowOutsideClick: false,
    confirmButtonText: 'Yes, proceed!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Action cancelled',
        'error'
      )

      return false;
    }
  })
}
