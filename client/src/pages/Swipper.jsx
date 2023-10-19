import React from 'react'

export default function Swippers() {
  return (
    <Swiper navigation>
    {offerListings &&
      offerListings.length > 0 &&
      offerListings.map((listing) => (
        <SwiperSlide>
          <div
            style={{
              background: `url(${listing.imageUrls[0]}) center no-repeat`,
              backgroundSize: 'cover',
            }}
            className='h-[500px]'
            key={listing._id}
          ></div>
        </SwiperSlide>
      ))}
  </Swiper>
  )
}
