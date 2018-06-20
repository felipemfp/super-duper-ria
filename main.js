(function () {
  var PER_PAGE = 10

  var MINIMUM_WAGE = 937

  document.querySelectorAll('a[ria-dataset]').forEach(function (a) {
    a.addEventListener('click', function (evt) {
      evt.preventDefault()

      document.querySelector('a[ria-dataset].active').classList.remove('active')
      a.classList.add('active')

      loadDataset(a.getAttribute('ria-dataset'))
    })
  })

  document.querySelector('[ria-classification]').addEventListener('click', function(evt) {
    updateRestriction(null)
    updateTable()
  })

  document.querySelectorAll('[ria-restrict]').forEach(function(e) {
    e.addEventListener('click', function(evt) {
      updateRestriction(evt.target.getAttribute('ria-restrict'))
      updateTable()
    })
  })

  document.querySelector('[ria-pagination-next]').addEventListener('click', function(evt) {
    evt.preventDefault()

    if (pagination.limit >= pagination.maxLimit) {
      return
    }

    pagination.limit += PER_PAGE
    pagination.offset += PER_PAGE
    
    if (pagination.limit >= pagination.maxLimit) {
      pagination.limit = pagination.maxLimit
      evt.target.classList.add('disabled')
    }

    if (pagination.offset > 0) {
      document.querySelector('[ria-pagination-previous]').classList.remove('disabled')
    }

    updateTable()
  })

  document.querySelector('[ria-pagination-previous]').addEventListener('click', function(evt) {
    evt.preventDefault()

    if (pagination.offset === 0) {
      return
    }

    pagination.limit -= PER_PAGE
    pagination.offset -= PER_PAGE

    if (pagination.offset <= 0) {
      pagination.offset = 0
      evt.target.classList.add('disabled')
    }

    if (pagination.limit < pagination.maxLimit) {
      document.querySelector('[ria-pagination-next]').classList.remove('disabled')
    }

    updateTable()
  })

  var data = []
  var filters = {
    anoLetivo: null,
    sexo: null,
    etnia: null,
    tipoEscolaOrigem: null
  }
  var results = {
    dropout: [],
    reproved: [],
    approved: []
  }
  var pagination = {
    limit: PER_PAGE,
    offset: 0,
    maxLimit: PER_PAGE * 2 
  }
  var restriction = null

  var getFilteredData = function() {
    var filteredData = data

    var filter = function(data, key) {
      if (!filters[key]) return data

      return data.filter(function(item) {
        return (item[key] === filters[key])
      })
    }

    if (restriction === 'approved') {
      filteredData = filteredData.filter(function(item) {
        return (item.classification === CLASSIFICATION.APPROVED)
      })
    } else if (restriction === 'reproved') {
      filteredData = filteredData.filter(function(item) {
        return (item.classification === CLASSIFICATION.REPROVED)
      })
    } else if (restriction === 'dropout') {
      filteredData = filteredData.filter(function(item) {
        return (item.classification === CLASSIFICATION.DROPOUT)
      })
    }

    filteredData = filter(filteredData, 'anoLetivo')
    filteredData = filter(filteredData, 'sexo')
    filteredData = filter(filteredData, 'etnia')
    filteredData = filter(filteredData, 'tipoEscolaOrigem')

    return filteredData
  }

  var updateRestriction = function (value) {
    restriction = value
    var badge = document.querySelector('[ria-classification]')
    badge.classList.remove('badge-primary')
    badge.classList.remove('badge-success')
    badge.classList.remove('badge-danger')
    badge.classList.remove('badge-warning')

    switch(value) {
      case 'dropout':
        badge.innerText = badge.innerText.split(':')[0] + ': Evasão'
        badge.classList.add('badge-danger')
        break
      case 'approved':
        badge.innerText = badge.innerText.split(':')[0] + ': Aprovação'
        badge.classList.add('badge-success')
        break
      case 'reproved':
        badge.innerText = badge.innerText.split(':')[0] + ': Reprovação'
        badge.classList.add('badge-warning')
        break
      default:
        badge.innerText = badge.innerText.split(':')[0] + ': Todos'
        badge.classList.add('badge-primary')
    }
  }

  var loadDataset = function (datasetUrl) {
    filters = {
      anoLetivo: null,
      sexo: null,
      etnia: null,
      tipoEscolaOrigem: null
    }
    updateFilters()

    d3.text(datasetUrl, function (err, raw) {
      data = d3.dsvFormat(';').parse(raw, function (d) {
        var item = {
          matricula: d.Matricula,
          mediaFinal: +d.Media_Final,
          faltas: +d.Faltas,
          renda: +d.Renda,
          salarios: Math.floor(+d.Renda / MINIMUM_WAGE),
          coefRendimento: +d.CoefRendimento,
          frequencia: +d.Frequencia,
          sexo: d.Sexo ? d.Sexo.toUpperCase() : '',
          etnia: d.Etnia,
          tipoEscolaOrigem: d.Tipo_Escola_Origem,
          anoLetivo: d.AnoLetivo || d['Ano Letivo'],
        }

        item.classification = riaClassifier(item)
        return item
      })

      collectFiltersData()
      analyseData()
    })
  }

  var analyseData = function () {
    updateRestriction(null)
    var filteredData = getFilteredData()

    results = filteredData.reduce(function(aggr, item, idx) {
      if (item.classification === CLASSIFICATION.DROPOUT) {
        aggr.dropout.push(idx)
      } else if (item.classification === CLASSIFICATION.REPROVED) {
        aggr.reproved.push(idx)
      } else {
        aggr.approved.push(idx)
      }
      return aggr
    }, {
      dropout: [],
      reproved: [],
      approved: []
    })

    updateCounter(null, filteredData.length)
    updateCounter('dropout', results.dropout.length)
    updateCounter('reproved', results.reproved.length)
    updateCounter('approved', results.approved.length)
    updatePagination(filteredData)
    updateTable()
  }

  var updatePagination = function (data) {
    pagination.limit = PER_PAGE
    pagination.offset = 0
    pagination.maxLimit = data.length

    document.querySelector('[ria-pagination-previous]').classList.add('disabled')
    if (pagination.limit < pagination.maxLimit) {
      document.querySelector('[ria-pagination-next]').classList.remove('disabled')
    } else {
      document.querySelector('[ria-pagination-next]').classList.add('disabled')
    }
  }

  var updateTable = function () {
    var filteredData = getFilteredData()

    var columns = [
      'matricula',
      'anoLetivo',
      'mediaFinal',
      'coefRendimento',
      function(item) {
        return item.frequencia + '%'
      },
      'faltas',
      function(item) {
        return 'R$ ' + item.renda.toFixed(2)
      },
      'sexo',
      'etnia',
      'tipoEscolaOrigem'
    ]
    var tbody = document.querySelector('[ria-table] tbody')
    tbody.innerText = ''
    filteredData.slice(pagination.offset, pagination.limit).forEach(function(item) {
      var row = document.createElement('tr')

      if (item.classification === CLASSIFICATION.DROPOUT) {
        row.classList.add('table-danger')
      } else if (item.classification === CLASSIFICATION.REPROVED) {
        row.classList.add('table-warning')
      } else {
        row.classList.add('table-success')
      }

      columns.forEach(function(column) {
        var td = document.createElement('td')
        td.innerText = (typeof column === 'function') ? column(item) : item[column]
        row.appendChild(td)
      })
      tbody.appendChild(row)
    })
  }

  var updateCounter = function (id, length) {
    if (id) {
      document.querySelector('[ria-'+ id +'-counter').innerText = length
    } else {
      document.querySelector('[ria-counter]').innerText = length + ' registros'
    }
  }

  var collectFiltersData = function () {
    var values = data.reduce(function(obj, item) {
      obj.anoLetivo.push(item.anoLetivo)
      obj.sexo.push(item.sexo)
      obj.tipoEscolaOrigem.push(item.tipoEscolaOrigem)
      obj.etnia.push(item.etnia)
      return obj
    }, {
      anoLetivo: [],
      sexo: [],
      tipoEscolaOrigem: [],
      etnia: [] 
    })

    updateFilterData('anoLetivo', Array.from(new Set(values.anoLetivo)))
    updateFilterData('sexo', Array.from(new Set(values.sexo)))
    updateFilterData('tipoEscolaOrigem', Array.from(new Set(values.tipoEscolaOrigem)))
    updateFilterData('etnia', Array.from(new Set(values.etnia)))
  }

  var updateFilterData = function(id, options) {
    var filter = document.querySelector('[ria-filter=' + id + ']')
    var menu = filter.querySelector('.dropdown-menu')

    menu.innerHTML = ''

    var allElement = document.createElement('a')
    allElement.classList.add('dropdown-item')
    allElement.setAttribute('href', '#')
    allElement.addEventListener('click', onFilter(id))
    allElement.innerText = 'Todos'
    menu.appendChild(allElement)

    options.forEach(function(option) {
      var element = document.createElement('a')
      element.classList.add('dropdown-item')
      element.setAttribute('href', '#')
      element.addEventListener('click', onFilter(id))
      element.innerText = option

      menu.appendChild(element)
    })
  }

  var onFilter = function(id) {
    return function (evt) {
      evt.preventDefault()

      var isAll = evt.target.innerText === 'Todos'

      var filter = document.querySelector('[ria-filter=' + id + ']')
      var toggle = filter.querySelector('.dropdown-toggle')
      
      toggle.innerText = isAll 
        ? toggle.innerText.split(':')[0]
        : toggle.innerText.split(':')[0] + ': ' + evt.target.innerText

      filters[id] = isAll ? null : evt.target.innerText
      analyseData()
    }
  }

  var updateFilters = function () {
    Object.keys(filters).forEach(function(id) {
      var toggle = document.querySelector('[ria-filter=' + id + '] .dropdown-toggle')
      var menu = document.querySelector('[ria-filter=' + id + '] .dropdown-menu')

      toggle.innerText = toggle.innerText.split(':')[0]
      menu.innerHTML = ''
    })
  }

})()

document.querySelector('a[ria-dataset].active').click()