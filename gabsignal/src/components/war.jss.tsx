import { createUseStyles } from "react-jss";

export const WarStyles = createUseStyles({
    warContainer: {
        display: "inline-block",
        margin: "auto",
        background: "rgba(255, 0, 0, 0.55)",
        padding: "48px"
    },
    warButtonsContainer: {
        display: "flex",
        justifyContent: "center",
        rowGap: "6px",
        columnGap: "6px",
        paddingBottom: "48px" 
    },
    warButtonsTitle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: "36px"
    },
    warButton: {
        flex: "0 0 80px",
        border: "none",
        padding: "24px"
    },
    tribeIcon: {
        maxHeight: "64px"
    },
    tribesContainer: {
        display: "inline-block",
        padding: "0 48px",
        textAlign: "left"
    },
    tribeArmyTitle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: "36px" 
    }
})