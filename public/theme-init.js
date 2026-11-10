// Applies the stored (or system) theme before first paint to prevent a
// light-mode flash for dark-mode users. Kept as an external file so it
// works under a CSP without 'unsafe-inline'. Also marks the document so
// motion CSS can run without hiding content when JavaScript is absent.
(function () {
  var root = document.documentElement
  root.classList.add('js')
  try {
    var theme = localStorage.getItem('theme')
    var dark =
      theme === 'dark' ||
      ((!theme || theme === 'system') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    root.dataset.theme = dark ? 'dark' : 'light'
    root.classList.add(dark ? 'dark' : 'light')
    root.style.colorScheme = dark ? 'dark' : 'light'
  } catch (e) {
    root.dataset.theme = 'light'
  }
})()
