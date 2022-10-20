export default function _fetch(endpoint: string, method: string, body?: any) {
  const response = fetch(process.env.REACT_APP_API_URL + endpoint || '', {
    headers: new Headers({
      Authorization: 'Bearer ' + localStorage.getItem('access_token') || '',
      'Content-Type': 'application/json',
    }),
    method: method,
    body: JSON.stringify(body),
  })
  return response
    .then((response) => {
      if (response.status == 401) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('logged_in')
        window.location.reload()
      }
      return response.json()
    })
    .then((result) => result)
    .catch((er) => console.log(er))
}
