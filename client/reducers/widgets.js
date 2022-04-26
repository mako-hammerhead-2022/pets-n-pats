import { ADD_WIDGET, REMOVE_WIDGET } from '../actions/widgets'

export default function widgetsReducer(state = [], action) {
  switch (action.type) {
    case ADD_WIDGET:
      return [...state, action.payload]
    case REMOVE_WIDGET:
      return state.filter((widget) => widget.id !== action.id)
    default:
      return state
  }
}
