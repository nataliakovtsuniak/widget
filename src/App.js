import React from "react";
import { createTheming } from "react-jss";
import RetentionWidget from "./components/RetentionWidget";

const ThemeContext = React.createContext({});

const theming = createTheming(ThemeContext);
export const { ThemeProvider, useTheme } = theming;

const myTheme = {
    color: {
        textPrimary: "#21293d",
        textSecondary: "#6c769a"
    }
};

const chartsData = [
    { name: "Premium", value: 88, fill: "#fa5e0e" },
    { name: "Revenue", value: 95, fill: "#2fd2ab" },
    { name: "Policies", value: 85, fill: "#7d3dfe" },
    { name: "Clients", value: 95, fill: "" }
];
const widgetTitle = "Retention";
const widgetColor = "#0c95ff";

function App() {
    return (
        <ThemeProvider theme={myTheme}>
            <RetentionWidget
                data={chartsData}
                widgetTitle={widgetTitle}
                widgetColor={widgetColor}
            />
        </ThemeProvider>
    );
}

export default App;
