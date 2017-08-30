var os = require("os");
var hostname = os.hostname();

export const facebook = {
  clientID: '288690701611499',
  clientSecret: 'e3cd14bc90a5d4c07ab59e0e3033ff87',
  callbackURL: `http://${hostname}:3000/auth/facebook/callback`,
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};

console.log(`Remember to add ${facebook.callbackURL} as an accepted Callback URL in the Facebook app configuration!`);
