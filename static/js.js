document.getElementById('charts').innerHTML = '';

let colourdata = [['rgb(201, 190, 140)' , 'rgb(10, 6, 4)' , 'rgb(146, 127, 62)' , 'rgb(221, 215, 190)' , 'rgb(61, 52, 35)'] ,
['rgb(197, 185, 154)' , 'rgb(97, 77, 59)' , 'rgb(230, 230, 217)' , 'rgb(35, 28, 27)' , 'rgb(159, 128, 101)'] ,
['rgb(123, 106, 106)' , 'rgb(7, 2, 3)' , 'rgb(225, 194, 180)' , 'rgb(207, 75, 44)' , 'rgb(75, 29, 30)'] ,
['rgb(16, 12, 8)' , 'rgb(170, 151, 117)' , 'rgb(218, 202, 171)' , 'rgb(119, 102, 75)' , 'rgb(64, 53, 37)'] ,
['rgb(2, 1, 2)' , 'rgb(156, 150, 151)' , 'rgb(49, 42, 43)' , 'rgb(224, 221, 221)' , 'rgb(96, 89, 90)'] ,
['rgb(221, 220, 197)' , 'rgb(11, 9, 5)' , 'rgb(152, 143, 95)' , 'rgb(99, 81, 42)' , 'rgb(55, 35, 15)'] ,
['rgb(4, 2, 2)' , 'rgb(196, 173, 149)' , 'rgb(129, 109, 94)' , 'rgb(245, 238, 224)' , 'rgb(82, 48, 40)'] ,
['rgb(117, 96, 83)' , 'rgb(9, 6, 4)' , 'rgb(176, 144, 117)' , 'rgb(58, 51, 46)' , 'rgb(229, 218, 201)'] ,
['rgb(126, 43, 26)' , 'rgb(203, 213, 237)' , 'rgb(103, 57, 200)' , 'rgb(8, 6, 9)' , 'rgb(177, 188, 67)'] ,
['rgb(149, 96, 83)' , 'rgb(201, 200, 196)' , 'rgb(230, 228, 224)' , 'rgb(173, 170, 166)' , 'rgb(55, 53, 42)'] ,
['rgb(250, 167, 32)' , 'rgb(73, 50, 28)' , 'rgb(21, 10, 5)' , 'rgb(193, 130, 39)' , 'rgb(128, 80, 34)'] ,
['rgb(3, 2, 2)' , 'rgb(240, 239, 237)' , 'rgb(96, 96, 94)' , 'rgb(40, 38, 38)' , 'rgb(165, 164, 162)'] ,
['rgb(10, 14, 24)' , 'rgb(140, 156, 170)' , 'rgb(60, 85, 104)' , 'rgb(162, 44, 38)' , 'rgb(236, 227, 229)'] ,
['rgb(12, 8, 5)' , 'rgb(254, 254, 253)' , 'rgb(131, 117, 92)' , 'rgb(82, 66, 42)' , 'rgb(190, 179, 155)'] ,
['rgb(17, 5, 4)' , 'rgb(193, 5, 25)' , 'rgb(200, 112, 106)' , 'rgb(92, 66, 58)' , 'rgb(229, 197, 178)'] ,
['rgb(13, 15, 15)' , 'rgb(250, 250, 248)' , 'rgb(144, 138, 124)' , 'rgb(210, 205, 196)' , 'rgb(68, 67, 60)'] ,
['rgb(24, 121, 143)' , 'rgb(46, 28, 75)' , 'rgb(162, 181, 230)' , 'rgb(4, 246, 240)' , 'rgb(115, 94, 149)'] ,
['rgb(4, 25, 48)' , 'rgb(10, 74, 91)' , 'rgb(7, 45, 64)' , 'rgb(31, 147, 155)' , 'rgb(9, 107, 120)'] ,
['rgb(10, 162, 178)' , 'rgb(216, 230, 225)' , 'rgb(9, 119, 140)' , 'rgb(69, 71, 73)' , 'rgb(99, 185, 195)'] ,
['rgb(15, 32, 33)' , 'rgb(246, 252, 250)' , 'rgb(108, 157, 125)' , 'rgb(165, 198, 190)' , 'rgb(57, 122, 84)']]

let percentages = [[11, 47, 8, 23, 12],
[14, 14, 17, 39, 16],
[7, 58, 9, 7, 19],
[30, 18, 15, 17, 20],
[75, 4, 11, 3, 7],
[8, 55, 4, 8, 25],
[62, 8, 11, 7, 12],
[15, 43, 13, 23, 6],
[10, 8, 11, 63, 7],
[7, 32, 38, 20, 3],
[56, 12, 11, 11, 9],
[85, 2, 3, 8, 2],
[44, 22, 21, 10, 4],
[23, 52, 9, 11, 5],
[25, 50, 9, 7, 9],
[28, 31, 11, 16, 14],
[11, 37, 15, 13, 23],
[46, 14, 28, 3, 10],
[38, 16, 23, 9, 14],
[27, 26, 14, 11, 23]]

let names = ['Gladiator',
'A Beautiful Mind',
'Chicago',
'The Lord of the Rings: The Return of the King',
'Million Dollar Baby',
'Crash',
'The Departed',
'No Country for Old Men',
'Slumdog Millionaire',
'The Hurt Locker',
"The King's Speech",
'The Artist',
'Argo',
'12 Years a Slave',
'Birdman',
'Spotlight',
'Moonlight',
'The Shape of Water',
'Green Book',
'Parasite']

for (let i=0; i < 20; i++){
  let pie = document.createElement('div');
  pie.id = i+2000;
  pie.className = 'pieDiv';
  pie.innerHTML += i+2000+":";
  pie.innerHTML += "  ";
  pie.innerHTML += names[i];
  document.getElementById('charts').appendChild(pie);
}


for (let i=0; i < 20; i++){
  let chart = document.createElement('canvas');
  chart.id = i+2000+'pie';
  chart.className = 'chartychart';
  chart.innerHTML += 'hi';
  document.getElementById(i+2000).appendChild(chart);
}

function insertEntry(entry) {

  colourdata.push(entry);
}


// fetch('/colourdata', { method: 'GET' })
//   //.then(response => response.json())
//   .then(data => {
//     for (let i=0; i<data.length; i++) {
//         insertEntry([
//           data[i][0],
//         ]);
//       }
//
//   });

for(let i=0; i<20; i++){
  var ctx = document.getElementById(i+2000+'pie');
  var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          datasets: [{
              data: percentages[i],
              backgroundColor: colourdata[i]
          }]
      },
      options: {
        tooltips: {
         enabled: false
        }
      }
  });
};
