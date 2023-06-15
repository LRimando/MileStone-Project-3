import React from 'react';

class Forecast extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    oneDay = (dayForecast, i) => {
        const now_temp = (i===0 ? dayForecast.now_temp: undefined);
        const weather_state_abbr = dayForecast.weather_state_abbr;
    
        return(
            <li key={this.props.time + i}>
                <h3>{this.props.time+i}</h3>
                <h4>{dayForecast.weather_state_name}</h4>
                <h4>Max: {dayForecast.max_temp}</h4>
                <h4>Min: {dayForecast.min_temp}</h4>
                {now_temp && (<h4>Now: {now_temp}</h4>)}
            </li>
        )
    }
        
        render() {
            let forecastDays=this.props.forecastDays
            return(
                <div className='location-style'>
                    <h4>{this.props.city} <br/>
                    <span>Time:{this.props.time}</span>
                    </h4>
                    <ul>
                        {forecastDays.map((day,index) => this.oneDay(day, index))}
                    </ul>
                </div>
            )
        }
    }
    


