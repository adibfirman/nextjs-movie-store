import React from "react";
import useSWR from "swr";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../components/MyLayout";

interface IPostLink {
  id: number;
  title: string;
  name: string;
  show: string;
}

function PostLink(props: IPostLink) {
  return (
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a className="text-teal-500 hover:text-teal-400">{props.name}</a>
      </Link>
    </li>
  );
}

function Index(props: {shows: IPostLink[]}) {
  const {data, error} = useSWR("/api/randomQuote", url => {
    return fetch(url).then(r => r.json());
  });

  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = "Loading...";
  if (error) quote = "Failed to fetch the quote...";

  return (
    <Layout>
      <div>
        Quotes of the day:
        <p>{quote}</p>
        <p>{author}</p>
      </div>
      <h1 className="text-5xl mb-2">My Blog</h1>
      <ul>
        {props.shows.map((show: IPostLink) => (
          <PostLink key={show.id} {...show} />
        ))}
      </ul>
    </Layout>
  );
}

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry: IPostLink) => entry.show)
  };
};

export default Index;
