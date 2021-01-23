if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: './' })
    .then(function (reg) {
      console.log('success', reg)
      navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage("this message is from page")
      // reg.active.postMessage("this message is from page, to sw")
    })
    .catch(function (err) {
      console.log('fail', err)
    })
}
