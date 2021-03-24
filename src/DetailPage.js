function DetailPage({match}) {
    return(
        <div>
            <h1>This is a details page with id {match.params.id}</h1>
        </div>
    )
};

export default DetailPage;