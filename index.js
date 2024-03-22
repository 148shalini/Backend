require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData={
  
    "login": "148shalini",
    "id": 101161992,
    "node_id": "U_kgDOBgecCA",
    "avatar_url": "https://avatars.githubusercontent.com/u/101161992?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/148shalini",
    "html_url": "https://github.com/148shalini",
    "followers_url": "https://api.github.com/users/148shalini/followers",
    "following_url": "https://api.github.com/users/148shalini/following{/other_user}",
    "gists_url": "https://api.github.com/users/148shalini/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/148shalini/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/148shalini/subscriptions",
    "organizations_url": "https://api.github.com/users/148shalini/orgs",
    "repos_url": "https://api.github.com/users/148shalini/repos",
    "events_url": "https://api.github.com/users/148shalini/events{/privacy}",
    "received_events_url": "https://api.github.com/users/148shalini/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-03-08T03:55:59Z",
    "updated_at": "2024-03-22T10:06:06Z"
  
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('Hellodotcom!')
  })
app.get('/login', (req, res) => {
  res.send('<h1> plz login shalini</h1>')
})
app.get('/youtube', (req, res) => {
    res.send('<h1>  shalini</h1>')
  })
  app.get('/github',(req,res)=>{
    res.json(githubData)
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})