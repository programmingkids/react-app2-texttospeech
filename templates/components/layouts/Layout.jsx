import { Outlet } from 'react-router-dom';
import { AppTheme } from './AppTheme';
import { TextToSpeechAppBar } from './../blocks/TextToSpeechAppBar';

export const Layout = () => (
  <AppTheme>
    <TextToSpeechAppBar />
    <Outlet />
  </AppTheme>
);
