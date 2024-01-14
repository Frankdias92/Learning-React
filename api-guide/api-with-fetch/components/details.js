// javascript for details Post
const id = new URLSearchParams(window.location.search).get('id')
const postItem = document.querySelector('#post-item')
const btnDelete = document.querySelector('.btn-delete')


const url = "http://localhost:3000/posts"


const renderDetails = async (searchName) => {

  const res = await fetch(`${url}/${id}`)
  const post = await res.json()

  const template = `
    <h2>${post.title}</h2>
    <p>${post.body.slice(0, 200)}</p>
    <p><small>${post.likes} Likes</small></p>
  `
    
  postItem.innerHTML = template
  console.log(post)
}

btnDelete.addEventListener('click', async (e) => {
  const res = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
  window.location.replace('index.html')
})



window.addEventListener('DOMContentLoaded', () => renderDetails())