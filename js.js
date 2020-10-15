document.getElementById('charts').innerHTML = '';

for (let i=0; i < 20; i++){
  let pie = document.createElement('div');
  pie.id = i+2000;
  pie.className = 'pieDiv';
  pie.innerHTML += i+2000;
  document.getElementById('charts').appendChild(pie);
}


for (let i=0; i < 20; i++){
  let chart = document.createElement('canvas');
  chart.id = i+2000+'pie';
  chart.className = 'chartychart';
  chart.innerHTML += 'hi';
  document.getElementById(i+2000).appendChild(chart);
}

// for(let i=0; i<20; i++){
//   var ctx = document.getElementById(i+2000+'pie');
//   var myChart = new Chart(ctx, {
//       type: 'pie',
//       data: {
//           //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [{
//               label: '# of Votes',
//               data: [12, 19, 3, 5, 2, 3],
//               backgroundColor: [
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)'
//               ]
//           }]
//       },
//       options: {}
//   });
// }


for(let i=0; i<20; i++){
  var ctx = document.getElementById(i+2000+'pie');
  var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ]
          }]
      },
      options: {}
  });
}
