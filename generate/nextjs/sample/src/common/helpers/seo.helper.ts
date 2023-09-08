import { Metadata } from 'next';

export const seoMetaDataDefault = (props?: Metadata): Metadata => {
  return {
    title: 'Tripper User Web App 1',
    description: 'Tripper User Web App',
    openGraph: {
      type: 'website',
      url: '',
      images: [
        {
          url: '',
          alt: 'Tripper User',
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: '@tripper_user',
      description: '@tripper_user',
      card: 'summary_large_image',
      images: [
        {
          url: '',
          alt: 'Tripper User',
          width: 800,
          height: 600
        }
      ]
    },
    ...props
  };
};
