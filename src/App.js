import { Grid, makeStyles } from "@material-ui/core";
import ActivityTitle from "./components/ActivityTitle";
import AddButton from "./components/AddButton";
import Header from "./components/Header";
import ActivityEmptyState from "./assets/activity-empty-state.png";
import { useEffect, useState } from "react";
import ActivityItem from "./components/ActivityItem";
import { formatDate } from "./helper/formatDate";

const useStyles = makeStyles({
  container: {
    maxWidth: 900,
    width: "100%",
    margin: "auto",
  },
  toolbar: {
    margin: "43px 0",
  },
});

function App() {
  const classes = useStyles();
  const [listActivity, setListActivity] = useState([]);

  useEffect(() => {
    fetch(
      "https://todo.api.devcode.gethired.id/activity-groups?email=ulfah%2B1%40skyshi.io"
    )
      .then((res) => res.json())
      .then((res) => {
        setListActivity(res.data);
      });
  }, []);

  return (
    <div>
      <Header />

      <div className={classes.container}>
        <Grid
          container
          justifyContent="space-between"
          className={classes.toolbar}
        >
          <ActivityTitle />
          <AddButton />
        </Grid>

        <Grid container spacing={2}>
          {listActivity.map((item) => (
            <Grid item xs={12} sm={6} md={3}>
              <ActivityItem
                title={item.title}
                created={formatDate(item.created_at)}
              />
            </Grid>
          ))}
        </Grid>
        {listActivity.length === 0 && (
          <img src={ActivityEmptyState} alt="empty state" />
        )}
      </div>
    </div>
  );
}

export default App;
