import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

console.log(Amplify.configure());