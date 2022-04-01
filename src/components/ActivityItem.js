import { makeStyles } from "@material-ui/core";
import { ReactComponent as DeleteIcon } from "../assets/activity-item-delete-button.svg";

const useStyles = makeStyles({
  root: {
    width: "180px",
    height: "180px",
    background: "#FFFFFF",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    padding: 22,
  },
  title: {
    height: "164px",
    fontWeight: 700,
    fontSize: "18px",
    color: "#111111",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

function ActivityItem({ title, created }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div data-cy="activity-item-date" className={classes.title}>
        {title}
      </div>
      <div className={classes.footer}>
        <div data-cy="activity-item-date">{created}</div>
        <DeleteIcon data-cy="activity-item-delete-button" />
      </div>
    </div>
  );
}

export default ActivityItem;
