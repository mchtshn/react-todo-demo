function TodoRowItem(){
    const rowNumber = 1;
    const rowDescription = "Feed dog";
    const rwoAssigned = "Mücahit";

    return(
       <tr>
           <th scope="row">{rowNumber}</th>
           <td >{rowDescription}</td>
           <td >{rwoAssigned}</td>
       </tr>
    )
   }
   
   export default TodoRowItem;