import { Box, Stack, Paper, Button } from '@mui/material';
import { Container, Typography } from '@mui/material';

export const About = () => (
  <Container>
    <Stack direction="column" alignItems="center" p={2} gap={3}>
      <Typography variant="h4" component="h2">
        アプリケーションの紹介
      </Typography>
      <Typography variant="subtitle1" component="h3">
        テキストを読み上げます
      </Typography>
      <Box>
        <li>入力したテキストを音声で読み上げます</li>
        <li>音声の選択が可能です</li>
      </Box>
    </Stack>
  </Container>
);
