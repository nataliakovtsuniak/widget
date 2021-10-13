import React from "react";
import PropTypes from "prop-types";
import { uid } from "react-uid";
import { createUseStyles } from "react-jss";

import RadialChartBar from "./RadialChartBar";
import LegendItem from "./LegendItem";

const useStyles = createUseStyles({
    widgetWrapper: {
        maxWidth: 564,
        minHeight: 148,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 20,
        margin: "0 auto",
        border: ({ widgetColor }) => `4px solid ${widgetColor}`,
        borderRadius: 20
    },
    widgetTitle: {
        position: "relative",
        padding: [2, 16],
        marginBottom: 24,
        color: ({ widgetColor }) => widgetColor,
        fontSize: 28,
        fontWeight: 600,

        "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: 6,
            height: "100%",
            backgroundColor: ({ widgetColor }) => widgetColor,
            borderRadius: 4
        }
    },
    leftColumn: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    rightColumn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto"
    },
    legendBar: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 118px)",
        gridGap: 4
    }
});

/**
 * RetentionWidget
 *
 * This component creates a widget to display a legend and a radial chart of data.
 * The first three items from data array expect to have color props.
 * The last data item from data array expects to be placed inside  RadialChartBar
 * and has no color provided.
 *
 * @param widgetTitle
 * @param widgetColor
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */

export default function RetentionWidget({ widgetTitle, widgetColor, data }) {
    const classes = useStyles({ widgetColor });

    const itemsWithColors = data.slice(0, -1);
    const lastItem = data[data.length - 1];

    return (
        <div className={classes.widgetWrapper}>
            <div className={classes.leftColumn}>
                <div className={classes.widgetTitle}>{widgetTitle}</div>
                <div className={classes.legendBar}>
                    {itemsWithColors.map((item, index) => (
                        <LegendItem
                            key={uid(index)}
                            name={item.name}
                            value={item.value}
                            color={item.fill}
                            withColorLine
                        />
                    ))}
                </div>
            </div>

            <div className={classes.rightColumn}>
                <RadialChartBar data={itemsWithColors}>
                    <LegendItem name={lastItem.name} value={lastItem.value} />
                </RadialChartBar>
            </div>
        </div>
    );
}

RetentionWidget.propTypes = {
    widgetTitle: PropTypes.string.isRequired,
    widgetColor: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};
