'use strict';

(function () {
  var fontFamily = "'Inter Tight', system-ui, sans-serif";
  var logoSize = 32;
  var chartPadding = 16;
  var base = typeof window !== 'undefined' && window.BASEURL ? window.BASEURL : '';
  var logoUrls = [
    base + '/assets/images/logos/oracle.svg',
    base + '/assets/images/logos/meta.png',
    base + '/assets/images/logos/microsoft.png',
    base + '/assets/images/logos/alphabet.svg',
    base + '/assets/images/logos/amazon.png'
  ];

  function loadImage(url) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { resolve(null); };
      img.src = url;
    });
  }

  function drawBarLogos(logoImages) {
    return {
      id: 'barLogos',
      afterDraw: function (chart) {
        var meta = chart.getDatasetMeta(0);
        if (!meta || !meta.data.length) return;
        var ctx = chart.ctx;
        for (var i = 0; i < meta.data.length; i++) {
          var el = meta.data[i];
          var img = logoImages[i];
          if (!img || !el) continue;
          var barWidth = el.width;
          var maxLogoWidth = barWidth;
          var w = (img.width / img.height) * logoSize;
          var h = logoSize;
          if (w > maxLogoWidth) {
            w = maxLogoWidth;
            h = maxLogoWidth * (img.height / img.width);
          }
          var x = el.x - w / 2;
          var y = el.y - h - 4;
          ctx.drawImage(img, x, y, w, h);
        }
      }
    };
  }

  Promise.all(logoUrls.map(loadImage)).then(function (logoImages) {
    new Chart(document.getElementById('capex-chart'), {
      type: 'bar',
      data: {
        labels: ['Oracle', 'Meta', 'Microsoft', 'Alphabet', 'Amazon'],
        datasets: [{
          label: '2026 CapEx ($B)',
          data: [50, 125, 130, 180, 200],
          backgroundColor: ['#C74634', '#0668E1', '#00A4EF', '#4285F4', '#FF9900'],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        layout: {
          padding: {
            top: logoSize + 8,
            right: chartPadding,
            bottom: chartPadding,
            left: chartPadding
          }
        },
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: '2026 Capital Expenditure ($B)',
            font: { family: fontFamily, size: 16 }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0,0,0,0.08)' },
            title: { display: true, text: 'Billions ($)', font: { family: fontFamily } },
            ticks: { font: { family: fontFamily } }
          },
          x: {
            grid: { display: false },
            ticks: { font: { family: fontFamily } }
          }
        }
      },
      plugins: [drawBarLogos(logoImages)]
    });
  });

  new Chart(document.getElementById('historical-chart'), {
    type: 'bar',
    data: {
      labels: [
        ['US Defence Budget', '(2026, 1 yr)'],
        ['Big Tech AI', '(2026, 1 yr)'],
        ['Interstate Highway', '(50 yrs)'],
        ['Apollo Moon', '(13 yrs)'],
        ['Manhattan Project', '(4 yrs)'],
        ['Transcon. Railroad', '(6 yrs)']
      ],
      datasets: [{
        label: 'Total Cost ($B, adjusted)',
        data: [900, 685, 550, 320, 35, 30],
        backgroundColor: ['#3C3B6E', '#EC8F8D', '#537D96', '#537D96', '#537D96', '#537D96'],
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      layout: { padding: chartPadding },
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Historical Comparison - Total Cost (Inflation Adjusted $B)',
          font: { family: fontFamily, size: 16 }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.08)' },
          title: { display: true, text: 'Billions ($)', font: { family: fontFamily } },
          ticks: { font: { family: fontFamily } }
        },
        x: {
          grid: { display: false },
          ticks: { font: { family: fontFamily } }
        }
      }
    }
  });

  new Chart(document.getElementById('gdp-chart'), {
    type: 'bar',
    data: {
      labels: ['Switzerland', 'Belgium', 'Big Tech AI', 'Sweden', 'Israel'],
      datasets: [{
        label: 'GDP / CapEx ($B)',
        data: [1000, 716.98, 685, 662.32, 610.75],
        backgroundColor: ['#537D96', '#537D96', '#EC8F8D', '#537D96', '#537D96'],
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      layout: { padding: chartPadding },
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Big Tech 2026 CapEx vs Country GDP ($B)',
          font: { family: fontFamily, size: 16 }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.08)' },
          title: { display: true, text: 'Billions ($)', font: { family: fontFamily } },
          ticks: { font: { family: fontFamily } }
        },
        x: {
          grid: { display: false },
          ticks: { font: { family: fontFamily } }
        }
      }
    }
  });
})();
