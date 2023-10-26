import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from '@sanity/vision'

const config = defineConfig({
    projectId: 'js2nhuqq',
    dataset: "production", 
    title: "Sanity Blog",
    apiVersion: "2023-09-20",
    basePath: "/admin",
    plugins: [
      deskTool(),
      visionTool()
    ],
    schema: { types: schemas }
})

export default config;