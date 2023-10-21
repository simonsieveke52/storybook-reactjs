import { FieldContext, ReactiveControllerContext } from '../../../Contexts';
import React, { useContext } from 'react';

export default (): JSX.Element | null => {
    const context = useContext(FieldContext);
    const { exceptions } = useContext(ReactiveControllerContext);
    const error = exceptions ? exceptions[context.name] ?? undefined : undefined;

    return error ? (
        <span className="select-none text-yellow-500 text-xs flex items-start leading-5 mt-2 font-semibold animate-animated animate-faster animate-fadeInDown">
            <svg
                className="h-5 w-5 mr-0.5 flex-shrink-0"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                xmlSpace="preserve"
            >
                <g>
                    <g>
                        <path d="M50,85c-19.3,0-35-15.7-35-35c0-19.3,15.7-35,35-35c19.3,0,35,15.7,35,35C85,69.2,69.3,85,50,85z M50,20.9 c-16,0-29,13-29,29c0,16,13,29,29,29c16,0,29-13,29-29C79,33.9,66,20.9,50,20.9z" />
                    </g>
                    <g>
                        <path d="M50,55.1c-1.7,0-3-1.3-3-3V36.8c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3v15.3C53,53.8,51.7,55.1,50,55.1z" />
                    </g>
                    <g>
                        <path d="M50,66.1c-0.8,0-1.6-0.3-2.1-0.9c-0.6-0.6-0.9-1.3-0.9-2.1c0-0.2,0-0.4,0.1-0.6c0-0.2,0.1-0.4,0.2-0.6 c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.4-0.5c1.1-1.1,3.1-1.1,4.2,0c0.1,0.1,0.3,0.3,0.4,0.5c0.1,0.2,0.2,0.3,0.3,0.5 c0.1,0.2,0.1,0.4,0.2,0.6c0,0.2,0.1,0.4,0.1,0.6c0,0.8-0.3,1.6-0.9,2.1C51.6,65.8,50.8,66.1,50,66.1z" />
                    </g>
                </g>
            </svg>
            {error[0] ?? ''}
        </span>
    ) : null;
};
