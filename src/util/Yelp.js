const apiKey =
  '7rMKFGvNW80prUMamoLb2zuGmcJ4LjQTVW0xLSI_mM2ZUmnWEyXI0Cvs91mrUqP6aTV08_DE_Vqwf9S7rTVv2uAujGrfTEqw2GXGQzY1q2c_wpkO4VZ5z8AmpBqEYnYx'

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            }
          })
        }
      })
  },
}

export default Yelp
