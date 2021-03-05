window.onload = function() {

    var canvas = new fabric.Canvas('mysheet');
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 1;
    canvas.freeDrawingBrush.color = "#ff0000";
    canvas.setWidth(window.innerWidth);
    canvas.setHeight(window.innerHeight);

    var el2 = document.getElementById('chart_canvas2');
    el2.addEventListener('click', run_iteration);
    var ctx2 = el2.getContext('2d');
    window.myBar = new Chart(ctx2, {
      type: 'bar',
      data: barChartData,
      options: {
        title: {
          text: 'Chart.js Bar Chart - Stacked'
        },
        legend :{
          display: true,
          position: "bottom",
          labels: {
            fontSize: 20,
          }
        },
        showTooltips: false,
        tooltips: {
          // mode: 'index',
          enabled: false,
          intersect: false
        },
        responsive: true,
      scales: {
          xAxes: [{
            ticks:{
              display: false,
            },
            stacked: true,
          }],
          yAxes: [{
            display:false,
            stacked: true,
            ticks: {
              // beginAtZero: true,
              min: -1,
              max: 5, 
          }
          }]
        }
      }
    });

    var el4 = document.getElementById('chart_canvas4');
    el4.addEventListener('click', run_iteration);
    var ctx4 = el4.getContext('2d');
    window.myBarConfidence = new Chart(ctx4, {
      type: 'bar',
      data: barChartDataConfidence,
      options: {
        title: {
          text: 'Chart.js Bar Chart - Stacked'
        },
        legend :{
          display: true,
          position: "bottom",
          labels: {
            fontSize: 20,
          }
        },
        tooltips: {
          // mode: 'index',
          enabled: false,
          intersect: false
        },
        responsive: true,
      scales: {
          xAxes: [{
            ticks:{
              display: false,
            },
            stacked: true,
          }],
          yAxes: [{
            display:false,
            stacked: true,
            ticks: {
              min: -1,
              max: 5, 
          }
          }]
        }
      }
    });

    var el5 = document.getElementById('chart_canvas5');
    el5.addEventListener('click', run_iteration);
    var ctx5 = el5.getContext('2d');
    window.myBarCopy = new Chart(ctx5, {
      type: 'bar',
      data: barChartData,
      options: {
        title: {
          text: 'Chart.js Bar Chart - Stacked'
        },
        legend :{
          display: true,
          position: "bottom",
          labels: {
            fontSize: 20,
          }
        },
        tooltips: {
          // mode: 'index',
          enabled: false,
          intersect: false
        },
        responsive: true,
      scales: {
          xAxes: [{
            ticks:{
              display: false,
            },
            stacked: true,
          }],
          yAxes: [{
            display:false,
            stacked: true,
            ticks: {
              min: -1,
              max: 5, 
          }
          }]
        }
      }
    });

    var el6 = document.getElementById('chart_canvas6');
    el6.addEventListener('click', run_iteration);
    var ctx6 = el6.getContext('2d');
    window.myBarConfidenceCopy = new Chart(ctx6, {
      type: 'bar',
      data: barChartDataConfidence,
      options: {
        title: {
          text: 'Chart.js Bar Chart - Stacked'
        },
        legend :{
          display: true,
          position: "bottom",
          labels: {
            fontSize: 20,
          }
        },
        tooltips: {
          // mode: 'index',
          enabled: false,
          intersect: false
        },
        responsive: true,
      scales: {
          xAxes: [{
            ticks:{
              display: false,
            },
            stacked: true,
          }],
          yAxes: [{
            display:false,
            stacked: true,
            ticks: {
              min: -1,
              max: 5, 
          }
          }]
        }
      }
    });

};

//   document.addEventListener('keypress', function(e){ 
//     if(e.which != 118){
//       return;
//     };
//   let scale_factor = .9;
//   for (let step = 0; step < num_vars; step++) {
//     let rand_scal_factor;
//     if(step < NUM_PRIMAL){
//       let scale_factor_primal = Math.max(scale_factor, MIN_VAL_arr[step] / barChartData.datasets[0].data[step]);
//       rand_scal_factor = Math.pow(scale_factor_primal, 1- Math.random());
//     } else{
//       let dual_min_scale_down = Math.min(1,scale_factor /( MIN_VAL_arr[step] / (-barChartData.datasets[1].data[step])));
//       let scale_factor_dual = Math.max(scale_factor, dual_min_scale_down);
//       rand_scal_factor = Math.pow(scale_factor, 1- Math.random()) * dual_min_scale_down;
//     }
//     barChartData.datasets[0].data[step] = barChartData.datasets[0].data[step] * rand_scal_factor;
//     barChartData.datasets[1].data[step] = barChartData.datasets[1].data[step] * scale_factor / rand_scal_factor;
//   }
//     barChartData.datasets[0].data.sort().reverse();
//     barChartData.datasets[1].data.sort();
//     barChartData2.datasets = make_just_data(barChartData);
//     window.myBar2.update();
// });
