import { useCallback, useEffect } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Position,
  Connection,
} from '@xyflow/react';
import dagre from 'dagre';
import type { GlossaryGraph } from '../../types';

import '@xyflow/react/dist/style.css';
import './glossary-graph-flow.css';

type GlossaryGraphProps = {
  graph: GlossaryGraph;
}

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  dagreGraph.setGraph({ rankdir: 'LR' });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = 'left' as Position;
    node.sourcePosition = 'right' as Position;

    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
  });

  return { nodes, edges };
};

function GlossaryGraphFlow({ graph } : GlossaryGraphProps) {
  const initialNodes: Node[] = graph.nodes.map(node => ({
    id: `${node.id}`,
    data: { label: node.term },
    position: { x: 0, y: 0 },
  }));

  const initialEdges: Edge[] = graph.edges.map(edge => ({
    id: `${edge.source_id}-${edge.target_id}`,
    source: `${edge.source_id}`,
    target: `${edge.target_id}`,
    label: edge.relation_type,
    markerEnd: {
      type: 'arrowclosed',
    } as Edge['markerEnd'],
    className: 'animated-edge',
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  useEffect(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      nodes,
      edges
    );

    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [graph]);

  return (
    <div className="glossary-graph-container">
      <h2 className="glossary-graph-title">Семантический граф</h2>
      <div className="react-flow-wrapper">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        />
      </div>
    </div>
  );
};

export default GlossaryGraphFlow;
