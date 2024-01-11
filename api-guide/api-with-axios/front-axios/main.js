const url = "http://localhost:5500/api"

const newUser = {
  name: "User",
  avatarUrl: "https://picsum.photos/200/300",
  city: "Florianopolis"
}
const userUptade = {
  name: "Update User",
  avatarUrl: "https://picsum.photos/200/300",
  city: "Natal"
}

function getUser() {
  axios.get(url)
  .then(res => {
    const data = res.data
    renderResults.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error))
}
getUser()

function getNewUser() {
  axios.post(url, newUser)
  .then(res => res.data)
  .catch(error => console.log(error))
}
getNewUser()

function updateUser() {
  axios.put(`${url}/3`, userUptade)
  .then(res => {
    console.log(JSON.stringify(res.data))
  })
  .catch(error => console.log('Erro ao atualizar usuario' + error))
}
// updateUser()