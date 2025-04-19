# AussieWay Visa

Next.js + Decap CMS (Markdown) сайт для отображения статей о визах.

## Основные технологии
- ✅ Next.js
- ✅ Bootstrap
- ✅ Decap CMS
- ✅ Markdown (.md) статьи
- ✅ Деплой через Netlify

## Структура проекта
- `content/posts/` — Markdown статьи
- `public/admin/` — Decap CMS (`index.html` + `config.yml`)
- `pages/articles/[slug].js` — отрисовка статьи

## Деплой
- Подключается к GitHub → Netlify
- Включается Netlify Identity + Git Gateway

## Запуск локально
```bash
npm install
npm run dev
