import Markdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import React from "react";

export default function ExperienceArticle({ title, from, until, description }) {
    const fromUntil = (from && until) || <Skeleton />
    return (
        <>
            <h3>{title || <Skeleton />}</h3>
            <p>{fromUntil}</p>
            <Markdown>{description || <Skeleton />}</Markdown>
        </>
    );
}