import './table.css';

const Table = () =>{
    return(
        <table >
            <tr className="top" >
                <th className="top-left">1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th className="top-right">5</th>
            </tr>
            <tr>
                <td>1.1</td>
                <td>1.2</td>
                <td>1.3</td>
                <td>1.4</td>
                <td>1.5</td>
            </tr>
            <tr>
                <td>2.1</td>
                <td>2.2</td>
                <td>2.3</td>
                <td>2.4</td>
                <td>2.5</td>
            </tr>
            <tr>
                <td>3.1</td>
                <td>3.2</td>
                <td>3.3</td>
                <td>3.4</td>
                <td>3.5</td>
            </tr>
            <tr>
                <td className="bottom-left">4.1</td>
                <td>4.2</td>
                <td>4.3</td>
                <td>4.4</td>
                <td className="bottom-right">4.5</td>
            </tr>
            
            
        </table>
    )
}
export default Table;