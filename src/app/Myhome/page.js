import React from 'react'
import Banner from '../compontes/banner'
import Card from '../compontes/card';
import Link from 'next/link';

export default function First() {
  return (
    <div>
      <Banner />

      <div className="flex flex-wrap w-11/12 my-8 mx-auto ">
        <Link href="/cart_book">
          <Card />
        </Link>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  )
}
