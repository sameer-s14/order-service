import { config } from 'dotenv';
import { NODE_ENV } from './src/constants';
import { getNodeEnv } from './src/utils';

const nodeEnv = getNodeEnv();
const envPath = nodeEnv === NODE_ENV.DEVELOPMENT ? '' : `.${nodeEnv}`;
config({ path: '.env' + envPath, debug: true });

export default {
  client: process.env.DATABASE_CLIENT,
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
  },
  migrations: {
    directory: 'src/database/migrations',
  },
};
