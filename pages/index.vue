<template>
  <article
    class="flex prose-h1:font-semibold prose max-w-none xl:prose-lg md:prose-md prose-slate dark:prose-invert w-full prose-img:w-1/2 prose-img:mx-auto prose-img:h-auto">
    <ContentDoc path="/"/>
  </article>
</template>



<script setup>
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