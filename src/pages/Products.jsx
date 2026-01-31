import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ScrollToTop from '../components/ScrollToTop';

export default function Products() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-24 min-h-screen transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Products
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Deep dives into some of my most complex and full-featured applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        {product.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.techStack.slice(0, 4).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-semibold px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {product.techStack.length > 4 && (
                                            <span className="text-xs font-semibold px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                                                +{product.techStack.length - 4} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <Link
                                        to={`/products/${product.id}`}
                                        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        View Product
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <ScrollToTop />
        </section>
    );
}
