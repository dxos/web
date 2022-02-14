//
// Copyright 2021 DXOS.org
//
import 'setimmediate';
import { ResourceRecord, RegistryDataRecord } from '@dxos/registry-client';
import { useEffect, useMemo, useState } from 'react';
import { ShowcaseItem, SHOWCASE_APPS } from '../data';
import { createMockRegistry } from '../utils';

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

const BASE_URL = 'https://enterprise.kube.dxos.network/app/';

export const useShowcaseRecords = () => { 
  const [resources, setResources] = useState<ShowcaseItem[]>([]);
  const registry = useMemo(() => createMockRegistry(SHOWCASE_APPS), []);

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
      
      const showcaseResources = resourceRecords
      .filter((resource): resource is AppResource => !!resource)
      .map(({ resource, record }) => {
        const id = resource.id.toString();
        return {
          id,
          title: record.data.displayName || id,
          description: record.meta.description,
          location: `${BASE_URL}${id}`,
          tags: record.data.keywords
        }
      });
      setResources(showcaseResources);
    });
  }, []);

  return resources;
}