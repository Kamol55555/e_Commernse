import { users } from '../../fake_db/users'

export function getAllUsers() {
  const registered = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
  return [...users, ...registered]
}

export function registerUser({ name, email, password }) {
  if (getAllUsers().some((u) => u.email === email)) return null

  const registered = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    img: `https://i.pravatar.cc/150?img=${(registered.length % 70) + 1}`,
  }

  registered.push(newUser)
  localStorage.setItem('registeredUsers', JSON.stringify(registered))
  return newUser
}
