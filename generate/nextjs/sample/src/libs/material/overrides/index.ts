import { Components, Theme } from '@mui/material/styles';

import Accordion from './Accordion';
import Alert from './Alert';
import AppBar from './AppBar';
import Autocomplete from './Autocomplete';
import Avatar from './Avatar';
import Backdrop from './Backdrop';
import Badge from './Badge';
import BottomNavigation from './BottomNavigation';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Card from './Card';
import Checkbox from './Checkbox';
import Chip from './Chip';
import Container from './Container';
import Dialog from './Dialog';
import Divider from './Divider';
import Drawer from './Drawer';
import FloatingActionButton from './FloatingActionButton';
import Grid from './Grid';
import ImageList from './ImageList';
import Link from './Link';
import List from './List';
import Menu from './Menu';
import Pagination from './Pagination';
import Paper from './Paper';
import Popover from './Popover';
import Popper from './Popper';
import Progress from './Progress';
import Radio from './Radio';
import Rating from './Rating';
import Select from './Select';
import Skeleton from './Skeleton';
import Slack from './Slack';
import Slider from './Slider';
import Snackbar from './SnackBar';
import SpeedDial from './SpeedDial';
import Stepper from './Stepper';
import Switch from './Switch';
import Table from './Table';
import Tabs from './Tabs';
import TextField from './TextField';
import ToggleButton from './ToggleButton';
import Tooltip from './Tooltip';
import Typography from './Typography';

const components: ((theme: Theme) => Components<Omit<Theme, 'components'>>)[] = [
  Accordion,
  Alert,
  AppBar,
  Autocomplete,
  Avatar,
  Backdrop,
  Badge,
  BottomNavigation,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Chip,
  Container,
  Dialog,
  Divider,
  Drawer,
  FloatingActionButton,
  Grid,
  ImageList,
  Link,
  List,
  Menu,
  Pagination,
  Paper,
  Popover,
  Popper,
  Progress,
  Radio,
  Rating,
  Select,
  Skeleton,
  Slack,
  Slider,
  Snackbar,
  SpeedDial,
  Stepper,
  Switch,
  Table,
  Tabs,
  TextField,
  ToggleButton,
  Tooltip,
  Typography
];

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign({}, ...components.map((component) => component(theme)));
}
