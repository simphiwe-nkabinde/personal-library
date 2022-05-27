const {OAuth2Client} = require('google-auth-library');
const jwt = require('jsonwebtoken');
CLIENT_ID = "179512870057-p4q575l99rbb1q2atg5mm061gm72qvtk.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);


// verify user login credentials
async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    return payload
}

exports.signin = (req, res) => {
    const googleCredentialtoken = req.body.credential
    const payload = verify(googleCredentialtoken)
    .then(
        data => {
            const userBasic = {
                sub: data.sub,
                name: data.name,
                email: data.email,
                picture: data.picture
            }
            let userToken = jwt.sign(userBasic, 'myreadshelf')

            res.status(200).json({userToken})            
        }
    );

}