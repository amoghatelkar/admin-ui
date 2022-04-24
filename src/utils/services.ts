import axios from "axios"
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from "../redux/users/usersActions"

export const fetchUsers = () => {
    return (dispatch:any) =>{

        dispatch(fetchUsersRequest);
        axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then(response => {
        const data = response.data;
        dispatch(fetchUsersSuccess(data));
        }).catch(error => {
            dispatch(fetchUsersFailure(error.message));
        });

    }
}