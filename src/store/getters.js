const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  
}
export default getters
