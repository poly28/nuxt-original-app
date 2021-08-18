export default function({ redirect, store, route }) {
  const user = store.state.user;
  if (!user.login && route.path !== "/login") {
    redirect("/login");
  }
}
