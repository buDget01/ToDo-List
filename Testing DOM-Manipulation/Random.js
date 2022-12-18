navigation_list.addEventListener("click", displayToDo_Table)

/*function displayToDo_List()
{
    ToDo_List_JSON.forEach(function(e)
    {
        let ToDo_li = document.createElement('li')
        ToDo_li.innerText = e
        console.log(ToDo_li)
    }
    )
}
*/

function displayToDo_Table(data)
{
    list_table.style=""
    list_table_header.style=""

    let ToDo_table = document.getElementById("ToDo_table")

    for (var i = 0; i < data.length; i++)
    {
        let table_row = `<tr> 
                            <td>
                                ${data[i].user}
                            </td>
                            <td>
                                ${data[i].creation_date}
                            </td>
                            <td>
                                ${data[i].toDo}
                            </td>

        </tr>`

        ToDo_table.innerHTML += table_row
    }
}



/* JSON FILE OF ITEMS IN TODO_LIST*/ 
let ToDo_List_JSON = 
[
    {
        "user": "Patrick",
        "creation_date": { "day": 25, "month": 11},
        "deadline":{ "day": 30, "month": 11},
        "toDo": "Geburtstageinladungen verschicken.",
        "completed": false
    },

    {
        "user": "Sarah",
        "creation_date": { "day": 23, "month": 11},
        "deadline":{ "day": 27, "month": 11},
        "toDo": "Zimmer aufräumen.",
        "completed": false
    },

    {
        "user": "Neo",
        "creation_date": { "day": 10, "month": 11},
        "deadline":{ "day": 20, "month": 11},
        "toDo": "Für Franzprüfung lernen.",
        "completed": false 
    }
]
