const express = require('express')
const app = express()
const cors = require('cors')

const port = 5500

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(5500, () => console.log(`Starting server on port ${port}`))

app.use(cors())

app.use(express.json())

// Defaul User
let users = [{
  id: 1,
  name: "Franklin Macedo",
  avatarUrl: "https://avatars.githubusercontent.com/u/101531465?v=4",
  city: "Natal"
}]

let posts = [
  {
    id: 1,
    userId: 'First Title',
    content: 'Content of comment'
  }
]

// router API get Users
app.route('/api').get((req, res) => res.json({
  users
}))

app.route('/api/users/:userId').get((req, res) => {
  const userId = req.params.userId
  const user = users.find(user => user.id === userId)

  if (!user) {
    return res.status(404).json('User nor found!')
  }

  // add new router from posts
  const userPosts = posts.filter(post => post.userId === userId)

  res.json({ user, posts: userPosts })
})


// add new user
app.route('/api').post((req, res) => {
  const lastId = users.length > 0 ? users[users.length - 1].id : 0;

  users.push({
    id: lastId + 1,
    name: req.body.name,
    avatarUrl: req.body.avatarUrl,
    city: req.body.city
  })

  users.push(newUser)
  res.json('Saved user')
})

// Update user profile 
app.route('/api/users/:userId').put((req, res) => {
  const userId = req.params.userId
  const user = users.findIndex(user => user.id === userId)

  if (!user) {
    return res.status(404).json({ error: 'User nor found!' })
  }


    user.name = req.body.name,
    user.avatarUrl = req.body.avatarUrl,
    user.city = req.body.city

  res.json("Updated user")
})


// Delete a user
app.route('/api/users/:userId').delete((req, res) => {
  const userId = req.params.id

  users = users.filter(user => user.id !== userId)

  res.json('Deleted User')
})
