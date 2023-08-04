import React from 'react';
import axios from 'axios';

interface ExampleProps {
  data?: string[];
}

export default function Example({ data = [] }: ExampleProps) {
  return (
    <div>
      <h1>Data fetched using Server-Side Rendering (SSR)</h1>
      <ul>
        {data.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:3000/api/data'); // Replace with your actual API endpoint URL
    const data = response.data ?? []; // Use optional chaining and nullish coalescing to handle undefined values
    console.log(response, data)
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