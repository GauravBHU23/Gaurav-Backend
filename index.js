require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const githubData = {
  "login": "GauravBHU23",
  "id": 149852863,
  "node_id": "U_kgDOCO6Svw",
  "avatar_url": "https://avatars.githubusercontent.com/u/149852863?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/GauravBHU23",
  "html_url": "https://github.com/GauravBHU23",
  "followers_url": "https://api.github.com/users/GauravBHU23/followers",
  "following_url": "https://api.github.com/users/GauravBHU23/following{/other_user}",
  "gists_url": "https://api.github.com/users/GauravBHU23/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/GauravBHU23/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/GauravBHU23/subscriptions",
  "organizations_url": "https://api.github.com/users/GauravBHU23/orgs",
  "repos_url": "https://api.github.com/users/GauravBHU23/repos",
  "events_url": "https://api.github.com/users/GauravBHU23/events{/privacy}",
  "received_events_url": "https://api.github.com/users/GauravBHU23/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Gaurav Kumar ",
  "company": null,
  "blog": "",
  "location": "Varanasi, Uttar Pradesh, India",
  "email": null,
  "hireable": null,
  "bio": "A Computer Science Student at BHU I'm interested in Frontend & Backend Development and Competitive Programming.\r\n\r\nSkills: C, Java, JavaScript, Python, HTML,CSS",
  "twitter_username": null,
  "public_repos": 31,
  "public_gists": 3,
  "followers": 3,
  "following": 7,
  "created_at": "2023-11-04T02:56:00Z",
  "updated_at": "2025-05-04T13:01:34Z"
}

app.get('/', (req, res) => {
    res.send("Welcome to Gaurav");
})

app.get('/facebook', (req, res) => {
    res.send("Welcome to Facebook");
})

app.get('/login', (req, res) => {
    res.send("Welcome to Login");
})

app.get('/signup', (req, res) => {
    res.send("Welcome to SignUp");
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(port, () => {
    console.log(`Example is Listening on port ${port}`);
})
