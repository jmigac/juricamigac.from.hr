import React from "react";
import dateFormat from 'dateformat'

export default function ExperienceArticle({ experience }) {
    const from = dateFormat(experience.from, "mmmm yyyy");
    return (
        <li className="mb-10 ms-4">
            <div
                className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{from}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{experience.description}</p>
        </li>
    );
}