import { createUseStyles } from "react-jss";

interface ITribeStyleProps {
    armySize: number;
}

export const TribeStyles = createUseStyles({
    tribeContainer: {  
        margin: "6px"  
    },
    tribeTitle: {
        display: "inline-block",
        width: "80px"
    },
    tribeAttacksBar: (props: ITribeStyleProps) => ({
        display: "inline-block",
        boxSizing: "border-box",
        padding: "0 12px 0 0",
        minWidth: "50px",
        width: props.armySize,
        lineHeight: "96px",
        background: "#606060",
        color: "red",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "right",
        verticalAlign: "middle"
    }),
    tribeSticker: {
        maxHeight: "96px",
        verticalAlign: "middle",
        lineHeight: "48px"
    },
})