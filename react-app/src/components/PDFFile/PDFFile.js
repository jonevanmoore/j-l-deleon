import React, { useState } from "react"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import oneself from "../HomePage/oneself.pdf"


const PDFFile = () => {
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
        <>
            <div className="pdf-container">
                <Document file={oneself} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page height="400" pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
                {pageNumber > 1 && (<button onClick={changePageBack}>Back</button>)}
                {pageNumber < numPages && (<button onClick={changePageNext}>Next</button>)}
            </div>

            <div className="test-container">
                <embed src={oneself} type='application/pdf' width='100%' height='600px' />

            </div>
        </>
    )
}
export default PDFFile
