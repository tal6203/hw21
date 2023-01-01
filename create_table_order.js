let edit_btn = document.querySelectorAll(".btn-primary");

edit_btn.forEach((e) => {
    e.addEventListener("click", (e) => {
        update_detiles(e.currentTarget);
    });
});

function update_detiles(x) {
    document.getElementById("first_name").value = x.parentNode.parentNode.querySelectorAll("td")[2].innerHTML;
    document.getElementById("credit").value = x.parentNode.parentNode.querySelectorAll("td")[3].innerHTML;

    document.getElementById("btn_accept_edit").addEventListener("click", () => {
        x.parentNode.parentNode.querySelectorAll("td")[2].innerHTML = document.getElementById("first_name").value;
        x.parentNode.parentNode.querySelectorAll("td")[3].innerHTML = document.getElementById("credit").value;
    })
}



let delete_btn = document.querySelectorAll('.btn.btn-danger.remove_order');

delete_btn.forEach((e) => {
    e.addEventListener("click", (e) => {
        let row = e.currentTarget.parentNode.parentNode;
        swal("Are you sure you want to delete the invitation?", "", "info");
        document.querySelector(".swal-button.swal-button--confirm").addEventListener("click", () => {
            row.remove();
        })
    });

});






