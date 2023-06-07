function IndicatorText({indicator}) {
    return (
        <>
            {
                (() => {
                    if (indicator === 'acousticness') {
                        return (<div>
                             Represents the likelihood of your tracks being acoustic. 
                             A lower value indicates a higher presence of electronic or synthesized sounds.
                        </div>)
                    } else if (indicator === 'energy') {
                        return (<div>
                            Measures the intensity and activity level of your tracks. 
                            Higher values indicate more energetic and lively music.
                        </div>)
                    } else if (indicator === 'danceability') {
                        return (<div>
                            A higher danceability score indicates that the music in your library has
                             a strong rhythmic foundation and catchy beats.
                        </div>)
                    } else if (indicator === 'instrumentalness') {
                        return (<div>
                             Indicates the likelihood of your tracks being instrumental without vocals. 
                             A higher value suggests a higher probability of instrumental tracks.
                        </div>)
                    } else if (indicator === 'liveness') {
                        return (<div>
                            Reflects the presence of a live audience or live performance elements in your tracks. 
                            Higher values indicate a higher chance of live recordings.
                        </div>)
                    } else if (indicator === 'loudness') {
                        return (<div>
                            Represents the overall volume level of your tracks.
                            Negative values indicate quieter tracks, while positive values represent louder ones.
                        </div>)
                    } else if (indicator === 'speechiness') {
                        return (<div>
                            Indicates the presence of spoken words or vocals in your tracks. 
                            Higher values suggest a higher proportion of spoken words.
                        </div>)
                    } else if (indicator === 'tempo') {
                        return (<div>
                            Represents average the beats per minute (BPM) of your tracks, 
                            indicating the speed or tempo of the music.
                        </div>)
                    } else if (indicator === 'valence') {
                        return (<div>
                            Reflects the musical positiveness or happiness of your tracks. 
                            Higher values indicate more positive or happier tracks.
                        </div>)
                    } else if (indicator === 'mainstream') {
                        return (<div>
                            Mainstream score indicates how closely your music aligns with mainstream trends. 
                            This score helps you understand the popularity or mainstream appeal of your music collection.
                        </div>)
                    } else if (indicator === 'boringness') {
                        return (<div>
                            This indicator offers insights into the diversity and uniqueness of your tracks, 
                            allowing you to assess the breadth of your musical choices.
                        </div>)
                    }
                })()
            }
        </>
    );
}

export default IndicatorText;