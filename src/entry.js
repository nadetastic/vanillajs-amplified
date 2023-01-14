import { Amplify, Auth } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

console.log(Amplify.configure());

const signIn = async () => {
    try {
        const user = await Auth.signIn('dkkiuna11@gmail.com', 'abcd1234');
        console.log(user);
    } catch (error) {
        console.log('error signing in', error);
    }
}

signIn();