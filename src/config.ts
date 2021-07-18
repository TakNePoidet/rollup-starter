import * as dotenv from 'dotenv';
import * as findUp from 'find-up';

dotenv.config({ path: findUp.sync('.env') });
