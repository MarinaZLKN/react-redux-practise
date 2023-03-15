import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {JOBS} from 'modules/api/endpoints'
import apiActions from 'modules/api/actions'
import api from "../../modules/api/api";

export default function Jobs() {
    const state= useSelector(state => state.api[JOBS])
    const dispatch = useDispatch();

   useEffect(async() => {
       try {
           dispatch(apiActions.fetch(JOBS));

           const data = await api.fetch(JOBS);

           dispatch(apiActions.fetchSuccess(JOBS, data))
       } catch(e) {
           dispatch(apiActions.fetchFailure(JOBS, e))
       }
   }, []);


    return (
        <div>
            Jobs Component
        </div>
    );
}