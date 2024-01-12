const express = require('express')
const cors = require('cors')

const app = express()

app.listen(5500, () => console.log('Rodando na porta 5500'))

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

app.route('/api/:id').get((req, res) => {
  const userId = req.params.id
  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  // add new router from posts
  const userPosts = posts.filter(post => post.userId === Number(userId))

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
  res.json('Saved user')
})

// Update user profile 
app.route('/api/:id').put((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  const updatedUser = {
    ...user,
    name: req.body.name,
    avatarUrl: req.body.avatarUrl,
    city: req.body.city
  }

  users = users.map(user => {
    if (Number(user.id) === Number(userId)) {
      user = updatedUser
    }
    return user
  })

  res.json("Updated user")
})


// Delete a user
app.route('/api/:id').delete((req, res) => {
  const userId = req.params.id

  users = users.filter(user => Number(user.id) !== Number(userId))

  res.json('Deleted User')
})


// New API Router to Posts
app.route('/api/posts/user/:userId').get((req, res) => {
  const userId = req.params.userId
  const userPosts = posts.filter(post => post.userId === Number(userId)) 

  res.json({ userPosts })
})


// Create router to Posts
app.route('/api/posts').post((req, res) => {
  const lastPostId = posts.length > 0 ? posts[posts.length - 1].id : 0

  const newPost = {
    id: lastPostId + 1,
    userId: req.body.userId,
    content: req.body.content
  }

  posts.push(newPost)
  res.json('new post saved')
})