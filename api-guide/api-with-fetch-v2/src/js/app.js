const url = "http://localhost:3000"

const loadingResource = document.querySelector('.loading')
const postsCont = document.querySelector('#postsContainer')

const newPost = document.querySelector('#newPostForm')
let titleInput = document.querySelector('[name="post"]')
let bodyInputPost = document.querySelector('[name="body"]')

const commentForm = document.querySelector('#comment-form')
const profileInput = document.querySelector('#profile-form')
const bodyInput = document.querySelector('#body-form')

// SET PAGE POST
const mainPage = document.querySelector('#mainContainer')
const publis = document.querySelector('.publis')
const commentsContainer = document.querySelector('.containerComments')

// GET Id FROM URL
const urlSearch = new URLSearchParams(window.location.search) // acess to params url
const postId = urlSearch.get('id')


// GET ALL POSTS
async function getAllPosts() {
  const res = await fetch(`${url}/posts`)
  // console.log(res) // return response from server

  const data = await res.json()
  // console.log('data from server: ', data) // return all data from res, get all arrays

  const posts = data
  // console.log('Posts: ', posts) //

  loadingResource.classList.add('hide')

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
    
    postsCont.appendChild(div)
  })

}

// GET INDIVIDUAL 'POST'
async function getPost(id) {
  const [resPost, resComments, resProfile] = await Promise.all(
    [
      fetch(`${url}/posts/?id=${id}`),
      fetch(`${url}/comments/?postId=${id}`),
      fetch(`${url}/profile`)
    ]
  )
    
  loadingResource.classList.add('hide')
  mainPage.classList.remove('hide')

  const dataPost = await resPost.json()
  const dataComments = await resComments.json()
  // const dataProfile = await resProfile.json()
  
  const posts = dataPost
  const comments = Object.values(dataComments)

  // console.log('profile type: ', typeof comments)

  posts.forEach((post) => {
    const title = document.createElement('h1')
    const body = document.createElement('p')

    title.innerText = post.title
    body.innerText = post.body

    publis.appendChild(title)
    publis.appendChild(body)
  })

  comments.forEach((comment) => {
    createComment(comment)
  })
}

function createComment(comment) {
  const div = document.createElement('div')
  const nameProfile = document.createElement('h2')
  const commentText = document.createElement('p')

  nameProfile.innerText = comment.name || 'Anonymous'
  commentText.innerText = comment.text

  div.appendChild(nameProfile)
  div.appendChild(commentText)

  commentsContainer.appendChild(div)
}

async function sendNewPost(sendPost) {
    const res = await fetch(`${url}/posts`,
    {
      method: "POST",
      body: sendPost,
      headers: { 'Content-Type': "application/json" }
    });
  const data = await res.json();
    
  console.log('Resposta do servidor:', data);
}

async function postComment(comment) {
  const res = await fetch(`${url}/comments/?id=${postId}/comments`,
    {
      method: "POST",
      body: comment,
      headers: {
      "content-type": "application/json"
    }
  })

  const data = await res.json()
}


if (!postId) {
  getAllPosts()

  // ADD NEW POST
  newPost.addEventListener('submit', (e) => {
    e.preventDefault()
    let sendPost = {
    title: titleInput.value,
    body: bodyInputPost.value
    }
    sendPost = JSON.stringify(sendPost)
    sendNewPost(sendPost)
  })

} else {
  getPost(postId)

  // ADD NEW COMMENT
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let comment = {
      name: profileInput.value,
      text: bodyInput.value,
      postId: postId
    }

    comment = JSON.stringify(comment)

    postComment(comment)
  })
}
