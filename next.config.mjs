/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Полностью статическая выдача: next build -> `.next` с prerendered HTML.
  // Для деплоя на любой статический хостинг раскомментируйте:
  // output: 'export',
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
