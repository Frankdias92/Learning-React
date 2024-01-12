const url = "http://localhost:5500/api"

const newUser = {
  name: "User2",
  avatarUrl: "https://picsum.photos/200/300",
  city: "Florianopolis"
}
const userUptade = {
  name: "User update",
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
  .then(res => console.log(`Saved user: ${newUser.name}`))
  .catch(error => console.log(error))
}
// getNewUser()

function updateUser() {
  axios.put(`${url}/3`, userUptade)
  .then(res => {
    console.log(JSON.stringify(`Update user: ${res.data}`))
  })
  .catch(error => console.log('Erro ao atualizar usuario' + error))
}
updateUser()

function deleteUser() {
  axios.delete(`${url}/11`)
  .then(res => {
    console.log('Usuario excluido')
  })
  .catch(error => console.log('erro ao deletar usuario'))
}
// deleteUser()

function getOneUser() {
  axios.get(`${url}/12`)
  .then(res => {
    const data = res.data
    renderResults.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error))
}
// getOneUser()

