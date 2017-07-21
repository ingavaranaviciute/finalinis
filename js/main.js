
$(document).ready(function() {
    $('.progress_bar.fill_con').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
        }
    )
});

