import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductPreview() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === id);

    useEffect(() => {
        if (!product) {
            navigate('/products');
        }
    }, [product, navigate]);

    if (!product) return null;

    return (
        <div className="flex flex-col h-screen bg-gray-900">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
                <div className="flex items-center space-x-4">
                    <Link
                        to={`/products/${id}`}
                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                        ← Back to Details
                    </Link>
                    <span className="text-gray-600">|</span>
                    <h1 className="text-white font-semibold">{product.title}</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-500 text-sm hidden md:inline">
                        Preview Mode
                    </span>
                    <a
                        href={product.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
                    >
                        Open in New Tab
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Iframe */}
            <div className="flex-grow bg-white">
                <iframe
                    src={product.liveLink}
                    title={`${product.title} Live Preview`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
