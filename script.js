let viz;

const vizUrls = {
  BarChart: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011_Project10/Dashboard1",
  LineChart: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Line_Chart/Dashboard1",
  PieChart: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011_Project10_Pie_Chart/Dashboard1",
  MapChart: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Map_Chart/Dashboard1",
  ScatterPlot: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Scatter_Plot_Chart/Dashboard1",
  BubbleChart: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Bubble_Chart/Dashboard1",
  TreeMap: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Tree_Map/Dashboard1",
  GanttChart: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Gantt_Chart/Dashboard1",
  LollipopChart: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Lollipop_Chart/Dashboard1",
  WordCloud: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Word_Cloud/Dashboard1",
  BoxPlot: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Box_Plot/Dashboard1",
  Histogram: "https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Histogram_Chart/Dashboard1",
  Dashboard: ""https://public.tableau.com/views/Dashboard_Visualisai_M_Syamsul_Rizal_Amri/Dashboard1""
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
