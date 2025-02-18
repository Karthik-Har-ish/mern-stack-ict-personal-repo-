import {TableContainer, Table, TableHead,TableBody,TableCell,TableRow} from '@mui/material'

export default function TableElement(){
    return (
        <div className="table">
        <TableContainer>
            <Table style={{width:"fit-content",backgroundColor:"white"}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Letter</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Place</TableCell>
                        <TableCell>Animal</TableCell>
                        <TableCell>Thing</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>K</TableCell>
                        <TableCell>Karthik</TableCell>
                        <TableCell>Kenya</TableCell>
                        <TableCell>Kangaroo</TableCell>
                        <TableCell>Kite</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
      </div>
    )
}