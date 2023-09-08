---
to: src/components/<%= level %>/<%= h.changeCase.pascalCase(name) %>/index.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react';

import <%= h.changeCase.pascalCase(name) %>, { I<%= h.changeCase.pascalCase(name) %>Props } from '.';

interface StoryProps extends I<%= h.changeCase.pascalCase(name) %>Props {
  children?: React.ReactNode;
}
const meta = {
  title: 'Components/<%= level %>/<%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
  tags: ['autodocs'],
  argTypes: {}
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = ({children}:StoryProps) => (
  <<%= h.changeCase.pascalCase(name) %>>{children}</<%= h.changeCase.pascalCase(name) %>>
);

Normal.args = {}
