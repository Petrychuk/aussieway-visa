 import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function getStaticPaths() {
  const files = fs.readdirSync('content/posts');

  const paths = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('content/posts', filename),
      'utf-8'
    );
    const { data } = matter(markdownWithMeta);

    return {
      params: {
        slug: data.url || filename.replace('.md', ''),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = fs.readdirSync('content/posts');

  const matchedFile = files.find((filename) => {
    const fileContent = fs.readFileSync(path.join('content/posts', filename), 'utf-8');
    const { data } = matter(fileContent);
    return data.url === slug || filename.replace('.md', '') === slug;
  });

  const markdownWithMeta = fs.readFileSync(
    path.join('content/posts', matchedFile),
    'utf-8'
  );

  const { data, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter: data,
      content,
    },
  };
}

export default function ArticlePage({ frontmatter, content }) {
  const { title, date, author, description, image, alt } = frontmatter;

  return (
    <div className="container mt-5">
      <h1>{title}</h1>
      <p className="text-muted">{date} — {author}</p>
      {image && <img src={image} alt={alt} className="img-fluid mb-4" />}
      <p><em>{description}</em></p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
   