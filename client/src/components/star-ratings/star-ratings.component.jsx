import React from "react"
import StarRatings from 'react-star-ratings';
 
/*class Foo extends React.Component {
    changeRating( newRating) {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
      // rating = 2;
      return (
        <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={6}
          name='rating'
        />
      );
    }
}
 */
 
class StarRating extends React.Component {
  render() {
    // aggregateRating = 2.35;
    return (
      <StarRatings
        rating={4}
        starDimension="15px"
        starSpacing="5px"
        numberOfStars = {5}
      />
    );
  }
}

export default StarRating