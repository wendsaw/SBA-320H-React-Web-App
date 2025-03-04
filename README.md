
this is the link to the my react app
https://wendbookstore.netlify.app/


Cutting-Edge Technology for an Online Bookstore
This website leverages the latest technology to create the best possible user experience for an online bookstore.

Overview
The homepage is the first page that renders upon visiting the website. From there, users can navigate to their desired pages seamlessly.

The website allows users to:

Download eBooks (if available).
Purchase hardcopy books.
Technical Description
By utilizing cutting-edge technology to build this React application, I was able to achieve the desired results.

Application Structure
The app consists of 14 pages, each with distinct routes.
It features three different layouts, which structure and connect the various pages.
The primary layout is RootLayout.
Components
This app is built with four key components:

Search Component – Allows users to search for books.
BookList Component – Displays books that match the search criteria.
BookDetails Component – Provides detailed information about a selected book.
Logo Component – Renders the bookstore's logo.
Custom Fetch Hook
Due to frequent data-fetching requirements, I implemented a custom fetch hook (useFetch). This hook:

Utilizes the useEffect hook to trigger data fetching whenever the URL, state, or error changes.
Includes a fetch function that dynamically updates based on the provided URL.
Styling
Inline CSS is used for some elements.
The majority of styling is handled within index.css.
This approach ensures a well-structured, efficient, and user-friendly experience for browsing and purchasing books online.

