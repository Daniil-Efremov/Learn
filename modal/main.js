$(document).ready(()=>{
    let
        modalOpen = $("#modalOpen"),
        modalClose = $("#modalClose"),
        modalWrapper = $("#modalWrapper");

        modalOpen.click(()=>{
            modalWrapper.removeClass("hide");
        });
        modalClose.click(()=>{
            modalWrapper.addClass("hide");
        });
});