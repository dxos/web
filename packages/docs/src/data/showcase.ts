export interface ShowcaseItem {
  id: string
  title: string
  location?: string
  description?: string
  tags?: string[]
}

export const SHOWCASE_APPS: ShowcaseItem[] = [
  {
    name: 'dxos:app.demos',
    displayName: 'Demos',
    description: 'Code examples using DXOS Stack.',
    hash: 'https://qa-dxos-demos.netlify.com',
    tags: ['DXOS']
  },
  {
    name: 'dxos:app.braneframe',
    displayName: 'Braneframe',
    description: 'Collaborative Web3 Platform.',
    hash: 'https://qa-dxos-demos.netlify.com',
    tags: ['DXOS', 'App']
  },
  {
    name: 'dxos:app.chess',
    displayName: 'Chess',
    hash: 'https://qa-dxos-demos.netlify.com',
    tags: ['DXOS', 'App']
  },
  {
    name: 'dxos:app.tasks',
    displayName: 'Tasks',
    hash: 'https://qa-dxos-demos.netlify.com',
    tags: ['DXOS', 'Frame']
  },
  {
    name: 'dxos:app.kanban',
    displayName: 'Kanban',
    hash: 'https://qa-dxos-demos.netlify.com',
    tags: ['DXOS', 'Frame']
  },
  {
    name: 'dxos:app.calendar',
    displayName: 'Calendar',
    description: 'Web3 Calendar for everyone.',
    hash: 'https://qa-dxos-demos.netlify.com',
    tags: ['Productivity']
  }
];
