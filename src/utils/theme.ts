export function toggleTheme() {
  const theme = document.body.getAttribute('arco-theme')
  if (theme === 'dark') {
    document.body.removeAttribute('arco-theme')
  }
  else {
    document.body.setAttribute('arco-theme', 'dark')
  }
}
