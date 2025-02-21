import React from "react";
import "../../../styles/components/content/about-me/about-me.css"
import Skeleton from "react-loading-skeleton";

export default function AboutMe({ data }) {

    return (
        <div className='about-me-container'>
            <h2 className='justify-content-start about-me-title'>{data?.title || <Skeleton />}</h2>
            <p>{data?.description || <Skeleton />}</p>
        </div>
    );
}