export default function () {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
  if (darkThemeMq.matches) {
    document.body.setAttribute('arco-theme', 'dark')
  }
  darkThemeMq.addListener((e) => {
    if (e.matches) {
      document.body.setAttribute('arco-theme', 'dark')
    }
    else {
      document.body.removeAttribute('arco-theme')
    }
  })
}
