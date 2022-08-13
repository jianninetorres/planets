import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params) => ({
  wrapper: {
    backgroundColor: theme.colors.background,
  },
  navTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.colors.border}`,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
  planetsContainer: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
  planets: {
    display: "flex",
    listStyle: "none",
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderBottom: `1px solid ${theme.colors.border}`,
  },
  planetDisc: {
    display: "block",
    width: "20px",
    height: "20px",
  },
}));

export default useStyles;
