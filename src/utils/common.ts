import { NODE_ENV } from '../constants';

export function getNodeEnv() {
  const nodeEnv = process.env.NODE_ENV ?? NODE_ENV.DEVELOPMENT;
  if (!Object.values(NODE_ENV).includes(nodeEnv as NODE_ENV)) {
    throw new Error('invalid env passed');
  }
  return nodeEnv;
}
