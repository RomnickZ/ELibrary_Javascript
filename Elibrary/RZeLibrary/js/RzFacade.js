$(document).ready(function() {
    // Handle the show/hide of ratings section based on the checkbox
    $("#chkAddRatings").change(function() {
        if ($(this).is(":checked")) {
            $("#ratingsSection").show();
            $("#txtIntuitive, #txtResponseTime, #txtOverall").val(0); // Initialize ratings
        } else {
            $("#ratingsSection").hide();
        }
    });

    // Calculate overall rating when "Intuitive UI" or "Response Time" changes
    $("#txtIntuitive, #txtResponseTime").on("input", function() {
        calculateOverallRating();
    });

    // Function to calculate overall rating
    function calculateOverallRating() {
        var intuitive = parseInt($("#txtIntuitive").val()) || 0;
        var responseTime = parseInt($("#txtResponseTime").val()) || 0;
        var overallRating = ((intuitive + responseTime) * 100) / 10;
        $("#txtOverall").val(overallRating.toFixed(2) + "%");
    }
});
