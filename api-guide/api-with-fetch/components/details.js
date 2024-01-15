// javascript for details Post
const id = new URLSearchParams(window.location.search).get('id')
const postItem = document.querySelector('#post-item')
const commentsItem = document.querySelector('#comments-item')
const btnDelete = document.querySelector('.btn-delete')
const form = document.querySelector('form')

const url = `http://localhost:3000/`


const createPost = async (e) => {
  e.preventDefault()

  const newComment = {
    text: form.body.value,
    postId: id
  }

  await fetch(`${url}comments`, {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: { 'Content-Type': 'application/json' }
  })
}

const renderDetails = async () => {
  
  const res = await fetch(`${url}posts/${id}`)
  const post = await res.json()

  const resComment = await fetch(`${url}comments?postId=${id}`)
  const comments = await resComment.json()
  console.log('view:', JSON.stringify(comments.postId))

  const templatePost = `
  <h2>${post.title}</h2>
  <p>${post.body.slice(0, 200)}</p>
  <p><small>${post.likes} Likes</small></p>
  `

  let templateComments = ''
  if (Array.isArray(comments) && comments.length > 0) {
    comments.forEach(comments => {
      templateComments += `
      <p>${comments.text}</p>
      `
    })
  } else {
    templateComments = `<p>nenhum comentario</p>`
  }

  postItem.innerHTML = templatePost
  commentsItem.innerHTML = templateComments
}



btnDelete.addEventListener('click', async (e) => {
  const res = await fetch(`${url}posts/${id}`, {
    method: 'DELETE',
  })
  window.location.replace('index.html')
})

form.addEventListener('submit', createPost)
window.addEventListener('DOMContentLoaded', () => renderDetails())
