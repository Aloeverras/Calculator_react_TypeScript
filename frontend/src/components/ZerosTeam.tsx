import type { ZerosTeamType } from "../types/ZerosTeamType";
import KeyBoard from "./KeyBoard";

const ZerosTeam : ZerosTeamType = () => {
    return (
        <>
            <KeyBoard
                monoLetter={false}
                nameList="zerosTeam"
                buttons={
                    [
                        ".0",
                        ".00",
                        ".000",
                        "0",
                        "00",
                        "000"
                    ]
                }
            />
        </>
    );
};

export default ZerosTeam;