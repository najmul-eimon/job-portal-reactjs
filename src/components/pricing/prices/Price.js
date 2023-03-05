import SectionTitle from '../../shared/SectionTitle';
import SinglePrice from './SinglePrice';

const Price = () => {
  return (
    <section class="pricing section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            {/* section title */}
            <SectionTitle subtitle="Pricing" title="Simple & transparent pricing" description="Access to all features.no credit card required." />
            
            <div class="pricing-cards">
              <div class="row">
                <SinglePrice/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Price;