const container = document.querySelector('#postsBlog')

// get Fetch
const renderPosts = async () => {
  const url = "http://localhost:3000/posts"

  const res = await fetch(url)
  const posts = await res.json()

  let renderTemplate = '';
  posts.map(posts => {
    renderTemplate += `
      <div class='post'>
        <h2>${posts.title}</h2>
        <p><small>${posts.likes}</small></p>
        <p>${posts.body.slice(0, 200)}</p>
        <a href="./components/details.html?id=${posts.id}">more...</a>
      </div>
    `
  })

  container.innerHTML = renderTemplate
}
const name = 
window.addEventListener('DOMContentLoaded', () => renderPosts())


// javascript for details Post
const id = new URLSearchParams(window.location.search).get('id')

const renderDetails = async () => {
  const res = await fetch("http://localhost:3000/posts" + id)
  const post = await res.json()

  console.log(post)
}

window.addEventListener('DOMContentLoaded', () => renderDetails())