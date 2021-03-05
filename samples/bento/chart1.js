var num_vars = 30;
var label_arr = [];
var primal_vars = [];
var dual_vars = [];
var MAX_VAL = 4;
var MIN_VAL = MAX_VAL / 4;
var KAPPA_ESTIMATE = 1;
MIN_VAL_arr = [];

MIN_VAL_arr.sort().reverse();
var NUM_PRIMAL = num_vars * .3;
for(let i = 0; i < NUM_PRIMAL; i++){
MIN_VAL_arr.push(MIN_VAL * (Math.random() + .3));
} 
MIN_VAL_DUAL_arr = [];
for(let i = 0; i < num_vars - NUM_PRIMAL; i++)
{
MIN_VAL_DUAL_arr.push(MIN_VAL * (Math.random() + .3));
}
MIN_VAL_DUAL_arr.sort();
MIN_VAL_arr = MIN_VAL_arr.concat(MIN_VAL_DUAL_arr);
var mu = MAX_VAL * MAX_VAL / 4;
for (let step = 1; step <= num_vars; step++) {
label_arr.push(step.toString());
let rand = 2 * MAX_VAL * (Math.random() - 0.5);
primal_vars.push(rand);
}
primal_vars.sort(function(a,b){return a - b}).reverse();
// console.log(primal_vars)
pos_primal_vars = primal_vars.map(function (num, idx) {
return Math.max(0,num)});
neg_primal_vars = primal_vars.map(function (num, idx) {
  return  Math.min(0,num)});
total_neg = -neg_primal_vars.reduce((a,b) => a + b, 0); 
confidence_span = KAPPA_ESTIMATE * total_neg;

min_confidence_primal_vars = primal_vars.map(function(num,idx){
return Math.max(0, num - confidence_span)}) 

confidence_diameter_vars = primal_vars.map(function(num,idx){
return 2 * confidence_span - Math.max(0, confidence_span - num)}); 

var barChartData = {
mydata: primal_vars,
labels: label_arr,
legend :{
  display: true,
  position: "bottom",
  labels: {
    fontSize: 10,
  }
},
datasets: [{
  label: 'Positive',
  backgroundColor: window.chartColors.red,
  data: pos_primal_vars,
  
}, {
  label: 'Negative',
  backgroundColor: window.chartColors.blue,
  data: neg_primal_vars,
}]

};

var barChartDataConfidence = {
mydata: primal_vars,
labels: label_arr,
legend :{
  display: true,
  position: "bottom",
  labels: {
    fontSize: 10,
  }
},
datasets: [{
  label: 'Positive',
  backgroundColor: window.chartColors.red,
  data: min_confidence_primal_vars,
}, {
  label: 'Guaranteed Proximity',
  backgroundColor: window.chartColors.orange,
  data: confidence_diameter_vars,
}]

};

// window.onload = function() {
//   var ctx = document.getElementById('chart_canvas2').getContext('2d');
//   window.myBar = new Chart(ctx, {
//     type: 'bar',
//     data: barChartData,
//     options: {
//       title: {
//         // display: true,
//         text: 'Chart.js Bar Chart - Stacked'
//       },
//       legend :{
//         display: true,
//         position: "bottom",
//         labels: {
//           fontSize: 10,
//         }
//       },
//       tooltips: {
//         mode: 'index',
//         intersect: false
//       },
//       responsive: true,
//     scales: {
//         xAxes: [{
//           stacked: true,
//         }],
//         yAxes: [{
//           display:false,
//           stacked: true,
//           ticks: {
//             suggestedMin: -5,
//             suggestedMax: 5, 
//         }
//         }]
//       }
//     }
//   });
// };


function run_iteration(){
  let scale_factor = .9;
  let total_neg = 0;
  for (let step = 0; step < num_vars; step++) {
    let rand_scal_factor;
    if(barChartData.mydata[step] > 0){
      let rdn = Math.random() - 0.5;
      barChartData.mydata[step] = Math.max(barChartData.mydata[step] + rdn, - barChartData.mydata[step]);
      
      // let scale_factor_primal = Math.max(scale_factor, MIN_VAL_arr[step] / barChartData.datasets[0].data[step]);
      // rand_scal_factor = Math.pow(scale_factor_primal, 1- Math.random());
    } else{
      let rdn = Math.random() - 0.5;
      barChartData.mydata[step] = Math.max(.9 * barChartData.mydata[step] + rdn, 1.5 * barChartData.mydata[step]);
    }
    total_neg += - Math.min(0, barChartData.mydata[step]);
    barChartData.datasets[0].data[step] = Math.max(0, barChartData.mydata[step]);
    barChartData.datasets[1].data[step] = Math.min(0, barChartData.mydata[step]);
    // barChartData.datasets[0].data[step] = barChartData.datasets[0].data[step] * rand_scal_factor;
    // barChartData.datasets[1].data[step] = barChartData.datasets[1].data[step] * scale_factor / rand_scal_factor;
  }
  
  let confidence_span = KAPPA_ESTIMATE * total_neg;
  
  barChartDataConfidence.datasets[0].data = barChartData.mydata.map(function(num,idx){
    return Math.max(0, num - confidence_span)}) 
  
    barChartDataConfidence.datasets[1].data = primal_vars.map(function(num,idx){
    return 2 * confidence_span - Math.max(0, confidence_span - num)}); 
  
  
    // barChartData.datasets[0].data.sort().reverse();
    // barChartData.datasets[1].data.sort();
  window.myBar.update();
  window.myBarConfidence.update();
  window.myBarCopy.update();
  window.myBarConfidenceCopy.update(); 
}

document.addEventListener('keypress', function(e){ 
  if(e.which != 105){
    return;
  };
run_iteration();
});