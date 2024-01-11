const fs = require("fs")
fs.readFile("filme.json", (err, data) => {
  if (err) throw err
  const result = JSON.parse(data.toString())
  const newObjArr = []
  result.forEach(element => {
    let authors = []
    let authArr = element.attributes.actors.data
    let item = {}
    let genres = []
    let genreArr = element.attributes.genres.data
    authArr.forEach(a => {
      let item = { name: a.attributes.name }
      authors.push(item)
    })
    genreArr.forEach(g => {
      let item = { genre: g.attributes.genre }
      genres.push(item)
    })
    let obj = {
      id: element.id,
      titel: element.attributes.titel,
      land: element.attributes.land,
      regie: element.attributes.regie,
      erscheinungsjahr: element.attributes.erscheinungsjahr,
      beschreibung: element.attributes.beschreibung,
      aufbewahrungsort: element.attributes.aufbewahrungsort,
      medium: element.attributes.medium,
      slug: element.attributes.slug,
      bild: element.attributes.bild.data.attributes.name,
      actors: { data: authors },
      genres: { data: genres },
    }
    newObjArr.push(obj)
  })
  //   console.log(JSON.stringify(newObjArr))
  fs.writeFile("leanFilme.json", JSON.stringify(newObjArr), err => {
    // In case of a error throw err.
    if (err) throw err
  })

  //   console.log("Ergebnis: ", newObjArr[21])
})
