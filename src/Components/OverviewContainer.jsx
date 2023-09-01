import { OverviewCard, OverviewTodayCard } from './OverviewCard'
import data from '../Data/data.json'

const converNumbertoK = (number) => {
  if( number >= 10000){
    number = number / 1000
    return number + 'K'
  }
  return number
}

export const OverviewContainer = () => {
  return (
    <section className="absolute top-[191px] tablet:top-[140px] desktop:top-[160px] left-0 right-0 flex px-4 desktop:px-0 flex-wrap max-w-[1440px] mx-auto">
        {
          data.overview.map(object => 
            <OverviewCard
              key={object.id}
              user={object.user}
              network={object.network}
              audienceType={object.audienceType} 
              audience={converNumbertoK(object.audience)}
              today={object.today} 
              isUp={object.isUp}
            />
          )
        }
      </section> 
  )
}

export const OverviewTodayContainer = () => {
  return (
    <section className=' max-w-[1440px]'>
      <h2 className="text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-8 dark:text-White desktop:ml-0">Overview - Today</h2>
      <div className="flex flex-wrap px-4"> 
      {
        data['overview-today'].map(object => 
          <OverviewTodayCard
            key={object.id}
            network={object.network}
            statsType={object.statsType}
            stats={converNumbertoK(object.stats)}
            porcentage={object.porcentage}
            isUp={object.isUp}
          />
        )
      }
    </div>
    </section>
  )
}