import React from 'react';
import {
  Info,
  Settings,
  Zap,
  FileText,
  Download,
  Share2
} from 'lucide-react';
import { useProductDetails } from '../../hooks/useProducts';

interface ProductDetailProps {
  productId: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const { product, loading } = useProductDetails(productId);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-neutral-600 py-16">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className="w-full rounded-sm border border-neutral-200 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div>
          {/* Technical Header */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Zap className="mr-2 text-primary-600" size={20} />
              <h1 className="text-2xl font-bold text-neutral-800">
                {product.name}
              </h1>
            </div>
            <span className="text-sm font-mono text-neutral-500">
              {product.technicalCode}
            </span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">
              Description
            </h3>
            <p className="text-neutral-600">
              {product.fullDescription}
            </p>
          </div>

          {/* Technical Specifications */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {product.specifications.map((spec, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 border border-neutral-200 p-3 rounded-sm"
                >
                  <div className="text-xs text-neutral-500 mb-1">
                    {spec.key}
                  </div>
                  <div className="text-sm font-medium text-neutral-800">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          {product.performanceMetrics && (
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                Performance Metrics
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {product.performanceMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-neutral-50 border border-neutral-200 p-3 rounded-sm"
                  >
                    <div className="text-xs text-neutral-500 mb-1">
                      {metric.key}
                    </div>
                    <div className="text-lg font-semibold text-neutral-800">
                      {metric.value} {metric.unit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex space-x-4">
            <button className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-sm hover:bg-primary-700 transition-colors">
              <Download className="mr-2" size={16} />
              Download Datasheet
            </button>
            <button className="flex items-center border border-neutral-300 text-neutral-600 px-4 py-2 rounded-sm hover:bg-neutral-100 transition-colors">
              <Share2 className="mr-2" size={16} />
              Share Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
