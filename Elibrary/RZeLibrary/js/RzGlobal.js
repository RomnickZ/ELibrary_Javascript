// $(document).ready(function() {
//     // Function to calculate and update the overall rating
//     function calculateOverallRating() {
//         var intuitive = parseInt($("#txtIntuitive").val()) || 0;
//         var responseTime = parseInt($("#txtResponseTime").val()) || 0;
//         var overallRating = ((intuitive + responseTime) * 100) / 10;
//         $("#txtOverall").val(overallRating.toFixed(2) + "%");
//     }
//
//     // Listen for changes in "Intuitive UI" and "Response Time" fields
//     $("#txtIntuitive, #txtResponseTime").on("input", function() {
//         calculateOverallRating();
//     });
//
//     // Handle the show/hide of ratings section based on the checkbox
//     $("#chkAddRatings").change(function() {
//         if ($(this).is(":checked")) {
//             $("#ratingsSection").show();
//             calculateOverallRating(); // Calculate the initial rating if the checkbox is checked
//         } else {
//             $("#ratingsSection").hide();
//         }
//     });
// });