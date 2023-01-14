import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

const config = {
    userPoolId: 'us-east-1_OgI9b3GOP',
    clientId: '1g3rltbnh4f1pe457d2sfeff8s',
}

console.log(config)

const userPool = new CognitoUserPool({
    UserPoolId: config.userPoolId,
    ClientId:  config.clientId,
});

const userData = {
	Username: 'dkkiuna11@gmail.com',
	Pool: userPool,
};
const userLogins = {
	Username: 'dkkiuna11+1234@gmail.com',
	Password: 'abcd1234',
};
const authenticationDetails = new AuthenticationDetails(userLogins);
const cognitoUser = new CognitoUser(userData);

cognitoUser.authenticateUser(authenticationDetails, {
	onSuccess: function(result) {
		var accessToken = result.getAccessToken().getJwtToken();

        console.log('Successfully logged!', accessToken)

		//POTENTIAL: Region needs to be set if not already set previously elsewhere.
		// AWS.config.region = '<region>';

		// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		// 	IdentityPoolId: '...', // your identity pool id here
		// 	Logins: {
		// 		// Change the key below according to the specific region your user pool is in.
		// 		'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result
		// 			.getIdToken()
		// 			.getJwtToken(),
		// 	},
		// });

		//refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
		// AWS.config.credentials.refresh(error => {
		// 	if (error) {
		// 		console.error(error);
		// 	} else {
		// 		// Instantiate aws sdk service objects now that the credentials have been updated.
		// 		// example: var s3 = new AWS.S3();
		// 		console.log('Successfully logged!');
		// 	}
		// });
	},

	onFailure: function(err) {
		// alert(err.message || JSON.stringify(err));
        console.log('error:: ',err.message || JSON.stringify(err));
	},
});