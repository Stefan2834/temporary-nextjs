import React, { useState } from 'react'
import Rating from '@mui/material/Rating';


export default function Test() {

  return (
    <>
      <Rating name="half-rating" defaultValue={2.25} precision={1} readOnly />
    </>
  );
}