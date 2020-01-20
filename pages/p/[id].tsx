import React from "react";
import {NextPageContext} from "next";

import Layout from "../../components/MyLayout";

interface IPost extends NextPageContext {
  name: string;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
}

function Post(props: IPost) {
  return (
    <Layout>
      <h1 className="text-5xl mb-2">{props.name}</h1>
      <p>{props.summary.replace(/<[/]?[pb]>/g, "")}</p>
      {props.image && <img src={props.image.medium} />}
    </Layout>
  );
}

Post.getInitialProps = async function(context: NextPageContext) {
  const {id} = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return {...show};
};

export default Post;
