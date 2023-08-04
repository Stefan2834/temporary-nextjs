import React from 'react';

interface ExampleProps {
  data?: string[];
}

export default function Test({ data = [] }: ExampleProps) {
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
  console.log('mirel')
  const data: string[] = ['0','1']
  return {
    props: {
      data,
    },
  };
}