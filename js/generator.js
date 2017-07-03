/**
 * File: e:\Session\Amazing-Javascript\js\generator.js
 * Project: e:\Session\Amazing-Javascript
 * Created Date: Thu Jun 29 2017
 * Author: topgrd
 * Email: topgrd@outlook.com
 * -----
 * Last Modified: Sun Jul 02 2017
 * Modified By: topgrd
 * -----
 * Copyright (c) 2017
 */


const App = {
  slides: document.querySelector('.slides'),
  total: 20,
  baseUrl: 'content/'
}

function genSections(index, { baseUrl, slides } = App) {
  const section = document.createElement('section')
  section.setAttribute('data-markdown', `${baseUrl}${index}.md`)
  section.setAttribute('data-separator', '^\n\n\n')
  section.setAttribute('data-separator-vertical', '^\n\n')
  section.setAttribute('data-separator-notes', '^Note:')
  section.setAttribute('data-charset', 'utf-8')
  slides.appendChild(section)
}

App.start = function () {
  for (let index = 1; index <= App.total; index++) {
    genSections(index)
  }
}

App.start()
