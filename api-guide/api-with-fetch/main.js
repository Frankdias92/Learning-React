const container = document.querySelector('#postsBlog')
const searchForm = document.querySelector('.searchPosts')

// get Fetch
const renderPosts = async (nameF) => {
  let url = "http://localhost:3000/posts"

  // if (nameF) {
  //   url += `?${nameF}`
  // }

  const res = await fetch(url)
  const posts = await res.json()

  let renderTemplate = '';
  posts.map(posts => {
    renderTemplate += `
      <div class='post'>
        <h2>${posts.title}</h2>
        <p><small>${posts.likes}</small></p>
        <p>${posts.body.slice(0, 200)}</p>
        <a href="details.html?id=${posts.id}">more...</a>
      </div>
    `
  })
  
  console.log(posts)
  container.innerHTML = renderTemplate
}

// searchForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   renderPosts(searchForm.nameF.value.trim())
// })

window.addEventListener('DOMContentLoaded', () => renderPosts(''))

