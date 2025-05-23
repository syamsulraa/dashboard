let viz;

const vizUrls = {
  BarChart: "https://public.tableau.com/views/YOUR_BARCHART_URL",
  LineChart: "https://public.tableau.com/views/YOUR_LINECHART_URL",
  PieChart: "https://public.tableau.com/views/YOUR_PIECHART_URL",
  MapChart: "https://public.tableau.com/views/YOUR_MAPCHART_URL",
  ScatterPlot: "https://public.tableau.com/views/YOUR_SCATTERPLOT_URL",
  BubbleChart: "https://public.tableau.com/views/YOUR_BUBBLECHART_URL",
  TreeMap: "https://public.tableau.com/views/YOUR_TREEMAP_URL",
  GanttChart: "https://public.tableau.com/views/YOUR_GANTTCHART_URL",
  LollipopChart: "https://public.tableau.com/views/YOUR_LOLLIPOPCHART_URL",
  WordCloud: "https://public.tableau.com/views/YOUR_WORDCLOUD_URL",
  BoxPlot: "https://public.tableau.com/views/YOUR_BOXPLOT_URL",

  // ✅ Histogram Chart dengan URL yang kamu berikan
  Histogram: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Histogram_Chart/Dashboard1",

  Dashboard: "https://public.tableau.com/views/YOUR_DASHBOARD_URL"
};

function loadViz(chartType) {
  const containerDiv = document.getElementById("vizContainer");
  const chartTitle = document.getElementById("chartTitle");

  // Update title
  chartTitle.innerText = chartType.replace(/([A-Z])/g, " $1").trim();

  // Hapus visualisasi lama jika ada
  if (viz) {
    viz.dispose();
  }

  const url = vizUrls[chartType];
  if (!url) {
    containerDiv.innerHTML = `<p>Chart "${chartType}" belum memiliki URL Tableau.</p>`;
    return;
  }

  const options = {
    hideTabs: true,
    width: "100%",
    height: "800px"
  };

  viz = new tableau.Viz(containerDiv, url, options);
}
