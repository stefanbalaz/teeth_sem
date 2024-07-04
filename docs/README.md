# Project Documentation

This document provides guidelines and requirements for configuring and managing content within the application. It covers various components and their properties, as well as the steps to ensure content is displayed correctly.

## Table of Contents

1. [General Configuration](#general-configuration)
2. [Components](#components)
   - [Navigation](#navigation)
   - [Hero Component](#hero-component)
   - [Competency](#competency)
   - [Two Column Content](#two-column-content)
   - [Three Column Content](#three-column-content)
   - [Picture Bullet Section](#picture-bullet-section)
   - [Conversion Component](#conversion-component)
3. [Folder Structure](#folder-structure)

## General Configuration

### JSON Configuration and Contentful Integration

- **Topic Matching**: Topics are defined using JSON in Contentful Headless CMS. The JSON structure must match the required "topic" field entered in Contentful for proper integration. The first element in the JSON tree must match the required field "topic" entered in Contentful.
- **Backup Configuration**: There is a backup default content configuration in the codebase located in `componentConfig.ts`. This backup loads if Contentful content does not load within 2.5 seconds or if there is an error.
- **Picture Handling**:
  - For new content topics defined in a JSON in Contentful, pictures must be uploaded in "Media" in Contentful, and the picture URL must be set in the JSON.
  - For the backup version, the picture is set in the `src/assets` folder.
- **Layout Definition**: New layout can be defined in `Layouts.tsx`. The layout name must be defined in the JSON, and the corresponding layout elements (components and their props) must be specified in the JSON file.

## Components

### Navigation

- **Display Condition**:
  - Navigation is shown if `navigationList.length > 0`.
- **Multiple Links**:
  - It is possible to set multiple navigation links.

### Hero Component

- **Eye Catcher**:
  - Optional. Controlled by the boolean `eyeCatcherVisibility`.
- **Components**:
  - Component `Headline2` must contain text child; otherwise, the component will not be rendered.
  - Component `Headline3` must contain text child; otherwise, the component will not be rendered.
  - Component `Paragraph` must contain text child; otherwise, the component will not be rendered.
- **Button and Phone Number**:
  - Component `PhoneNumber` must contain text child; otherwise, the component will not be rendered.
  - The `Button` component must contain `buttonLink` property; otherwise, the component will not be rendered.
  - If neither the `Button` nor the `PhoneNumber` components are rendered, the entire `div` wrapping them will not be rendered.

### Competency

- **Display Conditions**:
  - Either component property `skills` (skill list), components' children `headline1Text`, or `paragraphText` must be available; otherwise, the entire block/component will not be rendered.
- **Components**:
  - Component `Headline1` must contain text child; otherwise, the component will not be rendered.
  - Component `Paragraph` must contain text child; otherwise, the component will not be rendered.
- **Skills**:
  - The component property `skills` (skill list) must be available; otherwise, the component will not be rendered.
  - If a skill component has a `label` property, it will be displayed as a card. If it also contains a `link` property, it will become a button. If a skill component does not contain a `label` property, the single skill component will not be rendered.

### Two Column Content

- **Display Condition**:
  - If component property `contentButtonBlockArray` is not available, the entire block/component will not be rendered.
- **Components**:
- Component `Headline1` must contain text child; otherwise, the component will not be rendered.
- The `Button` component must contain `buttonLink` property; otherwise, the component will not be rendered.
- **More Info Link**:
  - Controlled by the boolean `moreInfoVisible`.

### Three Column Content

- **Display Condition**:
  - If `headlineParagraphArray` is not available, the entire block/component will not be rendered.
- **Components**:
  - Component `Headline1` must contain text child; otherwise, the component will not be rendered.
  - Component `Headline2` must contain text child; otherwise, the component will not be rendered.

### Picture Bullet Section

- **Display Condition**:
  - If both components' properties `pictureSrc` and `faviconHeadlineParagraphBlockArray` are not available, the entire block/component will not be rendered.
- **Picture Position**:
  - Controlled by the boolean `pictureOnRight`. If false, the picture is on the left.

### Conversion Component

- **Display Conditions**:
  - Either components' text child `headline2Text`, `paragraphText`, `phoneNumber`, or component's property `buttonLink` must be available; otherwise, the entire block/component will not be rendered.
  - Component `Headline2` must contain text child; otherwise, the component will not be rendered.
  - Component `Paragraph` must contain text child; otherwise, the component will not be rendered.
- **Eye Catcher**:
  - Optional. Controlled by the boolean `eyeCatcherVisibility`.
- **Button and Phone Number**:
  - Component `PhoneNumber` must contain text child; otherwise, the component will not be rendered.
  - The `Button` component must contain `buttonLink` property; otherwise, the component will not be rendered.
  - If neither the `Button` nor the `PhoneNumber` components are rendered, the entire `div` wrapping them will not be rendered.

## Folder Structure

The documentation and sample files are organized in a dedicated `docs` folder at the root of the project.

### Following files are included:

- **Mockup example**:

  - Mockup example with all rendered components.
  - File name: `zaehnsationell_mockup.png`.

- **JSON example**:

  - JSON template for Contentful config with all components.
  - File name: `zaehnsationell_json_template.json`.

- **componentConfig.ts example topic**:

  - componentConfig.ts example with all components.
  - File name: `zaehnsationell_componentConfig_topic_template.md`.

- **componentConfig.ts example legal**:

  - componentConfig.ts example with full legal content.
  - File name: `zaehnsationell_componentConfig_legal_template.md`.
