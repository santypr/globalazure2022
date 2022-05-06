import SignalRService from "../services/signalr";
import { Tribe } from "./tribe";
import { WarStyles } from "./war.jss"
import { ITribe } from "../models/tribe";
import { useState } from "react";

interface IWarProps {
    spartans: ITribe;
    vikings: ITribe;
    jiujitsu: ITribe;
}

export const War = (props: IWarProps) => {
    const styles = WarStyles();
    const { enlist } = SignalRService;
    const [warEvents, setWarEvents] = useState(0);

    SignalRService.setEnlistEvent((tribe: string) => {
        if (tribe === props.spartans.id) {
            props.spartans.army++;
        } else if (tribe === props.vikings.id) {
            props.vikings.army++;
        } else if (tribe === props.jiujitsu.id) {
            props.jiujitsu.army++;
        }
        
        setWarEvents(warEvents + 1);
    })

    return(
        <>
            <div className={styles.warContainer}>
                <div className={styles.warButtonsTitle}>ALÍSTATE A TU TRIBU</div>
                <div className={styles.warButtonsContainer}>
                    <button className={styles.warButton} onClick={() => enlist(props.spartans.id)}>
                        <img className={styles.tribeIcon} src={props.spartans.sticker} alt={props.spartans.id} />
                        {props.spartans.title}
                    </button>
                    <button className={styles.warButton} onClick={() => enlist(props.vikings.id)}>
                        <img className={styles.tribeIcon} src={props.vikings.sticker} alt={props.vikings.id} />
                        {props.vikings.title}
                    </button>
                    <button className={styles.warButton} onClick={() => enlist(props.jiujitsu.id)}>
                        <img className={styles.tribeIcon} src={props.jiujitsu.sticker} alt={props.jiujitsu.id} />
                        {props.jiujitsu.title}
                    </button>
                </div>
                <div className={styles.tribeArmyTitle}>TAMAÑO DE EJÉRCITO</div>
                <div className={styles.tribesContainer}>
                    <Tribe tribe={props.spartans} />
                    <Tribe tribe={props.vikings} />
                    <Tribe tribe={props.jiujitsu} />
                </div>
            </div>
        </>
    )
}