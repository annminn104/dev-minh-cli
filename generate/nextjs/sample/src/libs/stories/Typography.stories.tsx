import Typography from '@mui/material/Typography';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Material/Component/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select'
      },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle',
        'body1',
        'body2',
        'button',
        'caption',
        'overline'
      ]
    },
    textTransform: {
      control: {
        type: 'select'
      },
      options: ['none', 'capitalize', 'uppercase', 'lowercase']
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Normal: Story = {
  render: (args) => (
    <div>
      <Typography {...args}>Typography</Typography>
      <div style={{ marginTop: '16px' }}>
        <b>View more: </b>
        <a href='https://mui.com/material-ui/react-typography/' target='_blank' rel='noreferrer'>
          https://mui.com/material-ui/react-typography/
        </a>
      </div>
    </div>
  ),

  args: {
    variant: 'h1',
    textTransform: 'none',
    color: 'inherit'
  }
};
