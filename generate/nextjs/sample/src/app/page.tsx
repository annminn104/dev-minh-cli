import { Metadata } from 'next';
import * as Styled from './styles';
import { Typography } from '@mui/material';
import { seoMetaDataDefault } from '@common/helpers';

export const metadata: Metadata = {
  ...seoMetaDataDefault({ title: 'Home', description: 'Home' })
};

export default function Home() {
  return (
    <Styled.Wrapper>
      <Typography variant='h2'>NextJS 13 Example</Typography>
    </Styled.Wrapper>
  );
}
