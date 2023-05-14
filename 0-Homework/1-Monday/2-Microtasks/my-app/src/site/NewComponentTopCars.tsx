
type NewComponentTopCarsType = {
   topCars: topCarsTupe[]
}

type topCarsTupe = {
   manufacturer: string
   model: string
}

export const NewComponentTopCars = (props: NewComponentTopCarsType) => {
   return (
      <>
         <h1> Стейт для самостоятельной работы по методу map:</h1>
         <table>
            {props.topCars.map((objectFromTopCarsArray: topCarsTupe, index) => {
               return (
                  <>
                     <tbody>
                        <tr key={index}> {/* Показывает ошибку key */}
                           <td>{index + 1}</td>
                           <th>{objectFromTopCarsArray.manufacturer}</th>
                           <td>{objectFromTopCarsArray.model}</td>
                        </tr>
                     </tbody>
                  </>
               )
            })}

         </table>

      </>
   );
};