import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Container, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

// 読み上げ用オブジェクトの取得


export const TextToSpeechForm = () => {
  // 読み上げるテキスト
  const [text,setText] = useState('こんにちは');
  // 読み上げるボイス
  const [voiceURI, setVoiceURI] = useState('');
  // 対応可能なボイス一覧
  const [voices, setVoices] = useState([]);
  
  // セレクトボックスのイベントハンドラー
  const handleChange = (e) => {
    // ボイスの設定

  };
  
  // 読み上げボタンのイベントハンドラー
  const handleClick = (e) => {
    // 発声用オブジェクト作成
    
  };
  
  // 読み上げるテキストのイベントハンドラー
  const handleOnChangeTextField = (e) => {
    
  };
  
  useEffect(() => {
    // ボイス一覧取得
    
  },[]);
  
  return (
    <Container maxWidth="lg">
      <Stack spacing={3} sx={{}}>
        <Typography
          variant="subtitle" 
          component="h1" 
          marginTop={2}
        >
          テキスト読み上げ
        </Typography>
        
      </Stack>
    </Container>
  );  
};
