setTimeout(start, 3000);

function start() {

  watching = setInterval(function () {
    //console.log("Watching!")
    if (document.querySelector('[data-self-name="You"]') || document.querySelector('[data-self-name="Você"]')) {
      console.log("Found!")

      setTimeout(check, 3000)
      clearInterval(watching)
    }
  }, 5000)

  function check() {
    if (document.querySelector('[data-self-name="You"]')) {
      if (document.querySelector('[data-self-name="You"]').textContent == 'You') {
        if (document.querySelector('[data-self-name="You"]').textContent == 'You') {
          you = document.querySelector('[data-self-name="You"]')
          you.parentNode.parentNode.parentNode.parentNode.remove()
        }
      }
    }

    else if (document.querySelector('[data-self-name="Você"]')) {
      if (document.querySelector('[data-self-name="Você"]').textContent == 'Você') {
        if (document.querySelector('[data-self-name="Você"]').textContent == 'Você') {
          voce = document.querySelector('[data-self-name="Você"]')
          voce.parentNode.parentNode.parentNode.parentNode.remove()
        }
      }

    }

  }

}