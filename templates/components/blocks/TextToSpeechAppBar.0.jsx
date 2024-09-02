import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HelpIcon from '@mui/icons-material/Help';

export const TextToSpeechAppBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton component={Link} to={'/'} color="inherit">
          <KeyboardVoiceIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, ml: 1, display: { sm: 'block' } }}
        >
          テキスト読み上げアプリ
        </Typography>
        <IconButton component={Link} to={'/about'} sx={{ fontSize: '2em' }}>
          <HelpIcon sx={{ fontSize: '1em' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
