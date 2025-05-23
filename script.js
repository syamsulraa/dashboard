let viz;

const chartLinks = {
  BarChart: 'https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011_Project10/Dashboard1',
  LineChart: 'https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project_10_Line_Chart/Dashboard1',
  PieChart: 'https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011_Project10_Pie_Chart/Dashboard1',
  MapChart: 'https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project_10_Map_Chart/Dashboard1',
  ScatterPlot: 'https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Scatter_Plot/Dashboard1',
  BubbleChart: 'https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Bubble_Chart/Dashboard1',
  TreeMap: 'https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Tree_Map/Dashboard1',
  GanttChart: 'https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Gantt_Chart/Dashboard1',
  LollipopChart: 'https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Lolipop_Chart/Dashboard1',
  WordCloud: 'https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Word_Cloud/Dashboard1',
  BoxPlot: 'https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project10_Box_Pilot/Dashboard1',
  HistogramChart:'https://public.tableau.com/views/M_Syamsul_Rizal_Amri2431011Project_Histogram_Chart/Dashboard1',
  Dashboard: 'https://public.tableau.com/views/Dashboard_Visualisai_M_Syamsul_Rizal_Amri/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
};


function loadViz(chartName) {
  const container = document.getElementById("vizContainer");
  const title = document.getElementById("chartTitle");
  const url = chartLinks[chartName];

  title.innerText = chartName.replace(/([A-Z])/g, ' $1').trim();

  if (viz) {
    viz.dispose();
  }

  const options = {
    width: "100%",
    height: "600px",
    hideToolbar: false,
    hideTabs: true
  };

  viz = new tableau.Viz(container, url, options);
}
