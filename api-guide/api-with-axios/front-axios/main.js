const url = "http://localhost:5500/api"

function getUser() {
  axios.get(url)
  .then(res => {
    const data = res.data
    renderResults.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error))
}

getUser()