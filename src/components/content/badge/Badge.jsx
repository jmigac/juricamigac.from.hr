import React from 'react'

export default function Badge({text}) {
    return (
        <BadgesItem bgOpacity>{text}</BadgesItem>
    )
}

const BadgesItem = ({
                        children,
                        outline,
                        roundedFull,
                        roundedLg,
                        roundedNone,
                        roundedSm,
                        roundedMd,
                        bgOpacity,
                    }) => {
    return (
        <span
            className={`inline-block rounded py-1 px-2.5 text-xs font-medium ${
                outline
                    ? `border ${
                        (roundedFull && `rounded-full`) ||
                        (roundedLg && `rounded-lg`) ||
                        (roundedNone && `rounded-none`) ||
                        (roundedSm && `rounded-sm`) ||
                        (roundedMd && `rounded-md`) ||
                        (bgOpacity && `bg-gray-3/50`)
                    } border-light text-dark dark:text-light`
                    : `bg-gray-3 ${
                        (roundedFull && `rounded-full`) ||
                        (roundedLg && `rounded-lg`) ||
                        (roundedNone && `rounded-none`) ||
                        (roundedSm && `rounded-sm`) ||
                        (roundedMd && `rounded-md`) ||
                        (bgOpacity && `bg-gray-3/50`)
                    } text-dark`
            } ${bgOpacity && 'bg-gray-3/50'}
`}
        >{children}</span>
    )
}