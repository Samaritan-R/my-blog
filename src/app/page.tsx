'use client';
import React, { useEffect } from 'react';
import "./globals.css";
import Header from '@/app/components/header';
import Cover from '@/app/components/cover';
import axios from 'axios';
import { Button, Flex, Upload, UploadProps, message } from 'antd';

// 上传文件
function filesUpload(formData: FormData) {
  console.log('formData', formData);
  return axios.post('/api/order/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}


const Home = () => {

  const [fileList, setFileList] = React.useState([] as any[]);

  // 移除文件
  const handleRemove = (file: any) => {
    const files = fileList?.filter((item) => item.uid !== file?.uid);
    setFileList(files);
  }

  // 保存选择的文件
  const handleBeforeUpload = async (file: any, files: any[]) => {
    console.log('files', file, files);
    setFileList([...fileList, ...files]);
  }

  // 上传多个文件
  const handleUploadMultiple = async () => {
    console.log('fileList', fileList);
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files', file);
    });
    await filesUpload(formData);
    console.log(formData.keys(), 'formData');
    message.success('上传成功');
  }



  return <>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Upload
        multiple
        fileList={fileList}
        onRemove={handleRemove}
        beforeUpload={handleBeforeUpload}
      >
        <Button>选择文件</Button>
      </Upload>
      <br />
      <Button onClick={handleUploadMultiple}>点击上传多文件</Button>
      <Button onClick={() => {
        axios.get('/api/order/1')
      }}>get</Button>
    </div >
  </>
}

export default Home;