module.exports =  {
    convertDate: (date) => {
        if (date !== undefined && date !== '' && date) {
            let dueDate = new Date(date)
            const formattedDate =
            dueDate.toLocaleString("en", { day: "2-digit" }) + ' ' + 
            dueDate.toLocaleString("en", { month: "short"  }) + ' ' +
            dueDate.toLocaleString("en", { year: "numeric"}) + ' at ' +
            dueDate.toLocaleString("en", { hour: "numeric", minute: "2-digit" });
            return formattedDate
        }else {
            return null
        }
    }
}