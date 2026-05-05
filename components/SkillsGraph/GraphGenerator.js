import * as d3 from "d3";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./forceGraph.module.css";

export function runForceGraph(
  container,
  linksData,
  nodesData,
  nodeHoverTooltip,
  mediumBreakPoint,
  smallBreakpoint
) {
  const links = linksData.map((d) => Object.assign({}, d));
  const nodes = nodesData.map((d) => Object.assign({}, d));

  const managementSeedIds = new Set([
    "Technical Management",
    "Leadership",
    "Team Management",
    "Project Management",
    "Agile",
  ]);

  /** Initial [x, y] as fractions of width/height (view is centered at 0,0). */
  const managementSeeds = {
    "Technical Management": [0.17, -0.13],
    Leadership: [0.26, 0.02],
    "Team Management": [0.1, 0.17],
    "Project Management": [0.24, 0.15],
    Agile: [0.03, -0.04],
  };

  /** Front-end hub + tools — lower half of the canvas (positive y). */
  const frontEndSeeds = {
    "Front-end": [-0.04, 0.26],
    React: [-0.14, 0.2],
    NextJS: [-0.2, 0.3],
    Vue: [0.1, 0.22],
    HTML: [-0.1, 0.34],
    CSS: [0.06, 0.32],
    JavaScript: [0.14, 0.14],
    TypeScript: [-0.22, 0.1],
    UX: [0.12, 0.06],
    UI: [-0.26, 0.04],
  };

  const frontEndSatelliteIds = new Set(Object.keys(frontEndSeeds));

  /** AI hub + tools — top-left (cluster 1 x-bias, negative y). */
  const aiSeeds = {
    "Artificial Intelligence": [-0.26, -0.3],
    Langchain: [-0.34, -0.2],
    Phidata: [-0.16, -0.34],
    Cursor: [-0.32, -0.1],
    Claude: [-0.2, -0.18],
    Bedrock: [-0.1, -0.16],
    MCP: [-0.3, -0.26],
  };

  const aiSatelliteIds = new Set(Object.keys(aiSeeds));

  const containerRect = container.getBoundingClientRect();
  const height = containerRect.height;
  const width = containerRect.width;
  const medium = smallBreakpoint < width && width < mediumBreakPoint;
  const small = width < smallBreakpoint;

  const color = (d) => {
    return d.color;
  };

  const getClass = (d) => {
    return styles["text" + d.text];
  };

  const getRadius = (d) => {
    let resizeFactor = 1;
    if (medium) {
      resizeFactor = 0.8;
    } else if (small) {
      resizeFactor = 0.7;
    }
    return (d.size * resizeFactor) / 2;
  };

  const getDistance = (l) => {
    const s = l.source;
    const t = l.target;
    const circleSpace = getRadius(s) + getRadius(t);

    let resizeFactor = 1;
    if (medium) {
      resizeFactor = 0.8;
    } else if (small) {
      resizeFactor = 0.45;
    }

    const touchesFrontEnd = s.id === "Front-end" || t.id === "Front-end";
    const bothSub = s.type === "subject" && t.type === "subject";
    const oneSubOneTool =
      (s.type === "subject" && t.type === "tool") ||
      (s.type === "tool" && t.type === "subject");
    const hasSmallSubject =
      bothSub && (s.size <= 95 || t.size <= 95);

    let subSub = 0;
    if (bothSub) {
      subSub = touchesFrontEnd && hasSmallSubject ? 8 : 48;
    }

    const mgBoth =
      managementSeedIds.has(s.id) && managementSeedIds.has(t.id) ? 52 : 0;

    let zeroBoost = 0;
    if (l.value === 0) {
      const toolTool = s.type === "tool" && t.type === "tool";
      zeroBoost = toolTool ? 22 : 50;
    }

    if (touchesFrontEnd && oneSubOneTool) {
      const valuePart = Math.min(l.value, 22) * resizeFactor * 0.38;
      return circleSpace + 4 + valuePart + subSub + mgBoth + zeroBoost;
    }

    return l.value * resizeFactor + circleSpace + subSub + mgBoth + zeroBoost;
  };

  const getCollision = (d) => {
    let base = d.type === "subject" ? 26 : 18;
    if (frontEndSatelliteIds.has(d.id)) {
      base += 10;
    }
    if (aiSatelliteIds.has(d.id)) {
      base += 8;
    }
    if (managementSeedIds.has(d.id)) {
      base += 18;
    }
    let extraSpace = base;
    if (medium) {
      extraSpace = base - 2;
    } else if (small) {
      extraSpace = base - 4;
    }
    return getRadius(d) + extraSpace;
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
        .strength(1.45)
        .distance(getDistance)
    )
    .force("charge", d3.forceManyBody().strength(-195))
    .force(
      "collision",
      d3.forceCollide().radius(getCollision).iterations(8)
    )
    .force("center", d3.forceCenter(0, 0))
    .velocityDecay(0.5);

  // Bias x toward bands inside the view — not ±width/2 (that stacks every
  // same-cluster node on one vertical line at the edge).
  const clusters = {
    0: 0,
    1: -width * 0.22,
    2: width * 0.26,
    3: width * 0.13,
  };

  nodes.forEach((d) => {
    const mSeed = managementSeeds[d.id];
    const feSeed = frontEndSeeds[d.id];
    const aiSeed = aiSeeds[d.id];
    const seed = mSeed || feSeed || aiSeed;
    if (seed) {
      d.x = width * seed[0];
      d.y = height * seed[1];
      d.vx = 0;
      d.vy = 0;
    }
  });

  simulation.force(
    "x",
    d3
      .forceX()
      .x((d) => clusters[d.cluster] ?? 0)
      .strength(0.11)
  );

  simulation.force(
    "y",
    d3
      .forceY()
      .y((d) => {
        if (managementSeedIds.has(d.id)) return 0;
        if (aiSatelliteIds.has(d.id)) return -height * 0.23;
        if (frontEndSatelliteIds.has(d.id)) return height * 0.2;
        return 0;
      })
      .strength((d) => {
        if (managementSeedIds.has(d.id)) return 0;
        if (aiSatelliteIds.has(d.id) || frontEndSatelliteIds.has(d.id)) {
          return 0.13;
        }
        return 0;
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
    .attr("class", styles.skills_node)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", getRadius)
    .attr("fill", color)
    .call(drag(simulation));

  const label = svg
    .append("g")
    .selectAll("text")
    .data(nodes.filter((n) => n.type === "subject"))
    .enter()
    .append("foreignObject");
  label
    .attr("width", (d) => getRadius(d) * 2)
    .attr("height", (d) => getRadius(d) * 2)
    .append("xhtml:div")
    .attr("class", `flexbox ${styles.subject_container}`)
    .html((d) => {
      const label = d.multiline ? d.id.replace(' ', '<br/>') : d.id
      return `<div class="${styles.subject_label} ${getClass(d)}">${
        label
      }</div>`;
    })
    .call(drag(simulation));

  const icon = svg
    .append("g")
    .attr("class", styles.skills_icon)
    .selectAll("text")
    .data(nodes.filter((n) => n.type === "tool"))
    .enter()
    .append("svg:image")
    .attr("xlink:href", (d) => {
      return d.icon;
    })
    .attr("height", (d) => {
      return getRadius(d) * 2 * 0.6;
    })
    .attr("width", (d) => {
      return getRadius(d) * 2 * 0.6;
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
    const lowerLimmit = -width / 2 + getRadius(d);
    const upperLimmit = width / 2 - getRadius(d);
    if (lowerLimmit < d.x && d.x < upperLimmit) {
      return d.x;
    } else {
      return d.x > 0 ? upperLimmit : lowerLimmit;
    }
  };

  const validateY = (d) => {
    const lowerLimmit = -height / 2 + getRadius(d);
    const upperLimmit = height / 2 - getRadius(d);
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
        return validateX(d) - getRadius(d);
      })
      .attr("y", (d) => {
        return validateY(d) - getRadius(d);
      });

    // update icon positions
    icon
      .attr("x", (d) => {
        return validateX(d) - getRadius(d) * 0.6;
      })
      .attr("y", (d) => {
        return validateY(d) - getRadius(d) * 0.6;
      });
  });

  simulation.alpha(1);
  for (let i = 0; i < 380; i += 1) {
    simulation.tick();
  }

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
