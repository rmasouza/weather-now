import React, {FC} from 'react';

type LoadingProps = React.SVGProps<SVGSVGElement>;

const Loading: FC<LoadingProps> = (props) => {
    return (
        <svg
            width={50}
            height={50}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            className="prefix__uil-ring-alt"
            {...props}>
            <path fill="none" className="prefix__bk" d="M0 0h100v100H0z" />
            <circle
                cx={50}
                cy={50}
                r={40}
                stroke="rgba(255,255,255,0)"
                fill="none"
                strokeWidth={10}
                strokeLinecap="round"
            />
            <circle
                cx={50}
                cy={50}
                r={40}
                stroke="#737c84"
                fill="none"
                strokeWidth={6}
                strokeLinecap="round"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    dur="1.5s"
                    repeatCount="indefinite"
                    from={0}
                    to={502}
                />
                <animate
                    attributeName="stroke-dasharray"
                    dur="1.5s"
                    repeatCount="indefinite"
                    values="188.25 62.75;1 250;188.25 62.75"
                />
            </circle>
        </svg>
    );
};

export default Loading;
