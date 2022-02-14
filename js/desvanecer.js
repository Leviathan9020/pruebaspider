export function desvanecimiento() {
    let email = document.querySelector("#cajaemail")

    let icon = document.querySelectorAll(".input-icon")

    let cajapassword = document.querySelector("#cajapassword")
    cajapassword.addEventListener("input", e => {
        let val = e.target.value

        if (val.length > 0) {
            icon[1].classList.add("invisible")
        } else {
            icon[1].classList.remove("invisible")
        }
    })

    email.addEventListener("input", e => {
        let val = e.target.value

        if (val.length > 0) {
            icon[0].classList.add("invisible")
        } else {
            icon[0].classList.remove("invisible")
        }
    })
}

