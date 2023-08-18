const setTitle = (title: string | null = null) => {
  if (title == null) {
    document.title = `Escoteiros.app`
  } else {
    document.title = `Escoteiros.app | ${title}`
  }
}
export default setTitle
