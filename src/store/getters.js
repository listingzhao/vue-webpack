export const route = state => state.route
export const isLoading = state => state.isLoading
export const doneTodos = state => {
  return state.todos.filter(todo => todo.done)
}
