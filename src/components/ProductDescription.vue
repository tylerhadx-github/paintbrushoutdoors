<template>
  <div>
    <h1>Budget Scope</h1>
    <v-carousel hide-delimiters show-arrows="hover" cycle height="400">
      <v-carousel-item v-for="(slide,i) in slides" :key="i"
      :src="slide.src"
      cover
    ></v-carousel-item>
</v-carousel>
    <div>
      Affordable Smartphone Spotting Scope Attachment for Digiscoping Enthusiasts
    </div>
    <div>
      <ul>
        <li><a href="https://www.printables.com/model/575115-budget-scope">3D Model </a>- Free To Download</li>
        <li><a target="_blank"
            href="https://www.amazon.com/gp/product/B008CQ9CR6/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&amp;psc=1&_encoding=UTF8&tag=paintbrushout-20&linkCode=ur2&linkId=5da705ca419829c12c6846207f191e7e&camp=1789&creative=9325">Neodymium
            Magnet</a> - Amazon Affliate Link</li>
        <li><a target="_blank"
            href="https://www.amazon.com/gp/product/B07CJ1SPY7/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&amp;psc=1&_encoding=UTF8&tag=paintbrushout-20&linkCode=ur2&linkId=79b12758c989c7112c56cd0a9bb1c827&camp=1789&creative=9325">Smartphone
            Metal Plate with Adhesive</a> - Amazon Affliate Link</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: String, // Defining the "name" prop as a string
});

const slides = [
  {src: '/src/assets/banner_BS.png'},
  {src: '/src/assets/banner_BS.png'},
];

</script>
