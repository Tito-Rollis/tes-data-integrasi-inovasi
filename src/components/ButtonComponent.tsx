import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    size: 'large' | 'normal' | 'small';
    outline?: boolean;
    colors: 'lightgreen' | 'orange' | 'lightblue';
    iconPosition?: 'left' | 'right';
    icon: boolean;
    iconSize?: number;
    iconColor?: string;
    tooltip: boolean;
    tooltipPosition?: 'left' | 'right' | 'top' | 'bottom';
    tooltipText?: string;
    label?: string;
}

function ButtonComponent(props: Props) {
    const getWidth = (size: 'large' | 'normal' | 'small') => {
        switch (size) {
            case 'large':
                return 'text-xl';
            case 'small':
                return 'text-xs';
            default:
                return 'text-base';
        }
    };

    const getTooltipPosition = (pos: 'left' | 'right' | 'top' | 'bottom') => {
        switch (pos) {
            case 'left':
                return '-translate-x-[calc(100%+5px)]';
            case 'right':
                return 'translate-x-[calc(100%+5px)]';
            case 'bottom':
                return 'translate-y-[calc(100%+5px)]';
            default:
                return '-translate-y-[calc(100%+5px)]';
        }
    };

    return (
        <div className="relative w-fit h-fit border border-black rounded-lg">
            {/* Tooltip */}
            {props.tooltip && (
                <div
                    className={`absolute flex items-center justify-center rounded-lg left-0 top-0 bottom-0 w-full h-full ${getTooltipPosition(
                        props.tooltipPosition ? props.tooltipPosition : 'top'
                    )}  right-0 m-auto text-center  bg-slate-500 `}
                >
                    <h1 className="text-white">{props.tooltipText ? props.tooltipText : 'This is tooltip'}</h1>
                </div>
            )}

            <button
                className={`py-4 px-8 gap-1 ${props.icon ? 'flex items-center' : 'block'} ${
                    props.iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row'
                } bg-[${props.colors}] font-medium rounded ${getWidth(props.size)}`}
            >
                {props.icon && props.children}
                <p>{props.label ? props.label : 'Button'}</p>
            </button>
        </div>
    );
}

export { ButtonComponent };
