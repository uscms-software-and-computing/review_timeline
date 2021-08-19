var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var events = [
 {
   "Task Name": "WLCG 2022 pledge deployed",
   "Planned Finish Date": "3/31/22"
 },
 {
   "Task Name": "CMS detector closed. Start of LHC beam commissioning for Run 3.",
   "Planned Finish Date": "3/31/22"
 },
 {
   "Task Name": "Start of LHC beam operation and CMS data taking for Run 3.",
   "Planned Finish Date": "6/30/22"
 },
 {
   "Task Name": "WLCG 2023 pledge deployed",
   "Planned Finish Date": "3/31/23"
 },
 {
   "Task Name": "WLCG 2024 pledge deployed",
   "Planned Finish Date": "4/1/24"
 },
 {
   "Task Name": "CMS Computing TDR Submitted",
   "Planned Finish Date": "4/1/24"
 },
 {
   "Task Name": "CMS Computing TDR Review",
   "Planned Finish Date": "9/30/24"
 },
 {
   "Task Name": "WLCG 2025 pledge deployed",
   "Planned Finish Date": "3/31/25"
 },
 {
   "Task Name": "WLCG 2026 pledge deployed",
   "Planned Finish Date": "3/31/26"
 },
 {
   "Task Name": "10% Network Challenge",
   "Planned Finish Date": "12/1/21"
 },
 {
   "Task Name": "30% Network Challenge",
   "Planned Finish Date": "12/1/23"
 },
 {
   "Task Name": "60% Network Challenge",
   "Planned Finish Date": "12/1/25"
 },
 {
   "Task Name": "100% Network Challenge",
   "Planned Finish Date": "12/1/27"
 },
 {
   "Task Name": "Common software projects and WLCG software",
   "Planned Finish Date": "11/1/21"
 },
 {
   "Task Name": "HL-LHC Computing CDRs for ATLAS and CMS",
   "Planned Finish Date": "10/3/22"
 },
 {
   "Task Name": "HSF, Common Software Projects, WLCG facilities",
   "Planned Finish Date": "10/2/23"
 },
 {
   "Task Name": "Delivery of the HL-LHC ATLAS and CMS Computing TDR",
   "Planned Finish Date": "4/1/24"
 },
 {
   "Task Name": "Review of the HL-LHC ATLAS and CMS Computing TDR",
   "Planned Finish Date": "10/1/24"
 }
];

var html = '';

var alt = 0;
// Loop through each event and create a div item
events.forEach(function (event) {

  var tArr = event["Planned Finish Date"].split("/");
  var month = months[parseInt(tArr[0])-1];
  console.log(month);
  var side = "right";
  if (alt % 2 == 0) {side = "left";}
  html += '<div class="container ' + side + '"> <div class="content"> <h2>' + month + " 20" + tArr[2] + '</h2> <p>' + event["Task Name"] + '</p></div></div>';
  alt += 1;
});



document.getElementById('events').innerHTML = html;
