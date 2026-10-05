import win32clipboard
import pyperclip
import json


def getAvailableFormats():
  """
  Return a possibly empty list of formats available on the clipboard
  """
  formats = []
  try:
    win32clipboard.OpenClipboard(0)
    cf = win32clipboard.EnumClipboardFormats(0)
    while (cf != 0):
      formats.append(cf)
      cf = win32clipboard.EnumClipboardFormats(cf)
  finally:
    win32clipboard.CloseClipboard()
  return formats

def getGoogleDocClipboardText(formats):
  googleDoc = ""
  # CF_HTML=49433
  CF_HTML = win32clipboard.RegisterClipboardFormat("HTML Format")
  try:
    win32clipboard.OpenClipboard(0)
    for format in formats:
      if CF_HTML == format:
        src = win32clipboard.GetClipboardData(CF_HTML)
        googleDoc = src.decode("UTF-8")
      else:
        win32clipboard.SetClipboardData(format, "test")
  finally:
    win32clipboard.CloseClipboard()
  return googleDoc
    
def setGoogleDocClipboardText(googleDoc, formats):
  try:
    CF_HTML = win32clipboard.RegisterClipboardFormat("HTML Format")
    win32clipboard.OpenClipboard(0)
    for format in formats:
      if CF_HTML == format:
        win32clipboard.SetClipboardData(format, googleDoc.encode("UTF-8"))
      else:
        win32clipboard.SetClipboardData(format, "test")
  finally:
    win32clipboard.CloseClipboard()
    
def findClosestTextBeforePosition(text, target, position):
    closestPos = text.find(target)
    while (closestPos != -1 and closestPos < position):
        newClosest = text.find(target, closestPos+1)
        if newClosest == -1 or newClosest > position:
            return closestPos
        closestPos = newClosest
    
def mapList(id, targetList, googleDoc):
  idPosition = googleDoc.find(id)
  listStart = findClosestTextBeforePosition(googleDoc, "<li", idPosition)
  listEnd = googleDoc.find("</li>", idPosition) + len("</li>")
  listHtml = googleDoc[listStart: listEnd]
  newList = " ".join(map(lambda element: listHtml.replace(id, element), targetList))
  return googleDoc[:listStart] + newList + googleDoc[listEnd:]

def mapNamedList(listNameId, listId, listType, targetList, elementNameGetter, elementsGetter, googleDoc):
  endTag = "</"+listType+">"
  nameIdPosition = googleDoc.find(listNameId)
  blockStart = findClosestTextBeforePosition(googleDoc, "<p", nameIdPosition)
  blockEnd = googleDoc.find(endTag, blockStart) + len(endTag)
  blockHtml = googleDoc[blockStart: blockEnd]
  blocks = " ".join(map(lambda iv: mapList(listId, elementsGetter(iv[1]), blockHtml.replace(listNameId, elementNameGetter(iv))), enumerate(targetList)))
  return googleDoc[:blockStart] + blocks + googleDoc[blockEnd:]

    
def mapClipboardTextFromJson(googleDoc):
  input("Copie el json para mapear los atributos, luego presione enter")
  data = json.loads(pyperclip.paste())
  id_curso = -1 #el id curso tiene que ser el numero de curso que esta haciendo de la lista de cursos del json
  curso = data["microciclos"][id_curso]
  # aqui es donde hay que hacer el mapeo del documento, del drive al json
  googleDoc = googleDoc\
    .replace('{{{nombre}}}', curso["nombre"])\
    .replace('{{{habilidad_sfia.nombre}}}', curso["habilidad_sfia"]["nombre"])\
    .replace('{{{habilidad_sfia.nivel_sfia}}}', curso["habilidad_sfia"]["nivel_sfia"])\
    .replace('{{{competencia_especifica}}}', curso["competencia_especifica"])\
    .replace('{{{descripcion}}}', curso["descripcion"])\
    .replace('{{{semanas}}}', curso["semanas"])\
    .replace('{{{horas_semanales}}}', curso["horas_semanales"])\
    .replace('{{{horas_lectivas}}}', curso["horas_lectivas"])\
    .replace('{{{nombresTemas}}}', "<br>".join(map(lambda iv: "Tema "+str(iv[0]+1)+": "+iv[1]["nombre"], enumerate(curso["temas"]))))\
    .replace('{{{competencia_nombre}}}', curso["competencia_nombre"]) #esta al final para poder duplicar la linea previa y que preserve el "/" pero este es el segundo elemento del json
  googleDoc = mapList("{{{capacidades_especificas}}}", curso["capacidades_especificas"], googleDoc)
  googleDoc = mapList("{{{capacidades_especificas}}}", curso["capacidades_especificas"], googleDoc)
  googleDoc = mapList("{{{perfil_ingreso_requisitos}}}", curso["perfil_ingreso_requisitos"], googleDoc)
  googleDoc = mapList("{{{relacion_empleabilidad}}}", curso["relacion_empleabilidad"], googleDoc)
  for i in range(len(curso["temas"])):
    googleDoc = googleDoc.replace("{{{tema"+str(i+1)+"Cronograma}}}", "Tema "+str(i+1)+": "+curso["temas"][i]["nombre"])
  googleDoc = mapNamedList("{{{nombreTema}}}", "{{{subtemas}}}", "ul", curso["temas"], lambda iv: "Tema "+str(iv[0]+1)+": "+iv[1]["nombre"], lambda tema: tema["subtemas"], googleDoc)
  return googleDoc
  

  
input("Copie el texto desde google drive, luego presione enter")
formats = getAvailableFormats()
googleDoc = getGoogleDocClipboardText(formats)
googleDoc = mapClipboardTextFromJson(googleDoc)
input("Copie el texto desde google drive nuevamente, luego presione enter")
setGoogleDocClipboardText(googleDoc, formats)
print("Haga ctrl+v en el documento en blanco")

# Para correr el programa usar python '.\parser de cursos.py'

# py -m pip install pywin32 pyperclip