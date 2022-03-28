import re
import os

html = [x for x in os.listdir() if '.html' in x]

for page in html:
  doc = ''

  with open(page, 'r') as f:
    doc = f.read()

  m1 = re.findall('<link rel="stylesheet" type="text/css" media="screen" href="css/[\w]*.css" />', doc)

  for match in m1:
    mcss = re.findall('css/\w*.css', match)
    css = ''
    with open(mcss[0], 'r') as fcss:
      css = fcss.read()
    css = '<style>' + css + '</style>'
    doc = doc.replace(match, css)

  m2 = re.findall('<script src="js/\w*.js"></script>', doc)

  for match in m2:
    mjs = re.findall('js/\w*.js', match)
    js = ''
    with open(mjs[0], 'r') as fjs:
      js = fjs.read()
    js = '<script>' + js + '</script>'
    doc = doc.replace(match, js)

  f = open('join-html/' + page, 'w')
  f.write(doc)
  f.close()

#print(doc)

