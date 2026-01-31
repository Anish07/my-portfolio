import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ScrollToTop from '../components/ScrollToTop';

export default function ProductDetail() {
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
        <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <div className="bg-gray-50 dark:bg-gray-800 py-20 px-6 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-5xl mx-auto">
                    <Link
                        to="/products"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8 font-medium"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Products
                    </Link>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        {product.title}
                    </motion.h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href={product.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            View on GitHub
                        </a>
                        {product.liveLink && (
                            <a
                                href={product.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Visit Live Site
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-12">

                    {/* Main Info */}
                    <div className="md:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
                            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                                <p className="whitespace-pre-line">{product.longDescription}</p>
                            </div>
                        </motion.div>

                        {/* Screenshots Placeholder - if we had images */}
                        {product.images && product.images.length > 0 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Gallery</h2>
                                <div className="grid gap-6">
                                    {product.images.map((img, idx) => (
                                        <img key={idx} src={img} alt={`${product.title} screenshot ${idx + 1}`} className="rounded-xl shadow-lg border border-gray-100 dark:border-gray-700" />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 sticky top-24"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm border border-gray-100 dark:border-gray-600"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
}
