import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontWeight: 700,
    fontSize: 36,
    color: "#111111",
  },
});

function ActivityTitle() {
  const classes = useStyles();

  return <div className={classes.title}>Activity</div>;
}

export default ActivityTitle;
