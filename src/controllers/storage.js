import _staticJSON from '../data.json'

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
    getJSON: ({ staticData = false } = {}) => {
      if (staticData) {
        return JSON.stringify(_staticJSON, null, 2)
      }

      return JSON.stringify(_data, null, 2)
    },
    getProjects: ({ staticData = false } = {}) => {
      if (staticData) {
        return Object.keys(_staticJSON.projects)
      }
      return Object.keys(_data.projects)
    },
    addProject: (project) => {
      if (!_data.projects[project]) {
        _data.projects[project] = {}
        _save()
      }
    },
    project: (project, mode = 'static') => {
      let _get

      if (mode === 'static') {
        _get = () => _staticJSON.projects[project]
      } else if (mode === 'edit') {
        _get = () => _data.projects[project]
      } else {
        throw new Error(`Invalid mode for store: ${mode}`)
      }

      if (!_get()) {
        return null
      }

      const _pc = {
        // GETTERS
        getTech: () => _get().technologies || [],
        getDescription: () => _get().description || '',
        getGoals: () => _get().goals || [],
        getTargetAudience: () => _get().targetAudience || [],
        getImpacts: () => _get().impacts || [],
        getImages: () => _get().images || [],
        // SETTERS
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
        setImpacts: (impacts) => {
          _get().impacts = impacts
          _save()
        },
        setImages: (images) => {
          _get().images = images
          _save()
        },
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
