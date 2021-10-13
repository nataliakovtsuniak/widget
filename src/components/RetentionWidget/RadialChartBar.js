import React from "react";
import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    chartWrapper: { position: "relative", margin: -12 },
    legend: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

/**
 *
 * RadialChartBar
 *
 * This component exposes data to draw a radial chart.
 * To add  addition info inside chart we can optionally pass children node.
 * @param data
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */

export default function RadialChartBar({ data, children = null }) {
    const classes = useStyles();

    return (
        <div className={classes.chartWrapper}>
            <RadialBarChart
                width={172}
                height={172}
                innerRadius={"68%"}
                outerRadius={"100%"}
                barSize={5.5}
                data={data}
                startAngle={90}
                endAngle={-270}
            >
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    dataKey={"value"}
                    angleAxisId={0}
                    tick={false}
                />
                <RadialBar
                    background
                    dataKey="value"
                    angleAxisId={0}
                    data={data}
                    cornerRadius={5}
                />
            </RadialBarChart>
            {children && <div className={classes.legend}>{children}</div>}
        </div>
    );
}

RadialChartBar.propTypes = {
    data: PropTypes.array.isRequired,
    children: PropTypes.node
};
