import devSettings from './dev';
import prodSettings from './prod';

const isDev = process.env.NODE_ENV !== 'production';

export default (isDev ? devSettings : prodSettings);
