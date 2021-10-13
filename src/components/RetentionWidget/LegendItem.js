import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { useTheme } from "../../App";

const useStyles = createUseStyles((theme) => ({
    legendItem: {
        position: "relative",
        display: "flex",
        flexDirection: "column-reverse",
        fontWeight: 600
    },
    legendItemWithLine: {
        flexDirection: "column",
        padding: [2, 16],
        "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: 6,
            height: "100%",
            backgroundColor: ({ color }) => color,
            borderRadius: 4
        }
    },
    name: { fontSize: 18, color: theme.color.textSecondary },
    percent: { fontSize: 24, color: theme.color.textPrimary }
}));

export default function LegendItem({ name, value, color = null }) {
    const theme = useTheme();
    const classes = useStyles({ color, theme });

    return (
        <div
            className={clsx(classes.legendItem, color && classes.legendItemWithLine)}
        >
            <div className={classes.name}>{name}</div>
            <div className={classes.percent}>{value}%</div>
        </div>
    );
}

LegendItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.string
};
