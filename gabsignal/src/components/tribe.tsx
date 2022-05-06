import { useEffect, useState } from "react";
import { ITribe } from "../models/tribe";
import { TribeStyles } from "./tribe.jss";

interface ITribeProps {
    tribe: ITribe;
    // updateEvent: (e: any) => void;
}
interface ITribeStyleProps {
    armySize: number;
}

export const Tribe = (props: ITribeProps) => {
    const [army, setArmy] = useState(props.tribe.army);
    const styleProps: ITribeStyleProps = { armySize: army };
    const styles = TribeStyles(styleProps);

    useEffect(() => {
        setArmy(props.tribe.army);
    }, [props.tribe.army]); 

    return (
        <>
            <div className={styles.tribeContainer}> 
                <div className={styles.tribeAttacksBar} data-tribe={props.tribe.id}>
                    {army}
                </div>
                <img className={styles.tribeSticker} src={props.tribe.sticker} alt={props.tribe.id} />
            </div>
        </>
    )

}