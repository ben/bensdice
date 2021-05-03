# How to help me

I could really use it.
This document tells you what you need to know to help out with this project.

## Tools you'll need

- [Blender](https://blender.org)
- That's it!

## How to export

Each dice set has its own `.blend` file.
Open it up, select the **entire hierarchy** of the die you want to export (all parts must be parented to the same root), and go to File ⇒ Export ⇒ glTF.
Make sure your options look like the image below.
Then save over the top of the correct die file.

<img width="300" alt="image" src="https://user-images.githubusercontent.com/39902/116891517-a5a65780-abe3-11eb-85fd-576bc7963ee6.png">

## How to test

It's easiest to run Foundry locally, and clone this repo into the `modules` directory, and start Foundry up in a browser tab.
Configure DSN with the dice set you're working on.
When you make a change, just reload your tab and roll some dice, and you should see the new versions.

## What is included with an export

This is done with [Blender's glTF support](https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html), so not everything you can do in Blender will come out.
These are the things you can count on:

- Geometry; everything is converted to triangles
- Principled BSDF properties: base color, metallicness, roughness, baked ambient occlusion, normal map (tangent space, +y up), emissivity
  - This includes texture maps; try to limit these to 1024x1024 or smaller.
  - Possibly (haven't tried): clearcoat, clearcoat roughness, clearcoat normal, transmission, shadeless materials
- Animations, but in order to loop properly the end frames must all match
