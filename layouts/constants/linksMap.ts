// type ILinksMap = Array<{ title: string; id: string }>

// Home
// Download
// About us
// ---
// 中文简体
// English
// Português

export const linksMap = [
  { title: 'Home', id: '#section-1', type: 'anchor' },
  { title: 'Download', id: '#section-2', type: 'anchor' },
  { title: 'About us', id: '#section-3', type: 'anchor' },
  // { type: 'break' },
  // { title: '中文简体', type: 'language' },
  // { title: 'English', type: 'language' },
  // { title: 'Português', type: 'language' },
]
const reversedLinksMap = [...linksMap].reverse()

export const findLink = (position: number) => {
  if (position < 200) return linksMap[0] // fix first item on mobile

  const foundLink = reversedLinksMap.find(({ id }) => {
    // @ts-ignore
    const sectionDom = document.querySelector(id) as HTMLElement
    const { offsetTop: sectionTop, clientHeight: sectionHeight } = sectionDom
    if (position >= sectionTop - 100 - sectionHeight / 3) return true
    return false
  })
  return foundLink
}
export default linksMap
