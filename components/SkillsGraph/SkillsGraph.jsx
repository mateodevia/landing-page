import React, { useEffect, useRef, useCallback } from "react";
import { runForceGraph } from "./GraphGenerator";
import styles from "./forceGraph.module.css";

const data = {
  nodes: [
    {
      id: "Web development",
      size: 160,
      color: "#5bd4a3",
      type: "subject",
      text: "White",
      cluster: 1,
    },
    {
      id: "Back-end",
      size: 110,
      color: "#313699",
      type: "subject",
      text: "White",
      cluster: 1,
    },
    {
      id: "Front-end",
      size: 130,
      color: "#f0a04a",
      type: "subject",
      text: "White",
      cluster: 1,
    },
    {
      id: "Vue",
      size: 80,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/vue.svg",
      cluster: 1,
    },
    {
      id: "React",
      size: 100,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/react.svg",
      cluster: 1,
    },
    {
      id: "HTML",
      size: 80,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/html.svg",
      cluster: 1,
    },
    {
      id: "CSS",
      size: 90,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/css.svg",
      cluster: 1,
    },
    {
      id: "JavaScript",
      size: 110,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/javascript.svg",
      cluster: 1,
    },
    {
      id: "Software architecture",
      size: 110,
      color: "#fcd303",
      type: "subject",
      text: "Black",
      cluster: 2,
    },
    {
      id: "Testing",
      size: 70,
      color: "#e8314c",
      type: "subject",
      text: "White",
      cluster: 2,
    },
    {
      id: "UX",
      size: 50,
      color: "#9d24ad",
      type: "subject",
      text: "White",
      cluster: 1,
    },
    {
      id: "UI",
      size: 50,
      color: "#e831a2",
      type: "subject",
      text: "White",
      cluster: 1,
    },
    {
      id: "NextJS",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/nextjs.svg",
      cluster: 1,
    },
    {
      id: "Cloud computing",
      size: 90,
      color: "#73a9f5",
      type: "subject",
      text: "White",
      cluster: 2,
    },
    {
      id: "AWS",
      size: 70,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/aws.svg",
      cluster: 2,
    },
    {
      id: "Node JS",
      size: 90,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/nodejs.svg",
      cluster: 1,
    },
    {
      id: "Django",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/django.svg",
      cluster: 1,
    },
    {
      id: "Mongo",
      size: 70,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/mongo.svg",
      cluster: 1,
    },
    {
      id: "PostgreSQL",
      size: 70,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/postgresql.svg",
      cluster: 1,
    },
    {
      id: "Python",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/python.svg",
      cluster: 1,
    },
    {
      id: "Rabbit MQ",
      size: 60,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/rabbitmq.svg",
      cluster: 1,
    },
    {
      id: "Circle CI",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/circleci.svg",
      cluster: 1,
    },
    {
      id: "Cypress",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/cypress.svg",
      cluster: 1,
    },
    {
      id: "Firebase",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/firebase.svg",
      cluster: 2,
    },
    {
      id: "GitHub",
      size: 60,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/github.svg",
      cluster: 1,
    },
    {
      id: "Heroku",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/heroku.svg",
      cluster: 2,
    },
    {
      id: "Java",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/java.svg",
      cluster: 1,
    },
    {
      id: "TypeScript",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/typescript.svg",
      cluster: 1,
    },
    {
      id: "GraphQL",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/graphql.svg",
      cluster: 1,
    },
    {
      id: "Mocha",
      size: 40,
      color: "#f5f5f5",
      type: "tool",
      icon: "/SkillsGraph/mocha.svg",
      cluster: 1,
    },
  ],
  links: [
    {
      source: "Web development",
      target: "Front-end",
      value: 120,
    },
    {
      source: "Web development",
      target: "Back-end",
      value: 120,
    },
    {
      source: "Testing",
      target: "Web development",
      value: 120,
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
      value: 80,
    },
    {
      source: "Software architecture",
      target: "Cloud computing",
      value: 80,
    },
    {
      source: "Web development",
      target: "Cloud computing",
      value: 80,
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
      const { destroy, move } = runForceGraph(
        containerRef.current,
        data.links,
        data.nodes,
        nodeHoverTooltip,
        769,
        576
      );
      destroyFn = destroy;
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };
      const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
          move();
        }
      };
      // initialize IntersectionObserver
      // and attaching to Load More div
      const observer = new IntersectionObserver(handleObserver, options);
      observer.observe(containerRef.current);
    }

    return destroyFn;
  }, []);

  const nodeHoverTooltip = useCallback((node) => {
    return `<div>${node.id}</div>`;
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <div ref={containerRef} className={`${styles.container}`} />
    </div>
  );
}
