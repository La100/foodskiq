import {  AcademicCapIcon, ChartPieIcon, ChatBubbleLeftRightIcon} from '@heroicons/react/20/solid'
import Image from 'next/image'
const features = [
  {
    name: 'Szkolenia',
    description:
      'Szeroki obszar zarządzania jakością i bezpieczeństwem żywności, umożliwiający budowanie i ochronę wizerunku marki oraz zapewnienie zdrowia konsumentów.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Audyty',
    description: 'Po audycie klient otrzymuje raport wraz z rekomendacjami i propozycją działań naprawczych, jak również pomoc w ich wprowadzeniu. ',
    icon: ChartPieIcon,
  },
  {
    name: 'Konsultacje',
    description: 'Kompleksowe konsultacje począwszy od oceny ryzyka po zarządzanie kryzysowe. ',
    icon: ChatBubbleLeftRightIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-12 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Zadbaj o bezpieczeństwo</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uniknij kryzysu w zakładzie pracy </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Oferowane przeze nas usługi są skierowane do działów jakości i R&D, technologów, pracowników laboratoriów i działów produkcji oraz marketingu.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/food1.jpg"
            alt="Bezpieczeństwo żywnośći"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
