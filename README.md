# Navigation
* ***[Description](#description)***
* ***[How to start?](#how-to-start)***
* ***[Backend](#backend)***
* ***[Why should you try it?](#why-should-you-try-it)***
* ***[License](#license)***

# Description

This repository constitutes the frontend component of the project solution, complementing the functionality provided by the [backend solution](https://github.com/LeatherDiamond/chatGPT-content-generator). It is dedicated to delivering an exceptional user experience through a dynamic and responsive interface built using React.

The backend is hosted on "PythonAnywhere," while the frontend resides on GitHub Pages. The deployed version of the project is accessible through the following **[link](https://leatherdiamond.github.io/chatGPT-content-generator-Frontend/)**. This link allows you to explore all the functionalities of the project, as the frontend seamlessly communicates with the backend through APIs.

Discover the harmonious synergy between the frontend and backend components, designed to elevate your creative projects to new heights.

# How to start?

> Make sure that [node.js](https://nodejs.org/en) is intalled on your machine. 

**1. Clone current repository on your local machine:**
```
git clone https://github.com/LeatherDiamond/chatGPT-content-generator-Frontend.git
```

**2. Configure mandatory data:**

Create `.env` file in the root derictory and provide REACT_APP_API_URL variable value.
> Note that it should be backend URL. For local project functionality it can be `http://localhost:8000`

**3. Install all the dependencies:**

Navigate to the root directory of the cloned project and run the following commands
```
config set legacy-peer-deps true
npm install
```
or use 
```
npm install --legacy-peer-deps
```

**4. Run the project**
```
npm start
```
> ###### NOTE:
> Make sure that [Backend](https://github.com/LeatherDiamond/chatGPT-content-generator) part is launched on your machine and also configured correctly to provide communication between Backend and Frontend.

After completing all the steps, the project will be launched and available at http://localhost:3000/

# Backend

The frontend seamlessly communicates with the backend, which serves as the backbone of the project solution. The backend facilitates the generation of compelling titles, agendas, and well-organized content. Additionally, it retrieves images that align with the project's conceptual requirements. The frontend leverages these backend features to provide users with a robust content ideation and image generation platform. Explore more details of the backend solution by the following [link](https://github.com/LeatherDiamond/chatGPT-content-generator).

# Why should you try it?

1. ***Effortless Content Ideation:*** With the project, generating content ideas becomes a breeze. It assists in brainstorming by automatically generating titles and agendas that serve as starting points for your creative projects.

2. ***Structured Content Creation:*** The project streamlines the content creation process by suggesting titles and agendas, while also recording generated paragraphs in a structured manner. This guarantees your final output is organized and coherent.

3. ***Time-Saving:*** Save hours by automating brainstorming, outlining, and content saving. The project significantly reduces the time invested in content preparation while maintaining high quality.

4. ***Diverse Applications:*** Suited for writers, presenters, and content creators, the project caters to various needs. It's perfect for generating blog post ideas, crafting presentation outlines, or creating engaging snippets for social media.

5. ***Harnessing GPT-3.5:*** Leveraging GPT-3.5's language capabilities, the project produces human-like text adapted to your context. Content is aligned with your intended style and tone, adding authenticity to your work.

6. ***Customizability:*** Easily modify parameters such as the number of titles and items in agendas, length of paragraphs to match your preferences. This customization empowers you to fine-tune generated content to fit your project perfectly.

7. ***Image Generation:*** Take your creativity further with the ability to generate images based on your queries. The project fetches visuals that align with your ideas and saves them to the root directory, adding a visual dimension to your content.

Experience the convenience, efficiency, and accessibility of automated content generation. Try out the project and witness how it transforms your content creation workflow. Bid farewell to writer's block and welcome an endless stream of ideas, structured content, and visuals, all neatly saved in separate files alongside your project and always available for downloading from your browser.

# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/LeatherDiamond/chatGPT-content-generator-Frontend/blob/main/LICENSE) file for details.
