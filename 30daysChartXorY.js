const monthsOfDays=(month:any)=>{
  let daysOfMonth:any ={}
  switch (month) {
    case '1':
      daysOfMonth={
        month:"January",
        days:31
      }
     break;
    case '2':
      daysOfMonth={
        month:"February",
        days:28
      }
      break
    case '3':
      daysOfMonth={
        month:"March",
        days:31
      }
      break;
    case '4':
      daysOfMonth={
        month:"April",
        days:30,
      }
      break;
    case '5':
      daysOfMonth={
        month:"May",
        days:31,
      }
      break;
    case '6':
      daysOfMonth={
        month:"June",
        days:30,
      }
      break
      case '7':
        daysOfMonth={
          month:"July",
          days:31,
        }
        break
        case '8':
        daysOfMonth={
          month:"August",
          days:31,
        }
        break
        case '9':
          daysOfMonth={
            month:"September",
            days:30,
          }
          break
        case '10':
            daysOfMonth={
              month:"October",
              days:31,
            }
            break
        case '11':
              daysOfMonth={
                month:"November",
                days:30,
              }
            break
        case '12':
                daysOfMonth={
                  month:"November",
                  days:31,
                }
            break
  
    default:
      break;
   
  }
  return daysOfMonth
}
const mn=monthsOfDays(getMonthData)

    // const days=chartData.map(({days}:any)=>{
    //   return days
    // })
    const days=Array.from({ length: mn.days }, (_, i) => i + 1)//-> days of month [1,2,3,4...]
    const data=Array.from({ length: mn.days }, (_, i) => 0 + 0)//-> days of month [0,0,0,] --> replace data of days
    console.log('days',days)
    for (let i = 0; i < chartData.length; i++) {
      data[chartData[i].days-1] = chartData[i].count;
    }
  const finalData={
      days,
      data
    }
