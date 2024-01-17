function animacionSobre() {
    window.sr = ScrollReveal(),
        sr.reveal(".nombre1",
            {
                duration: 3e3,
                delay: 2100,
                origin: "buttom",
                distance: "-100px"
            }),
        sr.reveal(".nombre2",
            {
                duration: 3e3,
                delay: 2100,
                opacity: 0,
                distance: "0px"
            }),
        sr.reveal(".nombre3",
            {
                duration: 3e3,
                delay: 2100,
                origin: "left",
                distance: "-100px"
            }),
        document.getElementById("sobre1").classList.add("moved"),
        document.getElementById("sobre2").classList.add("moved2"),
        setTimeout(cerrarModal,
            2e3)
} function cerrarModal() {
    $("#myModal").modal("hide"),
        $("body").removeClass("modal-open"),
        $(".modal-backdrop").remove()
} $(document).ready((function () { $("#myModal").modal("show") }));