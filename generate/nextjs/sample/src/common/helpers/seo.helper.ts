import { Metadata } from 'next';

export const seoMetaDataDefault = (props?: Metadata): Metadata => {
  return {
    title: 'NextJS Titlte',
    description: 'NextJS Description',
    openGraph: {
      type: 'website',
      url: '',
      images: [
        {
          url: '',
          alt: 'NextJS Open Graph Image',
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: '@nextjs_user',
      description: '@nextjs_user',
      card: 'summary_large_image',
      images: [
        {
          url: '',
          alt: 'NextJS Twitter Image',
          width: 800,
          height: 600
        }
      ]
    },
    ...props
  };
};
