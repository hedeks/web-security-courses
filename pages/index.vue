<template>
  <article
    class="flex prose max-w-none prose-pre:text-black dark:prose-pre:text-white xl:prose-lg md:prose-md prose-slate dark:prose-invert w-full prose-img:w-1/2 prose-img:mx-auto prose-img:h-auto prose-pre:bg-gray-100 prose-pre:border dark:prose-pre:border-gray-700 dark:prose-pre:bg-gray-800 prose-h1:font-semibold">
    <ContentRendererMarkdown :value="ast"/>
  </article>
</template>



<script setup lang="ts">
import { parseMarkdown } from '#imports';
const { data } = await useFetch('/api/lection/hunting-for-vulnerabilities-in-web-applications');
let ast: any;
if (data.value) {
  ast = await parseMarkdown(data.value[0] as string);
}
console.log(ast)
useSeoMeta({
  ogImage: '/logo.svg',
});
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg',
      href: '/logo.svg'
    }
  ]
});
</script>