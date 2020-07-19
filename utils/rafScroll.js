import { clamp } from './utils'

export class RafScroll {
  scrollEl = null
  maxScroll = 0
  scrollY = 0

  setup = (el) => {
    if (!el) return

    this.scrollEl = el
    const { height: scrollElHeight } = this.scrollEl.getBoundingClientRect()

    const windowHeight = window.innerHeight
    const maxScroll = scrollElHeight - windowHeight

    this.maxScroll = maxScroll > 0 ? maxScroll : 0
  }

  onWheel = ({ deltaY }) => {
    this.scrollY = clamp(this.scrollY + deltaY, 0, this.maxScroll)

    this.scrollEl.style.transform = `translate3d(0, ${-1 * this.scrollY}px, 0)`
  }
}
