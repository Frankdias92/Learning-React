const url = "http://localhost:3000/posts"

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
  const res = await fetch(url)
  console.log(res) // return response from server

  const posts = await res.json()
  console.log(posts) // return all data from res, get all arrays

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
  const [resPost, resComments, resProfile] = await Promise.all(
    [
      fetch(`${url}/${postId}`),
      fetch(`http://localhost:3000/comments/${postId}`),
      fetch(`http://localhost:3000/profile`)
    ]
  )

  const dataPost = await resPost.json() // ARRAY OBJECT POSTS
  const dataComments = await resComments.json() // ARRAY OBJECT COMMENTS
  const dataProfile = await resProfile.json() // ARRAY OBJECT PROFILE
  
  console.log('view profile: ', resProfile.json())
  // loadingResource.classList.add('hide')
  // mainPage.classList.remove('hide')

  const title = document.createElement('h1')
  const body = document.createElement('p')

  title.innerText = dataPost.title
  body.innerText = dataPost.body
  
  publis.appendChild(title)
  publis.appendChild(body)

  // console.log('view: ',dataComments)
  dataComments.map((comment) => {
    createComment()
  })
}

function createComment(comment) {

  const div = document.createElement('div')
  const profile = document.createElement('h3')
  const commentBody = document.createElement('p')

  profile.innerText = profile.name
  commentBody.innerText = comment.body

  div.appendChild(profile)
  div.appendChild(commentBody)

  comments.appendChild(div)
}

if (!postId) {
  getAllPosts()
} else {
  getPost(postId)
}