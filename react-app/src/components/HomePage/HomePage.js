import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import oneself from "../HomePage/oneself.pdf"


const HomePage = () => {

    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1)
    }

    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet)
    }

    function changePageBack() {
        changePage(-1)
    }

    function changePageNext() {
        changePage(+1)
    }

    return (
        <div>
            <h1>J.L. Deleon Entertainment</h1>
            <div>
                <header>
                    <Document file={oneself} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
                        <Page height="400" pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                    {pageNumber > 1 && (<button onClick={changePageBack}>Back</button>)}
                    {pageNumber < numPages && (<button onClick={changePageNext}>Next</button>)}
                </header>
            </div>
        </div>
    )
}

export default HomePage
