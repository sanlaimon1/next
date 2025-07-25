"use client";

import react, { use, useEffect, useState } from "react";
import styles from './page.module.css';
import useSWR from "swr";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setError] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     });
  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res.json();
      
  //     setData(data);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)


  return (
    <div className={styles.container}>
      Dashboard
    </div>
  );
}

export default Dashboard;