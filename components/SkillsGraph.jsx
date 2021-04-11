import React, { useEffect, useRef, useCallback } from "react";
import { runForceGraph } from "../components/GraphGenerator";
import styles from "./forceGraph.module.css";

const data = {
  nodes: [
    {
      id: "Web development",
      size: 160,
      color: "#5bd4a3",
      type: "subject",
      text: "White",
      group: 1,
    },
    {
      id: "Back-end",
      size: 110,
      color: "#313699",
      type: "subject",
      text: "White",
      group: 1,
    },
    {
      id: "Front-end",
      size: 130,
      color: "#f0a04a",
      type: "subject",
      text: "White",
      group: 1,
    },
    {
      id: "Vue",
      size: 80,
      color: "#f5f5f5",
      type: "tool",
      icon: "/vue.svg",
      group: 1,
    },
    {
      id: "React",
      size: 100,
      color: "#f5f5f5",
      type: "tool",
      icon: "/react.svg",
      group: 1,
    },
    {
      id: "HTML",
      size: 80,
      color: "#f5f5f5",
      type: "tool",
      icon: "/html.svg",
      group: 1,
    },
    {
      id: "CSS",
      size: 90,
      color: "#f5f5f5",
      type: "tool",
      icon: "/css.svg",
      group: 1,
    },
    {
      id: "JavaScript",
      size: 110,
      color: "#f5f5f5",
      type: "tool",
      icon: "/javascript.svg",
      group: 1,
    },
    {
      id: "Software architecture",
      size: 110,
      color: "#fcd303",
      type: "subject",
      text: "Black",
      group: 2,
    },
    {
      id: "Testing",
      size: 70,
      color: "#e8314c",
      type: "subject",
      text: "White",
      group: 2,
    },
    {
      id: "UX",
      size: 50,
      color: "#9d24ad",
      type: "subject",
      text: "White",
      group: 1,
    },
    {
      id: "UI",
      size: 50,
      color: "#e831a2",
      type: "subject",
      text: "White",
      group: 1,
    },
    {
      id: "NextJS",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/nextjs.svg",
      group: 1,
    },
    {
      id: "Cloud computing",
      size: 90,
      color: "#73a9f5",
      type: "subject",
      text: "White",
      group: 2,
    },
    {
      id: "AWS",
      size: 70,
      color: "#f5f5f5",
      type: "tool",
      icon: "/aws.svg",
      group: 2,
    },
    {
      id: "Node JS",
      size: 90,
      color: "#f5f5f5",
      type: "tool",
      icon: "/nodejs.svg",
      group: 1,
    },
    {
      id: "Django",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/django.svg",
      group: 1,
    },
    {
      id: "Mongo",
      size: 70,
      color: "#f5f5f5",
      type: "tool",
      icon: "/mongo.svg",
      group: 1,
    },
    {
      id: "PostgreSQL",
      size: 70,
      color: "#f5f5f5",
      type: "tool",
      icon: "/postgresql.svg",
      group: 1,
    },
    {
      id: "Python",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/python.svg",
      group: 1,
    },
    {
      id: "Rabbit MQ",
      size: 60,
      color: "#f5f5f5",
      type: "tool",
      icon: "/rabbitmq.svg",
      group: 1,
    },
    {
      id: "Circle CI",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/circleci.svg",
      group: 1,
    },
    {
      id: "Cypress",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/cypress.svg",
      group: 1,
    },
    {
      id: "Firebase",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/firebase.svg",
      group: 2,
    },
    {
      id: "GitHub",
      size: 60,
      color: "#f5f5f5",
      type: "tool",
      icon: "/github.svg",
      group: 1,
    },
    {
      id: "Heroku",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/heroku.svg",
      group: 2,
    },
    {
      id: "Java",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/java.svg",
      group: 1,
    },
    {
      id: "TypeScript",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/typescript.svg",
      group: 1,
    },
    {
      id: "GraphQL",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/graphql.svg",
      group: 1,
    },
    {
      id: "Mocha",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/mocha.svg",
      group: 1,
    },
  ],
  links: [
    {
      source: "Web development",
      target: "Front-end",
      value: 200,
    },
    {
      source: "Web development",
      target: "Back-end",
      value: 200,
    },
    {
      source: "Testing",
      target: "Web development",
      value: 200,
    },
    {
      source: "React",
      target: "Front-end",
      value: 5,
    },
    {
      source: "React",
      target: "NextJS",
      value: 0,
    },
    {
      source: "Vue",
      target: "Front-end",
      value: 5,
    },
    {
      source: "HTML",
      target: "Front-end",
      value: 5,
    },
    {
      source: "CSS",
      target: "Front-end",
      value: 5,
    },
    {
      source: "JavaScript",
      target: "Front-end",
      value: 10,
    },
    {
      source: "JavaScript",
      target: "Back-end",
      value: 15,
    },
    {
      source: "UX",
      target: "Front-end",
      value: 30,
    },
    {
      source: "UI",
      target: "Front-end",
      value: 30,
    },
    {
      source: "Software architecture",
      target: "Web development",
      value: 100,
    },
    {
      source: "Software architecture",
      target: "Cloud computing",
      value: 100,
    },
    {
      source: "Web development",
      target: "Cloud computing",
      value: 100,
    },
    {
      source: "Software architecture",
      target: "AWS",
      value: 5,
    },
    {
      source: "Cloud computing",
      target: "AWS",
      value: 5,
    },
    {
      source: "JavaScript",
      target: "Node JS",
      value: 5,
    },
    {
      source: "Back-end",
      target: "Node JS",
      value: 5,
    },
    {
      source: "Back-end",
      target: "Django",
      value: 5,
    },
    {
      source: "Back-end",
      target: "Python",
      value: 5,
    },
    {
      source: "Django",
      target: "Python",
      value: 5,
    },
    {
      source: "Back-end",
      target: "Mongo",
      value: 5,
    },
    {
      source: "Back-end",
      target: "Rabbit MQ",
      value: 5,
    },
    {
      source: "Back-end",
      target: "TypeScript",
      value: 5,
    },
    {
      source: "Back-end",
      target: "PostgreSQL",
      value: 5,
    },
    {
      source: "Back-end",
      target: "GraphQL",
      value: 5,
    },
    {
      source: "Back-end",
      target: "Java",
      value: 5,
    },
    {
      source: "Testing",
      target: "Cypress",
      value: 5,
    },
    {
      source: "Testing",
      target: "Mocha",
      value: 5,
    },
    {
      source: "Testing",
      target: "Circle CI",
      value: 5,
    },
    {
      source: "Cloud computing",
      target: "Heroku",
      value: 5,
    },
    {
      source: "Cloud computing",
      target: "Firebase",
      value: 5,
    },
    {
      source: "Web development",
      target: "GitHub",
      value: 5,
    },
  ],
};

export default function ForceGraph() {
  const containerRef = useRef(null);
  useEffect(() => {
    let destroyFn;

    if (containerRef.current) {
      const { destroy } = runForceGraph(
        containerRef.current,
        data.links,
        data.nodes,
        nodeHoverTooltip
      );
      destroyFn = destroy;
    }

    return destroyFn;
  }, []);

  const nodeHoverTooltip = useCallback((node) => {
    return `<div>${node.id}</div>`;
  }, []);

  return <div ref={containerRef} className={styles.container} />;
}
