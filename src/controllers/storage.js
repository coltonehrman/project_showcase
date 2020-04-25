const Storage = () => {
  const STORAGE_KEY = 'projects_data'

  let _data = {
    projects: {

    }
  }

  const _save = () => {
    const jsonString = JSON.stringify(_data)
    localStorage.setItem(STORAGE_KEY, jsonString)
  }

  const _controller = {
    project: (project) => {
      const _get = () => _data.projects[project]

      const _pc = {
        // GETTERS
        getTitle: () => _get().title || '',
        getTech: () => _get().technologies || [],
        getDescription: () => _get().description || '',
        getGoals: () => _get().goals || [],
        getTargetAudience: () => _get().targetAudience || [],
        getImpact: () => _get().impact || [],
        // SETTERS
        setTitle: (title) => {
          _get().title = title
          _save()
        },
        setTech: (technologies) => {
          _get().technologies = technologies
          _save()
        },
        setDescription: (description) => {
          _get().description = description
          _save()
        },
        setGoals: (goals) => {
          _get().goals = goals
          _save()
        },
        setTargetAudience: (targetAudience) => {
          _get().targetAudience = targetAudience
          _save()
        },
        setImpact: (impact) => {
          _get().impact = impact
          _save()
        }
      }

      // Initalize project if not set already
      if (!_get()) {
        _data.projects[project] = {}
        _save()
      }

      return _pc
    }
  }

  // Initialize localStorage
  if (!localStorage.getItem(STORAGE_KEY))
    _save()
  else {
    _data = JSON.parse(localStorage.getItem(STORAGE_KEY))
  }

  return _controller
}

const _storage = Storage()

export default _storage
