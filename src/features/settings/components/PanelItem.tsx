import { IconType } from 'react-icons';

type PanelItemProps = {
    icon:IconType;
    itemLabel:string;
    itemTagLine: string;
    indicator:IconType
}

function PanelItem({icon:ItemIcon, itemLabel, itemTagLine, indicator:Indicator}:Partial<PanelItemProps>) {
    return (
        <div className="flex ">
            {ItemIcon && <ItemIcon size={23}/>}
            <div className="flex flex-col gap-4">
                {itemLabel && <p>{itemLabel}</p>}
                {itemTagLine && <p>{itemTagLine}</p>}
            </div>
            {Indicator && <Indicator size={23} className="self-end"/> }
        </div>
    );
}

export default PanelItem;