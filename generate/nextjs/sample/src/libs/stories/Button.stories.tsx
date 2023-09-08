import Button from '@mui/material/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Material/Component/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['inherit', 'primary', 'secondary'],
      control: {
        type: 'select'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    fullWidth: {
      control: {
        type: 'boolean'
      }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select'
      }
    },
    variant: {
      options: ['text', 'outlined', 'contained'],
      control: {
        type: 'select'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Normal: Story = {
  render: (args) => (
    <div>
      <Button {...args}>BUTTON</Button>
      <div style={{ marginTop: '16px' }}>
        <b>View more: </b>
        <a href='https://mui.com/material-ui/react-button/' target='_blank' rel='noreferrer'>
          https://mui.com/material-ui/react-button/
        </a>
      </div>
    </div>
  ),

  args: {
    variant: 'outlined',
    color: 'primary',
    disabled: false,
    fullWidth: false,
    size: 'medium'
  }
};
