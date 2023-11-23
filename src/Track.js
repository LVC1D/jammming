export function Track({artist, track}) {
    return (
        <li>
            <p style={{display: "inline-block"}}>
                {artist} - {track}
            </p>
            <button type="button">+</button>
        </li>
    )
}
