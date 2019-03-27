export enum Env {
  Stage = 'stage',
  Prod = 'prod',
}

export interface Connection {
  catalog: string;
  gateway: string;
}

type Connections = { [K in Env]: Connection };

export const connections: Connections = {
  [Env.Stage]: {
    catalog: 'https://api.catalog.stage.manifold.co/v1',
    gateway: 'https://api.stage.manifold.co/v1',
  },
  [Env.Prod]: {
    catalog: 'https://api.catalog.manifold.co/v1',
    gateway: 'https://api.manifold.co/v1',
  },
};