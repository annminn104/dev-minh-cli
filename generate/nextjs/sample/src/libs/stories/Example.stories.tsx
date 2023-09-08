import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Material/Example',
  component: undefined,
  tags: ['autodocs'],
  argTypes: {
    viewMore: {
      description: 'https://mui.com'
    }
  }
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = () => (
  <div>
    Click: <a href='https://mui.com'> See more at MUI React</a>
  </div>
);
Normal.args = {};
