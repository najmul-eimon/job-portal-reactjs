import React, { useState } from 'react'
import SectionTitle from '../../shared/SectionTitle';
import {categories} from '../../../data/category';
import SingleCategory from './SingleCategory';
import LoadMoreButton from '../../shared/LoadMoreButton';
import { slice } from 'lodash';

const PopularCategory = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(8);
  const initialCategories = slice(categories, 0, index);

  const loadMore = () => {
    setIndex(index + 8);
    console.log(index);
    if (index >= categories.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }

  return (
    <section class="popular-category section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            {/* section title */}
            <SectionTitle subtitle="Popular" title="Popular categories" description="Helping professionals find their dream job & Helping professionals find their dream job." />

            {/* section data */}
            <div class="row row-gutter">
              {
                initialCategories.map((category) => <SingleCategory key={category.id} data={category} />)
              }
            </div>

            {/* load more button */}
            {
              !isCompleted && (
                <div class="col-lg-12">
                  <LoadMoreButton action={loadMore}/>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularCategory;