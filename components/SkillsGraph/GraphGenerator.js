import * as d3 from "d3";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./forceGraph.module.css";

export function runForceGraph(
  container,
  linksData,
  nodesData,
  nodeHoverTooltip
) {
  const links = linksData.map((d) => Object.assign({}, d));
  const nodes = nodesData.map((d) => Object.assign({}, d));

  const containerRect = container.getBoundingClientRect();
  const height = containerRect.height;
  const width = containerRect.width;
  const mobile = width < 769;

  const color = (d) => {
    return d.color;
  };

  const getClass = (d) => {
    return styles["text" + d.text];
  };

  const drag = (simulation) => {
    const dragstarted = (e, d) => {
      if (!e.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    };

    const dragged = (e, d) => {
      d.fx = e.x;
      d.fy = e.y;
    };

    const dragended = (e, d) => {
      if (!e.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    };

    return d3
      .drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  };

  // Add the tooltip element to the graph
  const tooltip = document.querySelector("#graph-tooltip");
  if (!tooltip) {
    const tooltipDiv = document.createElement("div");
    tooltipDiv.classList.add(styles.tooltip);
    tooltipDiv.style.opacity = "0";
    tooltipDiv.id = "graph-tooltip";
    document.body.appendChild(tooltipDiv);
  }
  const div = d3.select("#graph-tooltip");

  const addTooltip = (hoverTooltip, d, x, y) => {
    div.transition().duration(200).style("opacity", 0.9);
    div
      .html(hoverTooltip(d))
      .style("background-color", `grey`)
      .style("color", `white`)
      .style("left", `${x}px`)
      .style("top", `${y - 28}px`);
  };

  const removeTooltip = () => {
    div.transition().duration(200).style("opacity", 0);
  };

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .strength(3)
        .distance((d) => d.value + d.source.size / 2)
    )
    .force("charge", d3.forceManyBody())
    .force(
      "collision",
      d3
        .forceCollide()
        .radius((d) => (mobile ? (d.size * 0.8) / 2 + 8 : d.size / 2 + 5))
    )
    .force("center", d3.forceCenter(0, 0));

  const clusters = {
    1: 0,
    2: width,
  };

  simulation.force(
    "x",
    d3.forceX().x(function (d) {
      return clusters[d.group];
    })
  );

  const svg = d3
    .select(container)
    .append("svg")
    .attr("viewBox", [-width / 2, -height / 2, width, height]);

  const link = svg
    .append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke-width", 2);

  const node = svg
    .append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 2)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", (d) => {
      return mobile ? (d.size * 0.8) / 2 : d.size / 2;
    })
    .attr("fill", color)
    .call(drag(simulation));

  const label = svg
    .append("g")
    .attr("class", "labels")
    .selectAll("text")
    .data(nodes.filter((n) => n.type === "subject"))
    .enter()
    .append("foreignObject");
  label
    .attr("width", (d) => (mobile ? d.size * 0.8 : d.size))
    .attr("height", (d) => (mobile ? d.size * 0.8 : d.size))
    .append("xhtml:div")
    .attr("class", `flexbox ${styles.subjectContainer}`)
    .html((d) => {
      return `<div class="${styles.subjectLabel} ${getClass(d)}">${d.id}</div>`;
    })
    .call(drag(simulation));

  const icon = svg
    .append("g")
    .attr("class", "labels")
    .selectAll("text")
    .data(nodes.filter((n) => n.type === "tool"))
    .enter()
    .append("svg:image")
    .attr("xlink:href", (d) => {
      return d.icon;
    })
    .attr("height", (d) => {
      return (mobile ? d.size * 0.8 : d.size) * 0.6;
    })
    .attr("width", (d) => {
      return (mobile ? d.size * 0.8 : d.size) * 0.6;
    })
    .call(drag(simulation));

  icon
    .on("mouseover", (e, d) => {
      addTooltip(nodeHoverTooltip, d, e.pageX, e.pageY);
    })
    .on("mouseout", () => {
      removeTooltip();
    });

  const validateX = (d) => {
    const lowerLimmit = -width / 2 + (mobile ? (d.size * 0.8) / 2 : d.size / 2);
    const upperLimmit = width / 2 - (mobile ? (d.size * 0.8) / 2 : d.size / 2);
    if (lowerLimmit < d.x && d.x < upperLimmit) {
      return d.x;
    } else {
      return d.x > 0 ? upperLimmit : lowerLimmit;
    }
  };

  const validateY = (d) => {
    const lowerLimmit =
      -height / 2 + (mobile ? (d.size * 0.8) / 2 : d.size / 2);
    const upperLimmit = height / 2 - (mobile ? (d.size * 0.8) / 2 : d.size / 2);
    if (lowerLimmit < d.y && d.y < upperLimmit) {
      return d.y;
    } else {
      return d.y > 0 ? upperLimmit : lowerLimmit;
    }
  };

  simulation.on("tick", () => {
    // update node positions
    node.attr("cx", validateX).attr("cy", validateY);
    //update link positions
    link
      .attr("x1", (d) => {
        return validateX({ x: d.source.x, size: d.source.size });
      })
      .attr("y1", (d) => {
        return validateY({ y: d.source.y, size: d.source.size });
      })
      .attr("x2", (d) => {
        return validateX({ x: d.target.x, size: d.target.size });
      })
      .attr("y2", (d) => {
        return validateY({ y: d.target.y, size: d.target.size });
      });

    // update label positions
    label
      .attr("x", (d) => {
        return validateX(d) - (mobile ? (d.size * 0.8) / 2 : d.size / 2);
      })
      .attr("y", (d) => {
        return validateY(d) - (mobile ? (d.size * 0.8) / 2 : d.size / 2);
      });

    // update icon positions
    icon
      .attr("x", (d) => {
        return validateX(d) - ((mobile ? d.size * 0.8 : d.size) * 0.6) / 2;
      })
      .attr("y", (d) => {
        return validateY(d) - ((mobile ? d.size * 0.8 : d.size) * 0.6) / 2;
      });
  });

  return {
    destroy: () => {
      simulation.stop();
    },
    nodes: () => {
      return svg.node();
    },
    move: () => {
      simulation.alpha(0.4);
      simulation.restart();
    },
  };
}
