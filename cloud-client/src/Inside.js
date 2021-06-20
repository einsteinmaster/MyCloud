import React , {useState,useEffect} from 'react'
import './App.css';
import { useTable } from 'react-table';
import Cookies from 'js-cookie';

const Inside = ({ onLogout, onUpload}) => {
	const [data,setData] = useState([]);

	const loadData = () => {
		let headers = new Headers();

		headers.set('Authorization', 'Basic ' + Cookies.get('cookie'));

		fetch(
			'/upload/getFileList.php',
			{
				method: 'GET',
				headers: headers
			}
		)
			.then(result => result.json())
			.then((result) => {
				setData(result.filter(i => !i.name.endsWith(".php") && i.name !== "." && i.name !== ".." && !i.name.startsWith(".")));
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	useEffect(() => {
		loadData();
		return () => {
			
		}
	}, [])

	const columns = React.useMemo(
		() => [
			{
				Header: 'Datei',
				accessor: 'name',
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
				<div className="MenuButton">
					<button onClick={onUpload}>Upload</button>
				</div>
				<div className="Spacer">
				</div>
				<div className="MenuButton">
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
