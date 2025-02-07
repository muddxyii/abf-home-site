'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ArrowBigLeft, ArrowBigRight, Shield } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PDFViewerProps {
  url: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url }) => {
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

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
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
              <ArrowBigLeft />
            </button>
            <button
              className="btn btn-primary"
              disabled={pageNumber >= (numPages ?? 0)}
              onClick={() => setPageNumber(curr => curr + 1)}
            >
              <ArrowBigRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default function PrivacyPolicy() {
  const pdfUrl = '/privacy-policy.pdf';

  return (
    <main className="bg-base-300 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="card bg-base-100 shadow-xl mb-8 max-w-4xl mx-auto">
          <div className="card-body text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-16 h-16 text-primary" />
            </div>
            <h1 className="card-title text-4xl md:text-5xl font-bold justify-center mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              Last updated: February 07, 2025
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl max-w-4xl mx-auto">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">
              Full Privacy Policy Document
            </h2>
            <div className="bg-base-200 rounded-lg p-4">
              <PDFViewer url={pdfUrl} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}