const container = document.querySelector('#postsBlog');
const searchForm = document.querySelector('.search-bar');

// Função para renderizar os posts
const renderPosts = async (searchValue) => {
  try {
    let url = "http://localhost:3000/posts";

    if (searchValue) {
      url += `?title=${encodeURIComponent(searchValue)}`;
    }

    console.log("Antes da requisição:", url);

    const res = await fetch(url);

    if (!res.ok) {
      console.error('Erro ao buscar posts:', res.status);
      return;
    }

    const posts = await res.json();
    console.log("Dados recebidos:", posts);

    let renderTemplate = '';

    if (Array.isArray(posts) && posts.length > 0) {
      posts.forEach(post => {
        renderTemplate += `
          <div class='post'>
            <h2>${post.title}</h2>
            <p><small>${post.likes}</small></p>
            <p>${post.body.slice(0, 200)}</p>
            <a href="details.html?id=${post.id}">more...</a>
          </div>
        `;
      });
    } else {
      renderTemplate = '<p>Nenhum post encontrado.</p>';
    }

    // console.log("Renderizando template:", renderTemplate);

    container.innerHTML = renderTemplate;

  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};

searchForm.addEventListener('input', (e) => {
  const searchValue = e.target.value.trim().toLowerCase();
  renderPosts(searchValue);
});

window.addEventListener('DOMContentLoaded', () => renderPosts(''));
