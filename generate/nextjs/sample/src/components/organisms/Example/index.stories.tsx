import { Meta, StoryObj } from '@storybook/react';

import Example, { IExampleProps } from '.';

interface StoryProps extends IExampleProps {
  children?: React.ReactNode;
}
const meta = {
  title: 'Components/organisms/Example',
  component: Example,
  tags: ['autodocs'],
  argTypes: {}
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({ children }: StoryProps) => <Example>{children}</Example>;

Normal.args = {};
