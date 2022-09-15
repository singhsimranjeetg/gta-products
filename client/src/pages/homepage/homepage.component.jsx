import React, { Profiler, useEffect } from 'react';

import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { listBooks } from '../../graphql/queries';
//import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import { HomePageStyle } from './homepage.styles';
// import Slideshow from "../../components/image-slideshow/imageSlideshow.component"
import FeaturedCollection from '../../components/featured-collection/featured-collection.component';

//homepage - whole window object
//directory menu

const HomePage = () => {
  const fetchBooks = async () => {
    try {
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listBooks,
        authMode: 'API_KEY'
      });
      const books = data.listBooks.items;
      const featured = books.filter((book) => {
        return !!book.featured;
      });
      console.log('books', books);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <HomePageStyle>
      {/* <Slideshow /> */}
      <Profiler
        id="Directory and Slideshow"
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration
          });
        }}
      >
        <Directory />
        <FeaturedCollection />
      </Profiler>
    </HomePageStyle>
  );
};

export default HomePage;
