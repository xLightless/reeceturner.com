import requests

# Step 1: Replace these values with your LinkedIn app details
client_id = '86zd30ta7gofe0'
client_secret = 'WPL_AP1.etnlILCMCXmSvWej.oZfmPQ=='
redirect_uri = 'YOUR_REDIRECT_URI'
authorization_code = 'YOUR_AUTHORIZATION_CODE'  # This is obtained after user authorization

# Step 2: Exchange authorization code for access token
token_url = 'https://www.linkedin.com/oauth/v2/accessToken'
token_data = {
    'grant_type': 'authorization_code',
    'code': authorization_code,
    'redirect_uri': redirect_uri,
    'client_id': client_id,
    'client_secret': client_secret
}

response = requests.post(token_url, data=token_data)
token_json = response.json()
access_token = token_json['access_token']

# Step 3: Retrieve user profile information
profile_url = 'https://api.linkedin.com/v2/me'
headers = {
    'Authorization': f'Bearer {access_token}'
}

profile_response = requests.get(profile_url, headers=headers)
profile_data = profile_response.json()

# Step 4: Extract user ID
user_id = profile_data['id']
print(f'Your LinkedIn User ID is: {user_id}')
