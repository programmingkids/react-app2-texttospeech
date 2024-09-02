import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Container, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

// 読み上げ用オブジェクトの取得
const synth = window.speechSynthesis;

export const TextToSpeechForm = () => {
  // 読み上げるテキスト
  const [text, setText] = useState('こんにちは');
  // 読み上げるボイス
  const [voiceURI, setVoiceURI] = useState('');
  // 対応可能なボイス一覧
  const [voices, setVoices] = useState([]);

  // セレクトボックスのイベントハンドラー
  const handleChange = (e) => {
    // ボイスの設定
    setVoiceURI(e.target.value);
  };

  // 読み上げボタンのイベントハンドラー
  const handleClick = (e) => {
    // 発声用オブジェクト作成
    const utterance = new window.SpeechSynthesisUtterance(text);
    // 選択したボイスを取得
    const voice = voices.find((v) => v.voiceURI === voiceURI);
    // ボイスの設定
    utterance.voice = voice;
    // 読み上げる
    synth.speak(utterance);
  };

  // 読み上げるテキストのイベントハンドラー
  const handleOnChangeTextField = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // ボイス一覧取得
    const vs = synth.getVoices().filter((v) => v.lang === 'ja-JP');
    setVoices(vs);

    // 初回読み上げ
    const text = 'こんにちは、テキスト読み上げアプリです';
    const utterance = new window.SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }, []);

  const handleClickHowTo = (e) => {
    const text =
      '音声を選択します。テキストボックスに読み上げる文字を入力します。最後に、読み上げボタンをクリックします';
    // 発生用オブジェクト作成
    const utterance = new window.SpeechSynthesisUtterance(text);
    // 選択したボイスを取得
    const voice = voices.find((v) => v.voiceURI === voiceURI);
    // ボイスの設定
    utterance.voice = voice;
    // 読み上げる
    synth.speak(utterance);
  };

  return (
    <Container maxWidth="sm">
      <Stack gap={3} sx={{}}>
        <Typography variant="subtitle" component="h1" marginTop={2}>
          テキスト読み上げ
        </Typography>
        <FormControl size="small">
          <InputLabel id="voice-select-label">音声選択</InputLabel>
          <Select
            labelId="voice-select-label"
            id="voice-select"
            label="音声選択"
            variant="outlined"
            onChange={handleChange}
            defaultValue=""
          >
            {voices.map((v, index) => (
              <MenuItem key={index} value={v.voiceURI}>
                {v.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box>
          <TextField
            id="speech-text"
            label="読み上げるテキスト"
            fullWidth
            multiline
            rows={5}
            defaultValue={text}
            onChange={handleOnChangeTextField}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            size="large"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            読み上げ
          </Button>
          <Button variant="contained" size="large" onClick={handleClickHowTo}>
            使い方
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};
