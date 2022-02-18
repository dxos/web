//
// Copyright 2021 DXOS.org
//

import { useEffect, useState } from 'react';

import { ResourceRecord, RegistryDataRecord, CID } from '@dxos/registry-client';
import { useRegistry } from '@dxos/react-registry-client';

import { SHOWCASE_APPS } from '../data';

// TODO(wittjosiah): Use proto definitions.
export interface App {
  hash: Uint8Array;
  repository?: string;
  repositoryVersion?: string;
  license?: string;
  keywords?: string[];
  displayName?: string;
  contentType?: string[];
  extension?: any;
}

export type AppResource = ResourceRecord<RegistryDataRecord<App>>;

const BASE_URL = 'https://enterprise.kube.dxos.network/ipfs/';

export interface ShowcaseDemo {
  id: string
  location: string
  title: string
  description: string
  tags: string[]
}

export const useShowcaseDemos = () => { 
  const [demos, setDemos] = useState<ShowcaseDemo[]>([]);
  const registry = useRegistry();

  useEffect(() => {
    setImmediate(async () => {
      const resources = await registry.queryResources();
      const resourceRecords = await Promise.all(
        resources.map(async resource => {
          // TODO(wittjosiah): Factor out filtering of bad data to registry-client.
          try {
            return await registry.getResourceRecord(resource.id, 'latest');
          } catch (error: any) {
            console.log(`Failed to get record [${resource.id.toString()}]: ${error.message}`);
          }
        })
      );
      
      const demos = resourceRecords
        .filter((resource): resource is AppResource => !!resource)
        .filter(({ resource }) => SHOWCASE_APPS.includes(resource.id.toString()))
        .map(({ resource, record }) => {
          return {
            id: resource.id.toString(),
            // TODO(wittjosiah): Display name vs. description.
            title: record.meta.description ?? 'Missing name',
            description: resource.id.toString() ?? 'Missing description',
            location: `${BASE_URL}${CID.from(record.data.hash).toString()}`,
            tags: record.data.keywords ?? []
          }
        });

      setDemos(demos);
    });
  }, []);

  return demos;
}