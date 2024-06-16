// const express = require('express');
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// const querystring = require('querystring');
// const router = express.Router();
// const dotenv = require('dotenv');
// const path = require('path');

// dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

// router.get('/auth/linkedin', (req, res) => {
//   const params = {
//     response_type: 'code',
//     client_id: process.env.LINKEDIN_CLIENT_ID,
//     redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
//     scope: 'openid profile email', // Request OpenID Connect scopes
//     state: 'random_state_string' // Optional CSRF protection
//   };

//   const authUrl = `https://www.linkedin.com/oauth/v2/authorization?${querystring.stringify(params)}`;
//   res.redirect(authUrl);
// });

// router.get('/auth/linkedin/callback', async (req, res) => {
//   const { code, state } = req.query;
//   console.log('Received code:', code);
//   console.log('Received state:', state);

//   // Verify state parameter for CSRF protection if needed

//   const tokenParams = {
//     grant_type: 'authorization_code',
//     code,
//     redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
//     client_id: process.env.LINKEDIN_CLIENT_ID,
//     client_secret: process.env.LINKEDIN_CLIENT_SECRET
//   };

//   try {
//     // Exchange authorization code for access token
//     const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: querystring.stringify(tokenParams)
//     });

//     console.log('Token response:', tokenResponse); // Log tokenResponse for debugging

//     if (!tokenResponse.ok) {
//       console.error('Failed to obtain access token:', tokenResponse.statusText);
//       throw new Error('Failed to obtain access token');
//     }

//     const tokenData = await tokenResponse.json();
//     const accessToken = tokenData.access_token;

//     // Now that you have the access token, use it to fetch the user's profile from LinkedIn
//     const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     });

//     console.log('Profile response:', profileResponse); // Log profileResponse for debugging

//     if (!profileResponse.ok) {
//       console.error('Failed to fetch LinkedIn profile:', profileResponse.statusText);
//       throw new Error('Failed to fetch LinkedIn profile');
//     }

//     const profileData = await profileResponse.json();
//     res.json(profileData);
//   } catch (error) {
//     console.error('Error during LinkedIn OAuth flow:', error);
//     res.status(500).json({ error: 'LinkedIn authentication failed' });
//   }
// });

// module.exports = router;
