import * as api from '../apiClient'

export const ADD_WIDGET = 'ADD_WIDGET'
export const REMOVE_WIDGET = 'REMOVE_WIDGET'
export const UPDATE_WIDGET = 'UPDATE_WIDGET'

export function addWidget(widget) {
  return {
    type: 'ADD_WIDGET',
    payload: {
      widget,
    },
  }
}

export function deleteWidget(id) {
  return {
    type: 'REMOVE_WIDGET',
    payload: {
      id,
    },
  }
}

export function updateWidget(id, newWidget) {
  return {
    type: 'UPDATE_WIDGET',
    payload: {
      id,
      ...newWidget,
    },
  }
}

export function setWidgets(widgets) {
  return {
    type: 'SET_WIDGETS',
    payload: {
      widgets,
    },
  }
}

export function fetchWidgets() {
  return (dispatch) => {
    api
      .getWidgets()
      .then((widgets) => {
        dispatch(addWidget(widgets))
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
