import { createConnection } from "typeorm";
import * as config from '../../ormconfig.js'

createConnection(config);
