"use client"
import React from 'react';
import MyMenu from '@/component/molecules/my-menu/my-menu';
import { Box, Typography } from '@mui/material';



const Page = () => {
  const developers = [
    { name: "Juliana", role: "Backend Developer", photo: "image2.jpg" },
    { name: "Stella", role: "Designer Developer", photo: "image2.jpg" },
    { name: "Hamza", role: "Frontend Developer", photo: "image1.jpg" },
    { name: "Jonathan", role: "Backend Developer", photo: "image2.jpg" },
    { name: "Aline", role: "Backend Developer", photo: "image2.jpg" }
  ];

  return (
    <div>
      <MyMenu />
      {/* Le reste du contenu de votre page */}
      
    </div>
  );
};

export default Page;
