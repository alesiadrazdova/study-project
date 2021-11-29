function OnLoadingEventData(Component) {
    return function LoadingEventsData({ isLoading, ...props }) {
        if(!isLoading) return <Component { ...props } />

        else return (
            <div>
                <h1>Please, wait. Data is loading...</h1>
            </div>
        )
    }
}

export default OnLoadingEventData;