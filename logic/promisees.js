var p = fetch('/foo')
  .then(res => res.status, err => console.error(err))

p.catch(err => console.error(err))
p.then(status => console.log(status))
p
  .then(status => status.a.b.c)
  .catch(err => console.error(err))