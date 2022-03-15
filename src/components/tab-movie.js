import withTab from "../hocs/hoc-tab";

function TabMovie() {
  console.log("TAB_MOVIE");
  return "Movie";
}

export default withTab(TabMovie);