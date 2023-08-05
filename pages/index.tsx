import React from 'react';
import axios from 'axios';

interface ExampleProps {
  data?: string[]
}

interface Item {
  name: string,
  _id: string
}

export default function Example({ data = [] }: ExampleProps) {
  return (
    <div>
      <h1>Data fetched using Server-Side Rendering (SSR)</h1>
      <ul>
        {data.map((item: any) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(`${process.env.WEBSITE}/api/data`); // Replace with your actual API endpoint URL
    const data = response.data ?? []; // Use optional chaining and nullish coalescing to handle undefined values
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        data: [],
      },
    };
  }
}