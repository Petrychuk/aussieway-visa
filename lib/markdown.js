import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

export async function getIntroContent(slug = 'home') {
  const filePath = path.join(process.cwd(), 'content', 'intro', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(remarkGfm)  // ✅ поддержка Markdown-таблиц, списков и цитат
    .use(html, { sanitize: false }) // ✅ разрешаем HTML-теги внутри Markdown
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    ...data,
    html: contentHtml,
  };
}

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

