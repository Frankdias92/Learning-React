const url = "http://localhost:3000"

const loadingResource = document.querySelector('.element-loading')
const postsContainer = document.querySelector('#posts-container')

// SET PAGE POST
const mainPage = document.querySelector('#mainContainer')
const publis = document.querySelector('.publis')
const comments = document.querySelector('.containerComments')

// GET Id FROM URL
const urlSearch = new URLSearchParams(window.location.search) // acess to params url
const postId = urlSearch.get('id')


// GET ALL POSTS
async function getAllPosts() {
  const res = await fetch(`${url}/posts`)
  // console.log(res) // return response from server

  const data = await res.json()
  // const posts = await res.json()
  console.log('data from server: ', data) // return all data from res, get all arrays

  const posts = data
  
  console.log('Posts: ', posts) //

  // loadingResource.classList.add('hide')

  posts.map((post) => {
    const div = document.createElement('div')
    const title = document.createElement('h2')
    const body = document.createElement('p')
    const link = document.createElement('a')

    title.innerText = post.title
    body.innerText = post.body
    link.innerText = 'read'
    link.setAttribute('href', `post.html?id=${post.id}`)

    div.appendChild(title)
    div.appendChild(body)
    div.appendChild(link)
    
    postsContainer.appendChild(div) 
  })
}

// GET INDIVIDUAL 'POST'
async function getPost(id) {
  // const res = await fetch(url)
  // const data = await res.json()
  const resPost = await fetch(`${url}/posts/?id=${id}`)
  const dataPost = await resPost.json()

  const posts = dataPost
  console.log('view profile: ', posts)
  // const comments = data.comments
  // const profile = data.profile

  // loadingResource.classList.add('hide')
  // mainPage.classList.remove('hide')

  
posts.forEach((post) => {
  const title = document.createElement('h1')
  const body = document.createElement('p')

  title.innerText = post.title
  body.innerText = post.body

  console.log(title)
  publis.appendChild(title)
  publis.appendChild(body)

})

  console.log('view: ', comments)
  comments.map((comment, profile) => {
    createComment()
  })
}

function createComment(comment, profile) {

  const div = document.createElement('div')
  const profileName = document.createElement('h3')
  const commentBody = document.createElement('p')

  profile.innerText = profile.name
  commentBody.innerText = comment.body

  div.appendChild(profile.Name)
  div.appendChild(commentBody)

  comments.appendChild(div)
}

if (!postId) {
  getAllPosts()
} else {
  getPost(postId)
}