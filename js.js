document.getElementById('items').innerHTML = '';

for (let i=0; i < 25; i++){
  let pie = document.createElement('div');
  pie.id = i+1995;
  pie.className = 'pieDiv';
  pie.innerHTML += i+1995;
  document.getElementById('items').appendChild(pie);
}

// document.getElementById('charts').innerHTML = '';
//
// for (let i=0; i < 2; i++){
//   let chart = document.createElement('div');
//   chart.innerHTML += '<td>' + scores [i][0] + '<td>';
//   document.getElementById('charts').appendChild(chart);
// }
//



  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
