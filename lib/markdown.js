import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { randomUUID } from 'crypto';

//
// ✅ Общие функции для .md -> HTML
//

// Подгрузка intro-блока (например, для страниц visa-work, visa-family)
export async function getIntroContent(slug = 'home') {
  const filePath = path.join(process.cwd(), 'content', 'intro', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    ...data,
    html: contentHtml,
  };
}

// Подгрузка секции details (например, визовые условия, текст слева)
export async function getVisaDetails(slug) {
  const filePath = path.join(process.cwd(), 'content', 'details', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Details file not found: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(fileContent);

  return processedContent.toString();
}

//
// ✅ Новые функции для статей и слайдера
//

// Получить массив всех статей (для слайдера и превью)
export async function getSliderPosts() {
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      id: data.id || randomUUID(),
      title: data.title || '',
      description: data.description || '',
      image: data.image ? data.image.replace('/assets/uploads/', '') : '',
      alt: data.alt || '',
      url: data.url || '',
      date: data.date || '',
      author: data.author || 'Unknown Author',
      keywords: data.keywords || '',
    };
  });

  return posts;
}

// Получить одну статью по slug (для /articles/[slug])
export async function getSinglePost(slug) {
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const matchedFile = filenames.find((filename) => {
    const fileContent = fs.readFileSync(path.join(postsDirectory, filename), 'utf-8');
    const { data } = matter(fileContent);
    return data.url === slug || filename.replace('.md', '') === slug;
  });

  if (!matchedFile) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const fileContent = fs.readFileSync(path.join(postsDirectory, matchedFile), 'utf-8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    frontmatter: {
      ...data,
      date: typeof data.date === 'string' ? data.date : new Date(data.date).toISOString(),
    },
    contentHtml,
  };
}
