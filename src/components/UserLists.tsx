import React, { useEffect } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { fetchUsers } from '../utils/services';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import styles from '../styles/users.module.scss'


const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 250 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'email', headerName: 'Email Id', width: 250 },
    { field: 'role', headerName: 'Role', width: 250 },
];

function UserLists({ userData, fetchUsers }: any) {
    useEffect(() => { fetchUsers() }, [fetchUsers]);

    return <div className={styles.users}>
        {userData.loading ? <img src={logo} className={styles.loading} alt="logo" /> :
            userData.error ? <p>{userData.error}</p> :
                <div className={styles.userList}>
                    <DataGrid rows={userData.data} columns={columns} />
                </div>}
    </div>
}

const mapStateToProps = (state: any) => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch: any) => {

    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLists)