import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, hoverBorderTopColor?: string) => ({
  isVisible: {
    display: "block",
  },
  isNotVisible: {
    display: "none",
  },
  wrapper: {
    backgroundColor: theme.colors.background,

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      borderBottom: `1px solid ${theme.colors.lightgrey}`,
    },

    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      display: "grid",
      gridTemplateColumns: "0.5fr 1fr",
      alignItems: "center",
    },
  },
  navTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.colors.lightgrey}`,
    paddingTop: 0,
    paddingBottom: theme.spacing.sm,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      borderBottom: 0,
      justifyContent: "center",
    },

    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      justifyContent: "flex-start",
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  navHeading: {
    fontSize: "28px", // custom
    lineHeight: "36.23px",
  },
  menuIcon: {
    display: "block",
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
  chevronRight: {
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
  planetsContainer: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: "flex",
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  planets: {
    display: "grid",
    gridTemplateColumns: "24px 1fr 20px",
    gridGap: "25px",
    listStyle: "none",
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderBottom: `1px solid ${theme.colors.lightgrey}`,
    fontFamily: "League Spartan",
    letterSpacing: "1.05px",
    color: theme.colors.lightgrey,

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
      borderBottom: 0,
      color: theme.colors.lightgrey,
    },
  },
  hoverColor: {
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      color: theme.colors.text,
    },
  },
  hoverBorderTop: {
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      borderTop: "4px solid",
    },
  },
  hoverBorderTopColor: {
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      borderTopColor: hoverBorderTopColor,
    },
  },
  link: {
    color: "inherit",
  },
  planetDisc: {
    display: "block",
    borderRadius: 100,
    width: "20px",
    height: "20px",
    marginRight: theme.spacing.md,

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
}));

export default useStyles;
