export const $ = (...args) => document.querySelector(...args)
export const $$ = (...args) => [...document.querySelectorAll(...args)]

const plainAttributes = [
  'for',
  'inputmode',
  'minlength',
  'maxlength',
  'min',
  'max',
  'pattern',
]

export const createElement = (tag, attrs) => {
  const el = document.createElement(tag)
  plainAttributes.forEach(plainAttr => {
    if (attrs && plainAttr in attrs && attrs[plainAttr]) {
      el.setAttribute(plainAttr, attrs[plainAttr])
    }
    if (attrs) {
      delete attrs[plainAttr]
    }
  })
  Object.assign(el, attrs)
  return el
}

export const appendTo = el => domNodes => {
  if (domNodes[Symbol.iterator]) {
    el.append(...domNodes)
    return
  }
  el.append(domNodes)
}

export function downloadBlob (blob, fileName) {
  const url = URL.createObjectURL(blob)
  window.location.replace(url)
}
