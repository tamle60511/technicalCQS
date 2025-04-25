export interface ProductCategory {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
    productCount: number;
  }

  export interface ProductSpecification {
    key: string;
    value: string;
  }

  export interface Product {
    id: string;
    name: string;
    categorySlug: string;
    shortDescription: string;
    fullDescription: string;
    technicalCode: string;
    specifications: ProductSpecification[];
    images: string[];
    performanceMetrics?: {
      key: string;
      value: number;
      unit: string;
    }[];
  }
