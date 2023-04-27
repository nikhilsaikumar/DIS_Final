// Define the data
const salesData = [
    { year: 2019, sales: 12003 },
    { year: 2020, sales: 16400 },
    { year: 2021, sales: 21786 },
    { year: 2022, sales: 34676 }
  ];

  // Set up the SVG element
  const svg = d3.select("svg");

  // Define the dimensions of the chart
  const width = +svg.attr("width");
  const height = +svg.attr("height");

  // Define the margins
  const margin = { top: 20, right: 20, bottom: 50, left: 50 };

  // Calculate the width and height of the chart area
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Set up the X and Y scales
  const xScale = d3.scaleBand()
    .range([0, chartWidth])
    .domain(salesData.map(d => d.year))
    .padding(0.2);

  const yScale = d3.scaleLinear()
    .range([chartHeight, 0])
    .domain([0, d3.max(salesData, d => d.sales)]);

  // Create the chart group
  const chart = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Create the X and Y axes
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  chart.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(xAxis);

  chart.append("g")
    .call(yAxis);

  // Create the bars
  const bars = chart.selectAll(".bar")
    .data(salesData)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xScale(d.year))
    .attr("y", chartHeight)
    .attr("width", xScale.bandwidth())
    .attr("height", 0)
    .attr("fill", d => {
      if (d.year === 2019) return "red";
      else if (d.year === 2020) return "green";
      else if (d.year === 2021) return "blue";
      else if (d.year === 2022) return "purple";
    })
    .transition()
    .duration(1000)
    .delay((d, i) => i * 250)
    .attr("y", d => yScale(d.sales))
    .attr("height", d => chartHeight - yScale(d.sales));