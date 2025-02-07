// components/PDFViewer.tsx
'use client';

import React, {useEffect, useRef, useState} from 'react';
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react';
import {Document, Page, pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface PDFViewerProps {
    url: string;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({url}) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [error, setError] = useState<string | null>(null);
    const [scale, setScale] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateScale = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const newScale = (containerWidth - 32) / 595; // 595 is standard PDF width
                setScale(Math.min(newScale, 1.5));
            }
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const onDocumentLoadSuccess = ({numPages}: { numPages: number }) => {
        setNumPages(numPages);
        setError(null);
    };

    const onDocumentLoadError = (error: Error) => {
        setError('Error loading PDF. Please try again later.');
        console.error('PDF load error:', error);
    };

    return (
        <div className="flex flex-col items-center" ref={containerRef}>
            {error ? (
                <div className="alert alert-error mb-4">
                    <span>{error}</span>
                </div>
            ) : (
                <>
                    <div className="w-full overflow-auto">
                        <Document
                            file={url}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onDocumentLoadError}
                            className="flex justify-center"
                        >
                            <Page
                                pageNumber={pageNumber}
                                className="shadow-lg"
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                scale={scale}
                            />
                        </Document>
                    </div>
                    <div className="mt-4 flex justify-center">
            <span className="text-sm">
              {pageNumber} of {numPages}
            </span>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button
                            className="btn btn-primary"
                            disabled={pageNumber <= 1}
                            onClick={() => setPageNumber(curr => curr - 1)}
                        >
                            <ArrowBigLeft/>
                        </button>
                        <button
                            className="btn btn-primary"
                            disabled={pageNumber >= (numPages ?? 0)}
                            onClick={() => setPageNumber(curr => curr + 1)}
                        >
                            <ArrowBigRight/>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default PDFViewer;