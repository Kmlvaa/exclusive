'use client'
import React, { useEffect, useState } from 'react'

export default function Pagination(props: { data: any, sendDataToParent: any }) {

    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 5;
    const totalPages = Math.ceil(props.data.length / productPerPage);

    const indexOfLastProduct = productPerPage * currentPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;

    const sortedData = props.data.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1)
    }

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1)
    }

    const params = new URLSearchParams();

    params.append('page', String(currentPage))

    useEffect(() => {
        props.sendDataToParent(sortedData);
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set("search_results", String(params));

        window.history.pushState({}, "", newUrl);
    }, [currentPage]);

    return (
        <div className="flex flex-row items-center gap-2">
            <button className="p-4 bg-gray-100 rounded-full text-2xl border-[1px] border-gray-100 hover:bg-gray-200"
                onClick={handlePrev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
            </button>
            <button className="p-4 bg-gray-100 rounded-full text-2xl border-[1px] border-gray-100 hover:bg-gray-200"
                onClick={handleNext}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
            </button>
        </div>
    )
}
