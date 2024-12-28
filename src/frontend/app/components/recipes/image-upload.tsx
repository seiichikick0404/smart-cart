'use client';

import { UploadCloud } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [preview, setPreview] = useState(value);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onChange(result);
      };
      reader.readAsDataURL(file);
    }
  }, [onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
    },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-primary bg-primary/10' : 'border-muted-foreground/25'}`}
    >
      <input {...getInputProps()} />
      {preview ? (
        <div className="relative aspect-video">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ) : (
        <div className="py-8 flex flex-col items-center">
          <UploadCloud className="h-10 w-10 text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">
            {isDragActive
              ? 'ドロップしてアップロード'
              : '画像をドラッグ＆ドロップまたはクリックしてアップロード'}
          </p>
        </div>
      )}
    </div>
  );
}