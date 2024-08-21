import { BanknotesIcon, ShoppingBagIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'

import carDashboard from '../../assets/Dash.png'


const carFeatures = [
    {
      name: 'Shop with Ease.',
      description:
        'Discover a seamless browsing experience. Filter through thousands of vehicles by make, model, price, and more to find your ideal match in no time.',
      icon: ShoppingBagIcon,
    },
    {
      name: 'Trusted Dealers. ',
      description: 'We partner with the most reputable dealerships, ensuring that every car listed meets our high standards of quality and reliability.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Financing Options.',
      description: 'Get pre-approved for financing directly through our platform. We offer competitive rates and flexible terms to help you get behind the wheel faster.',
      icon: BanknotesIcon,
    },
  ]

const Feature = () => {
  return (
    <>
     <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-bold leading-7 text-logoBlue ">Drive Your Dream Car</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience Car Shopping Reimagined</p>
              <p className="mt-6 text-[16px] tracking-tight leading-7 font-poppins text-gray-600">
              Find the car you've been dreaming of, tailored to your preferences. Whether you're looking for a family-friendly SUV or a sleek sports car, our marketplace has it all.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {carFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-Bree font-medium text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-6 w-6 text-logoBlue" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline font-poppins tracking-tight text-[15px]">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={carDashboard}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Feature
