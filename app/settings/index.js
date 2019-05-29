import devSettings from './dev';
import prodSettings from './prod';

const isDev = process.env.NODE_ENV !== 'production';
const settings = isDev ? devSettings : prodSettings;

export default settings;
