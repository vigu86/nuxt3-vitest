<template>
  <main>
    <SectionBanner title="Section Title" body="Section Body" :button="{
      text: 'button text',
      url: 'faq'
    }"/>

    <SectionArticles :articles="[
      {
        title: 'Article #1',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequuntur?'
      },
      {
        title: 'Article #2',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequuntur?'
      },
      {
        title: 'Article #3',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequuntur?'
      },
    ]"/>
    
    <SectionImages :filters="['people', 'animals', 'city']" />
  </main>
</template>

