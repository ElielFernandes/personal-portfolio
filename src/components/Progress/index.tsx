import { ProgressStyle } from "./styled";
import { useState , useEffect} from "react";


type Props = {
    level : number
    title : string;
}


export const Progress = ({level, title}: Props) => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        if(value < level){
            const interval = setInterval(() => {
                setValue(seconds => seconds + 1);
            }, 2500/level);
            return () => clearInterval(interval);
        }
    });

    return (
        <ProgressStyle level={level}>
                <div className="progressTitle">{title}</div>
                <div className="progressBar">
                    <div className="progressLevel notranslate" translate="no">{value}%</div>
                </div>
        </ProgressStyle>
    );
}