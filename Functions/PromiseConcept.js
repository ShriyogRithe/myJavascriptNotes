function retry(fn, retry = 3, delay = 300) {
  function attempt(retry) {
    return new Promise((resolve, reject) => {
      fn()
        .then(() => resolve('Resolved success'))
        .catch(err => {
          console.log('retring....., ', err, retry)
          if (retry === 0) {
            return reject(err)
          }
          setTimeout(
            () =>
              attempt(retry - 1)
                .then(res => console.log('inside function ', res))
                .catch(err => console.log('inside function  error ', err)),
            delay
          )
        })
    })
  }

  attempt(retry)
    .then(res => console.log('res', res))
    .catch(err => console.log('eeeee', err))
}

function fetchData() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.7
    setTimeout(() => {
      success ? resolve('Data fetched') : reject('Error occured')
    }, 300)
  })
}

retry(fetchData)
