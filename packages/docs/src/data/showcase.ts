export interface ShowcaseItem {
  id: string
  title: string
  location: string
  description?: string
  tags?: string[]
}

// TODO(zarco): Use registry to fetch this data.
// TestRegistryClient
export const examples: ShowcaseItem[] = [
  {
    id: '0001',
    title: 'Demos',
    description: 'Code examples using DXOS Stack.',
    location: 'https://qa-dxos-demos.netlify.com',
    tags: ['DXOS']
  },
  {
    id: '0002',
    title: 'Braneframe',
    description: 'Collaborative Web3 Platform.',
    location: 'https://qa-dxos-demos.netlify.com',
    tags: ['DXOS', 'App']
  },
  {
    id: '0003',
    title: 'Chess',
    location: 'https://qa-dxos-demos.netlify.com',
    tags: ['DXOS', 'App']
  },
  {
    id: '0004',
    title: 'Tasks',
    location: 'https://qa-dxos-demos.netlify.com',
    tags: ['DXOS', 'Frame']
  },
  {
    id: '0005',
    title: 'Kanban',
    location: 'https://qa-dxos-demos.netlify.com',
    tags: ['DXOS', 'Frame']
  },
  {
    id: '0006',
    title: 'Calendar',
    description: 'Web3 Calendar for everyone.',
    location: 'https://qa-dxos-demos.netlify.com',
    tags: ['Productivity']
  }
];