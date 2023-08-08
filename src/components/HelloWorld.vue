<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <!-- <v-img  height="300" src="@/assets/logo.svg" /> -->

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Paintbrush Outdoors</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-card>
            <i class="fa-brands fa-shopify fa-xl"></i>
            <v-card-title>Shopify Partner</v-card-title>
            <v-card-text>

              <ul class="text-left ml-2">
                <li>Custom Apps</li>
                <li>Theme Customization</li>
                <li>New Store Setup</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-card color="primary">
            <v-icon icon="mdi-play" size="large" start />
            <v-card-title>
              Mobile Development
            </v-card-title>
            <v-card-text>
              <ul class="text-left ml-2">
                <li>Push Notifications</li>
                <li>Cross Platform</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-card
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />
              <v-card-title>
                Custom Web Development
              </v-card-title>
              <v-card-text>
                <ul class="text-left ml-2">
                <li>PWA</li>
                <li>SPA</li>
                <li>Cloud Hosted</li>
              </ul>
              </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-card>
            <v-icon icon="mdi-earth"></v-icon>
            <v-card-title>Geographic Information System (GIS)</v-card-title>
            <v-card-text>
              <ul class="text-left ml-2">
                <li>Google Maps</li>
                <li>Mapbox</li>
                <li>Esri</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card>
            <v-icon icon="mdi-earth"></v-icon>
            <v-card-title>Static Web Site Development</v-card-title>
            <v-card-text>
              <li>PWA</li>
              <li>SPA</li>
              <li>Free Hosting</li>
              <li>Bring Your Own Custom Domain</li>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>
