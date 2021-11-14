const prettyDate = (date) => {
    const newDate = new Date(date)

    return (
        ("0" + newDate.getDate()).slice(-2) +
        "." +
        ("0" + (newDate.getMonth() + 1)).slice(-2) +
        "." +
        newDate.getFullYear() +
        " " +
        ("0" + newDate.getHours()).slice(-2) +
        ":" +
        ("0" + newDate.getMinutes()).slice(-2)
    )
}

const prettyName = ({ surname, name, patronymic }) => {
    return `${surname} ${name[0]}.${patronymic[0]}.`
}

export { prettyDate, prettyName }
