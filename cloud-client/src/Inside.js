import React from 'react'
import './Inside.css';
import { useTable } from 'react-table'

const Inside = ({ onLogout, onUpload}) => {

	const data = React.useMemo(
		() => [
			{
				file: 'Hello',
				code: 'World',
			}
		],
		[]
	)

	const columns = React.useMemo(
		() => [
			{
				Header: 'Datei',
				accessor: 'file', // accessor is the "key" in the data
			},
			{
				Header: 'Access Code',
				accessor: 'code',
			},
		],
		[]
	)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data })

	return (
		<div className="Inside">
			<div className="TopMenu">
				<div className="UploadButton">
					<button onClick={onUpload}>Upload</button>
				</div>
				<div className="Spacer">
				</div>
				<div className="LogoutButton">
					<button type="button" onClick={onLogout}>Logout</button>
				</div>
			</div>
			<div className="MainBox">
				<table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
					<thead>
						{headerGroups.map(headerGroup => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
									<th
										{...column.getHeaderProps()}
										style={{
											background: 'aliceblue',
											color: 'black',
											fontWeight: 'bold',
										}}
									>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map(row => {
							prepareRow(row)
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map(cell => {
										return (
											<td
												{...cell.getCellProps()}
												style={{
													padding: '10px',
													border: 'solid 1px white',
												}}
											>
												{cell.render('Cell')}
											</td>
										)
									})}
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Inside
