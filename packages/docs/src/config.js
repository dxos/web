import 'regenerator-runtime';
import 'setimmediate';

import { Config, Envs, Defaults, Dynamics } from '@dxos/config';

export const configProvider = async () => new Config(await Dynamics(), Envs(), Defaults());
