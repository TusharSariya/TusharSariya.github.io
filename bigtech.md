---
layout: page
title: "AI Infra Arms Race"
permalink: /bigtech
---

Late January early febuary big tech disclosed their 2026 capital expenditure. Wall Street predicted a CapEx increase of 19% but everyone was shocked. the numbers given are franly astronomical.

## 2026 CapEx :

<canvas id="capex-chart" style="max-height: 400px;"></canvas>

- Oracle ~50B
- Meta ~125B
- Microsoft ~130B
- Alphabet ~180B
- Amazon ~200B
- Total ~685B

ok cool big number, but what does this mean in a historical context :

<canvas id="historical-chart" style="max-height: 400px;"></canvas>

| Project / Entity | Total Cost (Adjusted) | Duration | Avg. Spend Per Year |
|------------------|----------------------|----------|---------------------|
| Interstate Highway System | ~$550 Billion | 50 Years | ~$11 Billion |
| Apollo Moon Program | ~$320 Billion | 13 Years | ~$25 Billion |
| Manhattan Project | ~$35 Billion | 4 Years | ~$9 Billion |
| Transcontinental Railroad | ~$30 Billion | 6 Years | ~$5 Billion |

that puts it into perspective doesnt it? the even wilder thing is these historical projects were government backed, this AI spend is almost completely private industry. the US entire Defence budget is approximately 900B.

even more, Once you Build a Higway or Railroad you get to keep the infrastructure and just maintain it. in this AI arms race approximately 60% is going into depreciating GPUs.

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
var fontFamily = "'Inter Tight', system-ui, sans-serif";

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
  }
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
</script>
