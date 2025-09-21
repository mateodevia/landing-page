import React, { useEffect, useRef, useCallback } from 'react';
import { runForceGraph } from './GraphGenerator';
import styles from './forceGraph.module.css';
import useResizeObserver from '../../hooks/useResizeObserver';

const data = {
  nodes: [
    {
      id: 'Software Engineering',
      size: 160,
      color: '#5bd4a3',
      type: 'subject',
      text: 'White',
      cluster: 1,
    },
    {
      id: 'Back-end',
      size: 150,
      color: '#313699',
      type: 'subject',
      text: 'White',
      cluster: 1,
    },
    {
      id: 'Front-end',
      size: 110,
      color: '#f0a04a',
      type: 'subject',
      text: 'White',
      cluster: 1,
    },
    {
      id: 'Vue',
      size: 60,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/vue.svg',
      cluster: 1,
    },
    {
      id: 'React',
      size: 100,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/react.svg',
      cluster: 1,
    },
    {
      id: 'HTML',
      size: 80,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/html.svg',
      cluster: 1,
    },
    {
      id: 'CSS',
      size: 90,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/css.svg',
      cluster: 1,
    },
    {
      id: 'JavaScript',
      size: 80,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/javascript.svg',
      cluster: 1,
    },
    {
      id: 'TypeScript',
      size: 100,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/typescript.svg',
      cluster: 1,
    },
    {
      id: 'Software architecture',
      size: 150,
      color: '#fcd303',
      type: 'subject',
      text: 'Black',
      cluster: 2,
    },
    {
      id: 'Testing',
      size: 140,
      color: '#e8314c',
      type: 'subject',
      text: 'White',
      cluster: 2,
    },
    {
      id: 'UX',
      size: 50,
      color: '#9d24ad',
      type: 'subject',
      text: 'White',
      cluster: 1,
    },
    {
      id: 'UI',
      size: 80,
      color: '#e831a2',
      type: 'subject',
      text: 'White',
      cluster: 1,
    },
    {
      id: 'NextJS',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/nextjs.svg',
      cluster: 1,
    },
    {
      id: 'Artificial Intelligence',
      size: 130,
      color: '#23b723',
      type: 'subject',
      text: 'White',
      cluster: 1,
    },
    {
      id: 'Langchain',
      size: 60,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/langchain.svg',
      cluster: 1,
    },
    {
      id: 'Phidata',
      size: 60,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/phidata.svg',
      cluster: 1,
    },
    {
      id: 'Cursor',
      size: 60,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/cursor.svg',
      cluster: 1,
    },
    {
      id: 'Claude Code',
      size: 60,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/claude.svg',
      cluster: 1,
    },
    {
      id: 'MCP',
      size: 60,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/mcp.svg',
      cluster: 1,
    },
    {
      id: 'Cloud computing',
      size: 100,
      color: '#73a9f5',
      type: 'subject',
      text: 'White',
      cluster: 2,
    },
    {
      id: 'AWS',
      size: 70,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/aws.svg',
      cluster: 2,
    },
    {
      id: 'Node JS',
      size: 90,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/nodejs.svg',
      cluster: 1,
    },
    {
      id: 'Django',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/django.svg',
      cluster: 1,
    },
    {
      id: 'Mongo',
      size: 70,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/mongo.svg',
      cluster: 1,
    },
    {
      id: 'PostgreSQL',
      size: 90,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/postgresql.svg',
      cluster: 1,
    },
    {
      id: 'Python',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/python.svg',
      cluster: 1,
    },
    {
      id: 'Rabbit MQ',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/rabbitmq.svg',
      cluster: 1,
    },
    {
      id: 'Circle CI',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/circleci.svg',
      cluster: 1,
    },
    {
      id: 'Cypress',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/cypress.svg',
      cluster: 1,
    },
    {
      id: 'Firebase',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/firebase.svg',
      cluster: 2,
    },
    {
      id: 'GitHub',
      size: 60,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/github.svg',
      cluster: 1,
    },
    {
      id: 'Heroku',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/heroku.svg',
      cluster: 2,
    },
    {
      id: 'Java',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/java.svg',
      cluster: 1,
    },
    {
      id: 'GraphQL',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/graphql.svg',
      cluster: 1,
    },
    {
      id: 'Mocha',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/mocha.svg',
      cluster: 1,
    },
    {
      id: 'Jest',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/jest.svg',
      cluster: 1,
    },
    {
      id: 'SQS',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/sqs.svg',
      cluster: 2,
    },
    {
      id: 'SNS',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/sns.svg',
      cluster: 2,
    },
    {
      id: 'Lambda',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/lambda.svg',
      cluster: 2,
    },
    {
      id: 'S3',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/s3.svg',
      cluster: 2,
    },
    {
      id: 'ECS',
      size: 40,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/ecs.svg',
      cluster: 2,
    },
    {
      id: 'Technical Management',
      size: 130,
      color: '#A13AF2',
      type: 'subject',
      text: 'White',
      cluster: 2,
    },
    {
      id: 'Leadership',
      size: 100,
      color: '#BE79F3',
      type: 'subject',
      text: 'White',
      cluster: 2,
    },
    {
      id: 'Team Management',
      size: 110,
      color: '#BE79F3',
      type: 'subject',
      text: 'White',
      cluster: 2,
    },
    {
      id: 'Project Management',
      size: 110,
      color: '#BE79F3',
      type: 'subject',
      text: 'White',
      cluster: 2,
    },
    {
      id: 'Agile',
      size: 80,
      color: '#BE79F3',
      type: 'subject',
      text: 'White',
      cluster: 2,
    },
    {
      id: 'Blockchain',
      size: 110,
      color: '#00bdda',
      type: 'subject',
      text: 'White',
      cluster: 2,
    },
    {
      id: 'Solidity',
      size: 60,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/solidity.svg',
      cluster: 1,
    },
    {
      id: 'Ethereum',
      size: 60,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/ethereum.svg',
      cluster: 1,
    },
    {
      id: 'MetaMask',
      size: 60,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/metamask.svg',
      cluster: 1,
    },
    {
      id: 'Hardhat',
      size: 60,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/hardhat.svg',
      cluster: 1,
    },
    {
      id: 'Vercel',
      size: 60,
      color: '#f5f5f5',
      type: 'tool',
      icon: '/SkillsGraph/vercel.svg',
      cluster: 1,
    },
  ],
  links: [
    {
      source: 'Software Engineering',
      target: 'Front-end',
      value: 120,
    },
    {
      source: 'Software Engineering',
      target: 'Back-end',
      value: 120,
    },
    {
      source: 'Testing',
      target: 'Software Engineering',
      value: 120,
    },
    {
      source: 'Software Engineering',
      target: 'Artificial Intelligence',
      value: 120,
    },
    {
      source: 'Software Engineering',
      target: 'Blockchain',
      value: 120,
    },
    {
      source: 'React',
      target: 'Front-end',
      value: 5,
    },
    {
      source: 'React',
      target: 'NextJS',
      value: 0,
    },
    {
      source: 'Vue',
      target: 'Front-end',
      value: 5,
    },
    {
      source: 'HTML',
      target: 'Front-end',
      value: 5,
    },
    {
      source: 'CSS',
      target: 'Front-end',
      value: 5,
    },
    {
      source: 'TypeScript',
      target: 'Front-end',
      value: 10,
    },
    {
      source: 'TypeScript',
      target: 'Back-end',
      value: 15,
    },
    {
      source: 'UX',
      target: 'Front-end',
      value: 30,
    },
    {
      source: 'UI',
      target: 'Front-end',
      value: 30,
    },
    {
      source: 'Software architecture',
      target: 'Software Engineering',
      value: 80,
    },
    {
      source: 'Software architecture',
      target: 'Cloud computing',
      value: 80,
    },
    {
      source: 'Software Engineering',
      target: 'Cloud computing',
      value: 80,
    },
    {
      source: 'Software architecture',
      target: 'AWS',
      value: 5,
    },
    {
      source: 'Cloud computing',
      target: 'AWS',
      value: 5,
    },
    {
      source: 'TypeScript',
      target: 'Node JS',
      value: 5,
    },
    {
      source: 'Back-end',
      target: 'Node JS',
      value: 5,
    },
    {
      source: 'Back-end',
      target: 'Django',
      value: 5,
    },
    {
      source: 'Back-end',
      target: 'Python',
      value: 5,
    },
    {
      source: 'Django',
      target: 'Python',
      value: 5,
    },
    {
      source: 'Back-end',
      target: 'Mongo',
      value: 5,
    },
    {
      source: 'Back-end',
      target: 'Rabbit MQ',
      value: 5,
    },
    {
      source: 'TypeScript',
      target: 'JavaScript',
      value: 5,
    },
    {
      source: 'Back-end',
      target: 'PostgreSQL',
      value: 5,
    },
    {
      source: 'Back-end',
      target: 'GraphQL',
      value: 5,
    },
    {
      source: 'Back-end',
      target: 'Java',
      value: 5,
    },
    {
      source: 'Testing',
      target: 'Cypress',
      value: 5,
    },
    {
      source: 'Testing',
      target: 'Mocha',
      value: 5,
    },
    {
      source: 'Testing',
      target: 'Circle CI',
      value: 5,
    },
    {
      source: 'Cloud computing',
      target: 'Heroku',
      value: 5,
    },
    {
      source: 'Cloud computing',
      target: 'Firebase',
      value: 5,
    },
    {
      source: 'Software Engineering',
      target: 'GitHub',
      value: 5,
    },
    {
      source: 'Technical Management',
      target: 'Software Engineering',
      value: 20,
    },
    {
      source: 'Technical Management',
      target: 'Leadership',
      value: 20,
    },
    {
      source: 'Technical Management',
      target: 'Team Management',
      value: 20,
    },
    {
      source: 'Technical Management',
      target: 'Project Management',
      value: 20,
    },
    {
      source: 'Agile',
      target: 'Technical Management',
      value: 20,
    },
    {
      source: 'Agile',
      target: 'Software Engineering',
      value: 5,
    },
    {
      source: 'Leadership',
      target: 'Team Management',
      value: 20,
    },
    {
      source: 'Testing',
      target: 'Jest',
      value: 5,
    },
    {
      source: 'AWS',
      target: 'S3',
      value: 5,
    },
    {
      source: 'AWS',
      target: 'Lambda',
      value: 5,
    },
    {
      source: 'AWS',
      target: 'SQS',
      value: 5,
    },
    {
      source: 'AWS',
      target: 'SNS',
      value: 5,
    },
    {
      source: 'AWS',
      target: 'ECS',
      value: 5,
    },
    {
      source: 'Artificial Intelligence',
      target: 'Langchain',
      value: 5,
    },
    {
      source: 'Artificial Intelligence',
      target: 'Phidata',
      value: 5,
    },
    {
      source: 'Artificial Intelligence',
      target: 'Cursor',
      value: 5,
    },
    {
      source: 'Artificial Intelligence',
      target: 'Claude Code',
      value: 5,
    },
    {
      source: 'Artificial Intelligence',
      target: 'MCP',
      value: 5,
    },
    {
      source: 'Blockchain',
      target: 'Solidity',
      value: 5,
    },
    {
      source: 'Blockchain',
      target: 'Ethereum',
      value: 5,
    },
    {
      source: 'Blockchain',
      target: 'MetaMask',
      value: 5,
    },
    {
      source: 'Blockchain',
      target: 'Hardhat',
      value: 5,
    },
    {
      source: 'Cloud computing',
      target: 'Vercel',
      value: 5,
    },
  ],
};

export default function ForceGraph() {
  const containerRef = useRef(null);
  const dimensions = useResizeObserver(containerRef);

  useEffect(() => {
    let destroyFn;
    let observer;

    if (containerRef.current && dimensions) {
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
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
        rootMargin: '0px',
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
      observer = new IntersectionObserver(handleObserver, options);
      observer.observe(containerRef.current);
    }

    return () => {
      if (destroyFn) {
        destroyFn();
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [dimensions, nodeHoverTooltip]);

  const nodeHoverTooltip = useCallback((node) => {
    return `<div>${node.id}</div>`;
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <div ref={containerRef} className={`${styles.container}`} />
    </div>
  );
}
